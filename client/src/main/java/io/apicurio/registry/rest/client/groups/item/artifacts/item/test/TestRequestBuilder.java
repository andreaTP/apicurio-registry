package io.apicurio.registry.rest.client.groups.item.artifacts.item.test;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.BaseRequestConfiguration;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.RequestOption;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParsableFactory;
import io.apicurio.registry.rest.client.models.Error;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Test whether content would pass update rules.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class TestRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TestRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public TestRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/test", pathParameters);
    }
    /**
     * Instantiates a new TestRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public TestRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/test", rawUrl);
    }
    /**
     * Tests whether an update to the artifact's content *would* succeed for the provided content.Ultimately, this applies any rules configured for the artifact against the given contentto determine whether the rules would pass or fail, but without actually updating the artifactcontent.The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* The provided artifact type is not recognized (HTTP error `404`)* A server error occurred (HTTP error `500`)When successful, this operation simply returns a *No Content* response.  This responseindicates that the content is valid against the configured content rules for the artifact (or the global rules if no artifact rules are enabled).
     * @param body Binary request body
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> put(@jakarta.annotation.Nonnull final InputStream body) {
        return put(body, null);
    }
    /**
     * Tests whether an update to the artifact's content *would* succeed for the provided content.Ultimately, this applies any rules configured for the artifact against the given contentto determine whether the rules would pass or fail, but without actually updating the artifactcontent.The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* The provided artifact type is not recognized (HTTP error `404`)* A server error occurred (HTTP error `500`)When successful, this operation simply returns a *No Content* response.  This responseindicates that the content is valid against the configured content rules for the artifact (or the global rules if no artifact rules are enabled).
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> put(@jakarta.annotation.Nonnull final InputStream body, @jakarta.annotation.Nullable final java.util.function.Consumer<PutRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = toPutRequestInformation(body, requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("404", Error::createFromDiscriminatorValue);
        errorMapping.put("409", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendPrimitiveAsync(requestInfo, Void.class, errorMapping);
    }
    /**
     * Tests whether an update to the artifact's content *would* succeed for the provided content.Ultimately, this applies any rules configured for the artifact against the given contentto determine whether the rules would pass or fail, but without actually updating the artifactcontent.The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* The provided artifact type is not recognized (HTTP error `404`)* A server error occurred (HTTP error `500`)When successful, this operation simply returns a *No Content* response.  This responseindicates that the content is valid against the configured content rules for the artifact (or the global rules if no artifact rules are enabled).
     * @param body Binary request body
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPutRequestInformation(@jakarta.annotation.Nonnull final InputStream body) {
        return toPutRequestInformation(body, null);
    }
    /**
     * Tests whether an update to the artifact's content *would* succeed for the provided content.Ultimately, this applies any rules configured for the artifact against the given contentto determine whether the rules would pass or fail, but without actually updating the artifactcontent.The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the supported types, but may be in another format for a few (for example, `PROTOBUF`).The update could fail for a number of reasons including:* Provided content (request body) was empty (HTTP error `400`)* No artifact with the `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* The provided artifact type is not recognized (HTTP error `404`)* A server error occurred (HTTP error `500`)When successful, this operation simply returns a *No Content* response.  This responseindicates that the content is valid against the configured content rules for the artifact (or the global rules if no artifact rules are enabled).
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPutRequestInformation(@jakarta.annotation.Nonnull final InputStream body, @jakarta.annotation.Nullable final java.util.function.Consumer<PutRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        requestInfo.setStreamContent(body);
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
     * @return a TestRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public TestRequestBuilder withUrl(@jakarta.annotation.Nonnull final String rawUrl) {
        Objects.requireNonNull(rawUrl);
        return new TestRequestBuilder(rawUrl, requestAdapter);
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class PutRequestConfiguration extends BaseRequestConfiguration {
    }
}
