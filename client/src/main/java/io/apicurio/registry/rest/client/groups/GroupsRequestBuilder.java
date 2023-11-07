package io.apicurio.registry.rest.client.groups;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.BaseRequestConfiguration;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.RequestOption;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParsableFactory;
import io.apicurio.registry.rest.client.groups.item.WithGroupItemRequestBuilder;
import io.apicurio.registry.rest.client.models.CreateGroupMetaData;
import io.apicurio.registry.rest.client.models.Error;
import io.apicurio.registry.rest.client.models.GroupMetaData;
import io.apicurio.registry.rest.client.models.GroupSearchResults;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Collection of the groups in the registry.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class GroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Collection to manage a single group in the registry.
     * @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     * @return a WithGroupItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithGroupItemRequestBuilder byGroupId(@jakarta.annotation.Nonnull final String groupId) {
        Objects.requireNonNull(groupId);
        final HashMap<String, Object> urlTplParams = new HashMap<String, Object>(this.pathParameters);
        urlTplParams.put("groupId", groupId);
        return new WithGroupItemRequestBuilder(urlTplParams, requestAdapter);
    }
    /**
     * Instantiates a new GroupsRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public GroupsRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/groups{?limit*,offset*,order*,orderby*}", pathParameters);
    }
    /**
     * Instantiates a new GroupsRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public GroupsRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/groups{?limit*,offset*,order*,orderby*}", rawUrl);
    }
    /**
     * Returns a list of all groups.  This list is paged.
     * @return a CompletableFuture of GroupSearchResults
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<GroupSearchResults> get() {
        return get(null);
    }
    /**
     * Returns a list of all groups.  This list is paged.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of GroupSearchResults
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<GroupSearchResults> get(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = toGetRequestInformation(requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendAsync(requestInfo, GroupSearchResults::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Creates a new group.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)* The group already exist (HTTP error `409`)
     * @param body The request body
     * @return a CompletableFuture of GroupMetaData
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<GroupMetaData> post(@jakarta.annotation.Nonnull final CreateGroupMetaData body) {
        return post(body, null);
    }
    /**
     * Creates a new group.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)* The group already exist (HTTP error `409`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of GroupMetaData
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<GroupMetaData> post(@jakarta.annotation.Nonnull final CreateGroupMetaData body, @jakarta.annotation.Nullable final java.util.function.Consumer<PostRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = toPostRequestInformation(body, requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("409", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendAsync(requestInfo, GroupMetaData::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Returns a list of all groups.  This list is paged.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation() {
        return toGetRequestInformation(null);
    }
    /**
     * Returns a list of all groups.  This list is paged.
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
     * Creates a new group.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)* The group already exist (HTTP error `409`)
     * @param body The request body
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPostRequestInformation(@jakarta.annotation.Nonnull final CreateGroupMetaData body) {
        return toPostRequestInformation(body, null);
    }
    /**
     * Creates a new group.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)* The group already exist (HTTP error `409`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPostRequestInformation(@jakarta.annotation.Nonnull final CreateGroupMetaData body, @jakarta.annotation.Nullable final java.util.function.Consumer<PostRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        requestInfo.headers.add("Accept", "application/json");
        requestInfo.setContentFromParsable(requestAdapter, "application/json", body);
        if (requestConfiguration != null) {
            final PostRequestConfiguration requestConfig = new PostRequestConfiguration();
            requestConfiguration.accept(requestConfig);
            requestInfo.headers.putAll(requestConfig.headers);
            requestInfo.addRequestOptions(requestConfig.options);
        }
        return requestInfo;
    }
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @return a GroupsRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public GroupsRequestBuilder withUrl(@jakarta.annotation.Nonnull final String rawUrl) {
        Objects.requireNonNull(rawUrl);
        return new GroupsRequestBuilder(rawUrl, requestAdapter);
    }
    /**
     * Returns a list of all groups.  This list is paged.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class GetQueryParameters {
        /**
         * The number of groups to return.  Defaults to 20.
         */
        @jakarta.annotation.Nullable
        public Integer limit;
        /**
         * The number of groups to skip before starting the result set.  Defaults to 0.
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
    public class GetRequestConfiguration extends BaseRequestConfiguration {
        /**
         * Request query parameters
         */
        @jakarta.annotation.Nullable
        public GetQueryParameters queryParameters = new GetQueryParameters();
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class PostRequestConfiguration extends BaseRequestConfiguration {
    }
}
