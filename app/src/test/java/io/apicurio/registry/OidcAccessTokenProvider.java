// TODO: should this go to common-client-things ?
// TODO: complete the implementation with password and clean it up

package io.apicurio.registry;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.microsoft.kiota.authentication.AccessTokenProvider;
import com.microsoft.kiota.authentication.AllowedHostsValidator;
import io.apicurio.rest.client.auth.exception.NotAuthorizedException;
import io.quarkus.logging.Log;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.net.URI;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import static io.apicurio.rest.client.request.Request.CONTENT_TYPE;

public class OidcAccessTokenProvider extends AbstractAccessTokenProvider {

    private final String clientId;
    private final String clientSecret;

    public OidcAccessTokenProvider(String authServerUrl, String clientId, String clientSecret) {
        this(authServerUrl, clientId, clientSecret, DEFAULT_TOKEN_EXPIRATION_REDUCTION, null);
    }

    public OidcAccessTokenProvider(String authServerUrl, String clientId, String clientSecret, Duration tokenExpirationReduction) {
        this(authServerUrl, clientId, clientSecret, tokenExpirationReduction, null);
    }
    public OidcAccessTokenProvider(String authServerUrl, String clientId, String clientSecret, Duration tokenExpirationReduction, String scope) {
        super(authServerUrl, tokenExpirationReduction, scope);
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    protected FormBody.Builder getParams() {
        return new FormBody.Builder()
                .add("grant_type", CLIENT_CREDENTIALS_GRANT)
                .add("client_id", clientId)
                .add("client_secret", clientSecret);
    }
}
