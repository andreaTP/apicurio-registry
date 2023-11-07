package io.apicurio.registry.rest.client.ids.globalids;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.ids.globalids.item.WithGlobalItemRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /ids/globalIds
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class GlobalIdsRequestBuilder extends BaseRequestBuilder {
    /**
     * Access artifact content utilizing an artifact version's globally unique identifier.
     * @param globalId Global identifier for an artifact version.
     * @return a WithGlobalItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithGlobalItemRequestBuilder byGlobalId(@jakarta.annotation.Nonnull final Long globalId) {
        Objects.requireNonNull(globalId);
        final HashMap<String, Object> urlTplParams = new HashMap<String, Object>(this.pathParameters);
        urlTplParams.put("globalId", globalId);
        return new WithGlobalItemRequestBuilder(urlTplParams, requestAdapter);
    }
    /**
     * Instantiates a new GlobalIdsRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public GlobalIdsRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids/globalIds", pathParameters);
    }
    /**
     * Instantiates a new GlobalIdsRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public GlobalIdsRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids/globalIds", rawUrl);
    }
}
