package io.apicurio.registry.rest.client.admin.config;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.admin.config.properties.PropertiesRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /admin/config
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class ConfigRequestBuilder extends BaseRequestBuilder {
    /**
     * Manage configuration properties.
     */
    @jakarta.annotation.Nonnull
    public PropertiesRequestBuilder properties() {
        return new PropertiesRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new ConfigRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ConfigRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin/config", pathParameters);
    }
    /**
     * Instantiates a new ConfigRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ConfigRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin/config", rawUrl);
    }
}
