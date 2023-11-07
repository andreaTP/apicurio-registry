package io.apicurio.registry.rest.client.search;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.search.artifacts.ArtifactsRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /search
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class SearchRequestBuilder extends BaseRequestBuilder {
    /**
     * Search for artifacts in the registry.
     */
    @jakarta.annotation.Nonnull
    public ArtifactsRequestBuilder artifacts() {
        return new ArtifactsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new SearchRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public SearchRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/search", pathParameters);
    }
    /**
     * Instantiates a new SearchRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public SearchRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/search", rawUrl);
    }
}
