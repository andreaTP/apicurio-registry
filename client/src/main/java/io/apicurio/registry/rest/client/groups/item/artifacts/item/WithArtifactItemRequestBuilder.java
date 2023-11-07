package io.apicurio.registry.rest.client.groups.item.artifacts.item;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.BaseRequestConfiguration;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.RequestOption;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParsableFactory;
import io.apicurio.registry.rest.client.groups.item.artifacts.item.meta.MetaRequestBuilder;
import io.apicurio.registry.rest.client.groups.item.artifacts.item.owner.OwnerRequestBuilder;
import io.apicurio.registry.rest.client.groups.item.artifacts.item.rules.RulesRequestBuilder;
import io.apicurio.registry.rest.client.groups.item.artifacts.item.state.StateRequestBuilder;
import io.apicurio.registry.rest.client.groups.item.artifacts.item.test.TestRequestBuilder;
import io.apicurio.registry.rest.client.groups.item.artifacts.item.versions.VersionsRequestBuilder;
import io.apicurio.registry.rest.client.models.ArtifactContent;
import io.apicurio.registry.rest.client.models.ArtifactMetaData;
import io.apicurio.registry.rest.client.models.Error;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Manage a single artifact.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class WithArtifactItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Manage the metadata of a single artifact.
     */
    @jakarta.annotation.Nonnull
    public MetaRequestBuilder meta() {
        return new MetaRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Manage the ownership of a single artifact.
     */
    @jakarta.annotation.Nonnull
    public OwnerRequestBuilder owner() {
        return new OwnerRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Manage the rules for a single artifact.
     */
    @jakarta.annotation.Nonnull
    public RulesRequestBuilder rules() {
        return new RulesRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Manage the state of an artifact.
     */
    @jakarta.annotation.Nonnull
    public StateRequestBuilder state() {
        return new StateRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Test whether content would pass update rules.
     */
    @jakarta.annotation.Nonnull
    public TestRequestBuilder test() {
        return new TestRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Manage all the versions of an artifact in the registry.
     */
    @jakarta.annotation.Nonnull
    public VersionsRequestBuilder versions() {
        return new VersionsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new WithArtifactItemRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public WithArtifactItemRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/groups/{groupId}/artifacts/{artifactId}{?references*}", pathParameters);
    }
    /**
     * Instantiates a new WithArtifactItemRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public WithArtifactItemRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/groups/{groupId}/artifacts/{artifactId}{?references*}", rawUrl);
    }
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also beingdeleted.  This may fail for one of the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> delete() {
        return delete(null);
    }
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also beingdeleted.  This may fail for one of the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> delete(@jakarta.annotation.Nullable final java.util.function.Consumer<DeleteRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = toDeleteRequestInformation(requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("404", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendPrimitiveAsync(requestInfo, Void.class, errorMapping);
    }
    /**
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of theresponse depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.This operation may fail for one of the following reasons:* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @return a CompletableFuture of InputStream
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<InputStream> get() {
        return get(null);
    }
    /**
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of theresponse depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.This operation may fail for one of the following reasons:* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of InputStream
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<InputStream> get(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = toGetRequestInformation(requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("404", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendPrimitiveAsync(requestInfo, InputStream.class, errorMapping);
    }
    /**
     * Updates an artifact by uploading new content.  The body of the request canbe the raw content of the artifact or a JSON object containing both the raw content anda set of references to other artifacts..  This is typically in JSON format for *most*of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The type of the content should be compatible with the artifact's type (it would bean error to update an `AVRO` artifact with new `OPENAPI` content, for example).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)When successful, this creates a new version of the artifact, making it the most recent(and therefore official) version of the artifact.
     * @param body The request body
     * @return a CompletableFuture of ArtifactMetaData
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ArtifactMetaData> put(@jakarta.annotation.Nonnull final ArtifactContent body) {
        return put(body, null);
    }
    /**
     * Updates an artifact by uploading new content.  The body of the request canbe the raw content of the artifact or a JSON object containing both the raw content anda set of references to other artifacts..  This is typically in JSON format for *most*of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The type of the content should be compatible with the artifact's type (it would bean error to update an `AVRO` artifact with new `OPENAPI` content, for example).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)When successful, this creates a new version of the artifact, making it the most recent(and therefore official) version of the artifact.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of ArtifactMetaData
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ArtifactMetaData> put(@jakarta.annotation.Nonnull final ArtifactContent body, @jakarta.annotation.Nullable final java.util.function.Consumer<PutRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = toPutRequestInformation(body, requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("404", Error::createFromDiscriminatorValue);
        errorMapping.put("409", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendAsync(requestInfo, ArtifactMetaData::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also beingdeleted.  This may fail for one of the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toDeleteRequestInformation() {
        return toDeleteRequestInformation(null);
    }
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also beingdeleted.  This may fail for one of the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toDeleteRequestInformation(@jakarta.annotation.Nullable final java.util.function.Consumer<DeleteRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.DELETE;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        if (requestConfiguration != null) {
            final DeleteRequestConfiguration requestConfig = new DeleteRequestConfiguration();
            requestConfiguration.accept(requestConfig);
            requestInfo.headers.putAll(requestConfig.headers);
            requestInfo.addRequestOptions(requestConfig.options);
        }
        return requestInfo;
    }
    /**
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of theresponse depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.This operation may fail for one of the following reasons:* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation() {
        return toGetRequestInformation(null);
    }
    /**
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of theresponse depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.This operation may fail for one of the following reasons:* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
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
     * Updates an artifact by uploading new content.  The body of the request canbe the raw content of the artifact or a JSON object containing both the raw content anda set of references to other artifacts..  This is typically in JSON format for *most*of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The type of the content should be compatible with the artifact's type (it would bean error to update an `AVRO` artifact with new `OPENAPI` content, for example).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)When successful, this creates a new version of the artifact, making it the most recent(and therefore official) version of the artifact.
     * @param body The request body
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPutRequestInformation(@jakarta.annotation.Nonnull final ArtifactContent body) {
        return toPutRequestInformation(body, null);
    }
    /**
     * Updates an artifact by uploading new content.  The body of the request canbe the raw content of the artifact or a JSON object containing both the raw content anda set of references to other artifacts..  This is typically in JSON format for *most*of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The type of the content should be compatible with the artifact's type (it would bean error to update an `AVRO` artifact with new `OPENAPI` content, for example).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)When successful, this creates a new version of the artifact, making it the most recent(and therefore official) version of the artifact.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPutRequestInformation(@jakarta.annotation.Nonnull final ArtifactContent body, @jakarta.annotation.Nullable final java.util.function.Consumer<PutRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        requestInfo.headers.add("Accept", "application/json");
        requestInfo.setContentFromParsable(requestAdapter, "application/create.extended+json", body);
        if (requestConfiguration != null) {
            final PutRequestConfiguration requestConfig = new PutRequestConfiguration();
            requestConfiguration.accept(requestConfig);
            requestInfo.headers.putAll(requestConfig.headers);
            requestInfo.addRequestOptions(requestConfig.options);
        }
        return requestInfo;
    }
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @return a WithArtifactItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithArtifactItemRequestBuilder withUrl(@jakarta.annotation.Nonnull final String rawUrl) {
        Objects.requireNonNull(rawUrl);
        return new WithArtifactItemRequestBuilder(rawUrl, requestAdapter);
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class DeleteRequestConfiguration extends BaseRequestConfiguration {
    }
    /**
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of theresponse depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.This operation may fail for one of the following reasons:* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class GetQueryParameters {
        /**
         * Allows the user to specify how references in the content should be treated.
         */
        @jakarta.annotation.Nullable
        public String references;
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
    public class PutRequestConfiguration extends BaseRequestConfiguration {
    }
}
