package io.apicurio.registry.rest.client.ids.contenthashes;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.ids.contenthashes.item.WithContentHashItemRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /ids/contentHashes
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class ContentHashesRequestBuilder extends BaseRequestBuilder {
    /**
     * Access artifact content utilizing the SHA-256 hash of the content.
     * @param contentHash SHA-256 content hash for a single artifact content.
     * @return a WithContentHashItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithContentHashItemRequestBuilder byContentHash(@jakarta.annotation.Nonnull final String contentHash) {
        Objects.requireNonNull(contentHash);
        final HashMap<String, Object> urlTplParams = new HashMap<String, Object>(this.pathParameters);
        urlTplParams.put("contentHash", contentHash);
        return new WithContentHashItemRequestBuilder(urlTplParams, requestAdapter);
    }
    /**
     * Instantiates a new ContentHashesRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ContentHashesRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids/contentHashes", pathParameters);
    }
    /**
     * Instantiates a new ContentHashesRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ContentHashesRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/ids/contentHashes", rawUrl);
    }
}
