// TODO: should this go to common-client-things ?
// TODO: complete the implementation with password and clean it up

package io.apicurio.registry;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.microsoft.kiota.ApiException;
import com.microsoft.kiota.authentication.AccessTokenProvider;
import com.microsoft.kiota.authentication.AllowedHostsValidator;
import io.apicurio.rest.client.auth.exception.NotAuthorizedException;
import io.quarkus.logging.Log;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.net.URI;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import static io.apicurio.rest.client.request.Request.CONTENT_TYPE;

public abstract class AbstractAccessTokenProvider implements AccessTokenProvider {
    protected static final String CLIENT_CREDENTIALS_GRANT = "client_credentials";
    protected static final String PASSWORD_GRANT = "password";
    protected static final Duration DEFAULT_TOKEN_EXPIRATION_REDUCTION = Duration.ofSeconds(1);
    protected static final long DEFAULT_EXPIRES_IN = 1000;
    protected final String authServerUrl;
    private final String scope;
    private final Duration tokenExpirationReduction;
    private String cachedAccessToken;
    private Instant cachedAccessTokenExp;
    private final OkHttpClient client;
    private final ObjectMapper mapper = new ObjectMapper();

    protected AbstractAccessTokenProvider(String authServerUrl, Duration tokenExpirationReduction, String scope) {
        this.authServerUrl = authServerUrl.endsWith("/") ? authServerUrl : authServerUrl + "/";
        this.client = new OkHttpClient();
        this.scope = scope;
        if (null == tokenExpirationReduction) {
            this.tokenExpirationReduction = DEFAULT_TOKEN_EXPIRATION_REDUCTION;
        } else {
            this.tokenExpirationReduction = tokenExpirationReduction;
        }
    }

    protected abstract FormBody.Builder getParams();
    private CompletableFuture<Void> requestAccessToken() {
        var dataBuilder = getParams();
        if (scope != null) {
            dataBuilder.add("scope", scope);
        }
        var data = dataBuilder.build();

        Request request = new Request.Builder()
                .url(authServerUrl)
                .addHeader(CONTENT_TYPE, "application/x-www-form-urlencoded")
                .post(data)
                .build();
        Log.error("Going to request: " + request);

        var result = new CompletableFuture<Response>();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                result.completeExceptionally(e);
            }
            @Override
            public void onResponse(Call call, Response response) throws IOException {
                result.complete(response);
            }
        });

        return result.thenAccept(response -> {
            int code = -1;
            String body = null;
            JsonNode json = null;
            try {
                code = response.code();
                if (code == 200) {
                    body = response.body().string();
                }
                Log.error("Response code: " + code + " content: " + body);
            } catch (Exception e) {
                throw new RuntimeException("Error issuing a new token", e);
            }

            if (code == 200) {
                try {
                    Log.error("DEBUG " + body);
                    json = mapper.readTree(body);
                    cachedAccessToken = mapper.readTree(body).get("access_token").asText();
                } catch (Exception e) {
                    throw new RuntimeException("Error issuing a new token, received answer with body " + body, e);
                }
            } else if (code == 401) {
                throw new NotAuthorizedException(Integer.toString(code));
            } else {
                throw new RuntimeException("Error issuing a new token, received answer code " + code);
            }

            /*
            expiresIn is in seconds
            */
            Duration expiresIn = Duration.ofSeconds(Optional.ofNullable(json.get("expires_in")).map(j -> j.longValue()).orElse(DEFAULT_EXPIRES_IN));
            if (expiresIn.compareTo(this.tokenExpirationReduction) >= 0) {
                //expiresIn is greater than tokenExpirationReduction
                expiresIn = expiresIn.minus(this.tokenExpirationReduction);
            }
            this.cachedAccessTokenExp = Instant.now().plus(expiresIn);
        });
    }

//    public String obtainAccessTokenPasswordGrant(String username, String password) {
//        try {
//            final Map<String, String> params = Map.of("grant_type", PASSWORD_GRANT, "client_id", clientId, "client_secret", clientSecret, "username", username, "password", password);
//            final String paramsEncoded = params.entrySet().stream().map(entry -> String.join("=",
//                    URLEncoder.encode(entry.getKey(), UTF_8),
//                    URLEncoder.encode(entry.getValue(), UTF_8))
//            ).collect(Collectors.joining("&"));
//
//
//            return apicurioHttpClient.sendRequest(TokenRequestsProvider.obtainAccessToken(paramsEncoded)).getToken();
//
//        } catch (JsonProcessingException e) {
//            throw new IllegalStateException("Error found while trying to request a new token");
//        }
//    }

    private boolean isAccessTokenRequired() {
         return null == cachedAccessToken || isTokenExpired();
    }

    private boolean isTokenExpired() {
        return Instant.now().isAfter(this.cachedAccessTokenExp);
    }

    @NotNull
    @Override
    public CompletableFuture<String> getAuthorizationToken(@NotNull URI uri, @Nullable Map<String, Object> additionalAuthenticationContext) {
        var result = isAccessTokenRequired() ? requestAccessToken() : CompletableFuture.completedFuture(null);
        return result.thenApply(r -> cachedAccessToken);
    }

    @NotNull
    @Override
    public AllowedHostsValidator getAllowedHostsValidator() {
        return new AllowedHostsValidator(new String[]{});
    }
}
