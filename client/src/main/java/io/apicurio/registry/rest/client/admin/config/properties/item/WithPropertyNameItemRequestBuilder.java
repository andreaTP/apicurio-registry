package io.apicurio.registry.rest.client.admin.config.properties.item;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.BaseRequestConfiguration;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.RequestOption;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParsableFactory;
import io.apicurio.registry.rest.client.models.ConfigurationProperty;
import io.apicurio.registry.rest.client.models.Error;
import io.apicurio.registry.rest.client.models.UpdateConfigurationProperty;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Manage a single configuration property (by name).
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class WithPropertyNameItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WithPropertyNameItemRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public WithPropertyNameItemRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin/config/properties/{propertyName}", pathParameters);
    }
    /**
     * Instantiates a new WithPropertyNameItemRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public WithPropertyNameItemRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin/config/properties/{propertyName}", rawUrl);
    }
    /**
     * Resets the value of a single configuration property.  This will return the property toits default value (see external documentation for supported properties and their defaultvalues).This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> delete() {
        return delete(null);
    }
    /**
     * Resets the value of a single configuration property.  This will return the property toits default value (see external documentation for supported properties and their defaultvalues).This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
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
     * Returns the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @return a CompletableFuture of ConfigurationProperty
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ConfigurationProperty> get() {
        return get(null);
    }
    /**
     * Returns the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of ConfigurationProperty
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<ConfigurationProperty> get(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = toGetRequestInformation(requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("404", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendAsync(requestInfo, ConfigurationProperty::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Updates the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> put(@jakarta.annotation.Nonnull final UpdateConfigurationProperty body) {
        return put(body, null);
    }
    /**
     * Updates the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<Void> put(@jakarta.annotation.Nonnull final UpdateConfigurationProperty body, @jakarta.annotation.Nullable final java.util.function.Consumer<PutRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = toPutRequestInformation(body, requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("404", Error::createFromDiscriminatorValue);
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendPrimitiveAsync(requestInfo, Void.class, errorMapping);
    }
    /**
     * Resets the value of a single configuration property.  This will return the property toits default value (see external documentation for supported properties and their defaultvalues).This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toDeleteRequestInformation() {
        return toDeleteRequestInformation(null);
    }
    /**
     * Resets the value of a single configuration property.  This will return the property toits default value (see external documentation for supported properties and their defaultvalues).This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
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
     * Returns the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation() {
        return toGetRequestInformation(null);
    }
    /**
     * Returns the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
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
            requestInfo.headers.putAll(requestConfig.headers);
            requestInfo.addRequestOptions(requestConfig.options);
        }
        return requestInfo;
    }
    /**
     * Updates the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPutRequestInformation(@jakarta.annotation.Nonnull final UpdateConfigurationProperty body) {
        return toPutRequestInformation(body, null);
    }
    /**
     * Updates the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toPutRequestInformation(@jakarta.annotation.Nonnull final UpdateConfigurationProperty body, @jakarta.annotation.Nullable final java.util.function.Consumer<PutRequestConfiguration> requestConfiguration) {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = new RequestInformation();
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.urlTemplate = urlTemplate;
        requestInfo.pathParameters = pathParameters;
        requestInfo.setContentFromParsable(requestAdapter, "application/json", body);
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
     * @return a WithPropertyNameItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithPropertyNameItemRequestBuilder withUrl(@jakarta.annotation.Nonnull final String rawUrl) {
        Objects.requireNonNull(rawUrl);
        return new WithPropertyNameItemRequestBuilder(rawUrl, requestAdapter);
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class DeleteRequestConfiguration extends BaseRequestConfiguration {
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class GetRequestConfiguration extends BaseRequestConfiguration {
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class PutRequestConfiguration extends BaseRequestConfiguration {
    }
}
