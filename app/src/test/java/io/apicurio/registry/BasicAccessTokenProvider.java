//package io.apicurio.registry;
//
//import okhttp3.FormBody;
//
//import java.time.Duration;
//
//public class BasicAccessTokenProvider extends AbstractAccessTokenProvider {
//
//    private final String username;
//    private final String password;
//
//    public BasicAccessTokenProvider(String authServerUrl, String username, String password) {
//        this(authServerUrl, username, password, DEFAULT_TOKEN_EXPIRATION_REDUCTION, null);
//    }
//
//    public BasicAccessTokenProvider(String authServerUrl, String username, String password, Duration tokenExpirationReduction) {
//        this(authServerUrl, username, password, tokenExpirationReduction, null);
//    }
//    public BasicAccessTokenProvider(String authServerUrl, String username, String password, Duration tokenExpirationReduction, String scope) {
//        super(authServerUrl, tokenExpirationReduction, scope);
//        this.username = username;
//        this.password = password;
//    }
//    @Override
//    protected FormBody.Builder getParams() {
//        return new FormBody.Builder()
//                .add("grant_type", PASSWORD_GRANT)
////                Those have been in the original implementation, but I think it's not correct
////                .add("client_id", clientId)
////                .add("client_secret", clientSecret)
//                .add("username", username)
//                .add("password", password);
//    }
//}
