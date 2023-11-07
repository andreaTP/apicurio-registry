package io.apicurio.registry.rest.client.system;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.system.info.InfoRequestBuilder;
import io.apicurio.registry.rest.client.system.limits.LimitsRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /system
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class SystemRequestBuilder extends BaseRequestBuilder {
    /**
     * Retrieve system information
     */
    @jakarta.annotation.Nonnull
    public InfoRequestBuilder info() {
        return new InfoRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Retrieve resource limits information
     */
    @jakarta.annotation.Nonnull
    public LimitsRequestBuilder limits() {
        return new LimitsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new SystemRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public SystemRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/system", pathParameters);
    }
    /**
     * Instantiates a new SystemRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public SystemRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/system", rawUrl);
    }
}
