package io.apicurio.registry.rest.client.ids;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.ids.contenthashes.ContentHashesRequestBuilder;
import io.apicurio.registry.rest.client.ids.contentids.ContentIdsRequestBuilder;
import io.apicurio.registry.rest.client.ids.globalids.GlobalIdsRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /ids
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class IdsRequestBuilder extends BaseRequestBuilder {
    /**
     * The contentHashes property
     */
    @jakarta.annotation.Nonnull
    public ContentHashesRequestBuilder contentHashes() {
        return new ContentHashesRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The contentIds property
     */
    @jakarta.annotation.Nonnull
    public ContentIdsRequestBuilder contentIds() {
        return new ContentIdsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The globalIds property
     */
    @jakarta.annotation.Nonnull
    public GlobalIdsRequestBuilder globalIds() {
        return new GlobalIdsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new IdsRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public IdsRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids", pathParameters);
    }
    /**
     * Instantiates a new IdsRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public IdsRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids", rawUrl);
    }
}
