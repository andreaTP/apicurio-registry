package io.apicurio.registry.rest.client.ids.contentids;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.ids.contentids.item.WithContentItemRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /ids/contentIds
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class ContentIdsRequestBuilder extends BaseRequestBuilder {
    /**
     * Access artifact content utilizing the unique content identifier for that content.
     * @param contentId Global identifier for a single artifact content.
     * @return a WithContentItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithContentItemRequestBuilder byContentId(@jakarta.annotation.Nonnull final Long contentId) {
        Objects.requireNonNull(contentId);
        final HashMap<String, Object> urlTplParams = new HashMap<String, Object>(this.pathParameters);
        urlTplParams.put("contentId", contentId);
        return new WithContentItemRequestBuilder(urlTplParams, requestAdapter);
    }
    /**
     * Instantiates a new ContentIdsRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ContentIdsRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids/contentIds", pathParameters);
    }
    /**
     * Instantiates a new ContentIdsRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ContentIdsRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids/contentIds", rawUrl);
    }
}
