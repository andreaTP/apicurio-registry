package io.apicurio.registry.rest.client.search.artifacts;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.BaseRequestConfiguration;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.RequestOption;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParsableFactory;
import io.apicurio.registry.rest.client.models.ArtifactSearchResults;
import io.apicurio.registry.rest.client.models.Error;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Search for artifacts in the registry.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class ArtifactsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ArtifactsRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ArtifactsRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/search/artifacts{?name*,offset*,limit*,order*,orderby*,labels*,properties*,description*,group*,globalId*,contentId*,canonical*,artifactType*}", pathParameters);
    }
    /**
     * Instantiates a new ArtifactsRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public ArtifactsRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/search/artifacts{?name*,offset*,limit*,order*,orderby*,labels*,properties*,description*,group*,globalId*,contentId*,canonical*,artifactType*}", rawUrl);
    }
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     * @return a CompletableFuture of ArtifactSearchResults
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ArtifactSearchResults> get() {
        return get(null);
    }
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of ArtifactSearchResults
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ArtifactSearchResults> get(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = toGetRequestInformation(requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendAsync(requestInfo, ArtifactSearchResults::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.
     * @param body Binary request body
     * @return a CompletableFuture of ArtifactSearchResults
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ArtifactSearchResults> post(@jakarta.annotation.Nonnull final InputStream body) {
        return post(body, null);
    }
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of ArtifactSearchResults
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ArtifactSearchResults> post(@jakarta.annotation.Nonnull final InputStream body, @jakarta.annotation.Nullable final java.util.function.Consumer<PostRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = toPostRequestInformation(body, requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendAsync(requestInfo, ArtifactSearchResults::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation() {
        return toGetRequestInformation(null);
    }
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        requestInfo.headers.add("Accept", "application/json");
        if (requestConfiguration != null) {
            final GetRequestConfiguration requestConfig = new GetRequestConfiguration();
            requestConfiguration.accept(requestConfig);
            requestInfo.addQueryParameters(requestConfig.queryParameters);
            requestInfo.headers.putAll(requestConfig.headers);
            requestInfo.addRequestOptions(requestConfig.options);
        }
        return requestInfo;
    }
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.
     * @param body Binary request body
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPostRequestInformation(@jakarta.annotation.Nonnull final InputStream body) {
        return toPostRequestInformation(body, null);
    }
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPostRequestInformation(@jakarta.annotation.Nonnull final InputStream body, @jakarta.annotation.Nullable final java.util.function.Consumer<PostRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        requestInfo.headers.add("Accept", "application/json");
        requestInfo.setStreamContent(body);
        if (requestConfiguration != null) {
            final PostRequestConfiguration requestConfig = new PostRequestConfiguration();
            requestConfiguration.accept(requestConfig);
            requestInfo.addQueryParameters(requestConfig.queryParameters);
            requestInfo.headers.putAll(requestConfig.headers);
            requestInfo.addRequestOptions(requestConfig.options);
        }
        return requestInfo;
    }
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @return a ArtifactsRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public ArtifactsRequestBuilder withUrl(@jakarta.annotation.Nonnull final String rawUrl) {
        Objects.requireNonNull(rawUrl);
        return new ArtifactsRequestBuilder(rawUrl, requestAdapter);
    }
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class GetQueryParameters {
        /**
         * Filter by contentId.
         */
        @jakarta.annotation.Nullable
        public Long contentId;
        /**
         * Filter by description.
         */
        @jakarta.annotation.Nullable
        public String description;
        /**
         * Filter by globalId.
         */
        @jakarta.annotation.Nullable
        public Long globalId;
        /**
         * Filter by artifact group.
         */
        @jakarta.annotation.Nullable
        public String group;
        /**
         * Filter by label.  Include one or more label to only return artifacts containing all of thespecified labels.
         */
        @jakarta.annotation.Nullable
        public String[] labels;
        /**
         * The number of artifacts to return.  Defaults to 20.
         */
        @jakarta.annotation.Nullable
        public Integer limit;
        /**
         * Filter by artifact name.
         */
        @jakarta.annotation.Nullable
        public String name;
        /**
         * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
         */
        @jakarta.annotation.Nullable
        public Integer offset;
        /**
         * Sort order, ascending (`asc`) or descending (`desc`).
         */
        @jakarta.annotation.Nullable
        public String order;
        /**
         * The field to sort by.  Can be one of:* `name`* `createdOn`
         */
        @jakarta.annotation.Nullable
        public String orderby;
        /**
         * Filter by one or more name/value property.  Separate each name/value pair using a colon.  Forexample `properties=foo:bar` will return only artifacts with a custom property named `foo`and value `bar`.
         */
        @jakarta.annotation.Nullable
        public String[] properties;
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class GetRequestConfiguration extends BaseRequestConfiguration {
        /**
         * Request query parameters
         */
        @jakarta.annotation.Nullable
        public GetQueryParameters queryParameters = new GetQueryParameters();
    }
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class PostQueryParameters {
        /**
         * Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts.
         */
        @jakarta.annotation.Nullable
        public String artifactType;
        /**
         * Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter.
         */
        @jakarta.annotation.Nullable
        public Boolean canonical;
        /**
         * The number of artifacts to return.  Defaults to 20.
         */
        @jakarta.annotation.Nullable
        public Integer limit;
        /**
         * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
         */
        @jakarta.annotation.Nullable
        public Integer offset;
        /**
         * Sort order, ascending (`asc`) or descending (`desc`).
         */
        @jakarta.annotation.Nullable
        public String order;
        /**
         * The field to sort by.  Can be one of:* `name`* `createdOn`
         */
        @jakarta.annotation.Nullable
        public String orderby;
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class PostRequestConfiguration extends BaseRequestConfiguration {
        /**
         * Request query parameters
         */
        @jakarta.annotation.Nullable
        public PostQueryParameters queryParameters = new PostQueryParameters();
    }
}
