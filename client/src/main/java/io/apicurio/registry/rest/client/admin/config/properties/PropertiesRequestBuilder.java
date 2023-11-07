package io.apicurio.registry.rest.client.admin.config.properties;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.BaseRequestConfiguration;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.RequestOption;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParsableFactory;
import io.apicurio.registry.rest.client.admin.config.properties.item.WithPropertyNameItemRequestBuilder;
import io.apicurio.registry.rest.client.models.ConfigurationProperty;
import io.apicurio.registry.rest.client.models.Error;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Manage configuration properties.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class PropertiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Manage a single configuration property (by name).
     * @param propertyName The name of a configuration property.
     * @return a WithPropertyNameItemRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public WithPropertyNameItemRequestBuilder byPropertyName(@jakarta.annotation.Nonnull final String propertyName) {
        Objects.requireNonNull(propertyName);
        final HashMap<String, Object> urlTplParams = new HashMap<String, Object>(this.pathParameters);
        urlTplParams.put("propertyName", propertyName);
        return new WithPropertyNameItemRequestBuilder(urlTplParams, requestAdapter);
    }
    /**
     * Instantiates a new PropertiesRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public PropertiesRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin/config/properties", pathParameters);
    }
    /**
     * Instantiates a new PropertiesRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public PropertiesRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin/config/properties", rawUrl);
    }
    /**
     * Returns a list of all configuration properties that have been set.  The list is not paged.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @return a CompletableFuture of java.util.List<ConfigurationProperty>
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<java.util.List<ConfigurationProperty>> get() {
        return get(null);
    }
    /**
     * Returns a list of all configuration properties that have been set.  The list is not paged.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @return a CompletableFuture of java.util.List<ConfigurationProperty>
     */
    @jakarta.annotation.Nonnull
    public java.util.concurrent.CompletableFuture<java.util.List<ConfigurationProperty>> get(@jakarta.annotation.Nullable final java.util.function.Consumer<GetRequestConfiguration> requestConfiguration) {
        final RequestInformation requestInfo = toGetRequestInformation(requestConfiguration);
        final HashMap<String, ParsableFactory<? extends Parsable>> errorMapping = new HashMap<String, ParsableFactory<? extends Parsable>>();
        errorMapping.put("500", Error::createFromDiscriminatorValue);
        return this.requestAdapter.sendCollectionAsync(requestInfo, ConfigurationProperty::createFromDiscriminatorValue, errorMapping);
    }
    /**
     * Returns a list of all configuration properties that have been set.  The list is not paged.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @return a RequestInformation
     */
    @jakarta.annotation.Nonnull
    public RequestInformation toGetRequestInformation() {
        return toGetRequestInformation(null);
    }
    /**
     * Returns a list of all configuration properties that have been set.  The list is not paged.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @return a PropertiesRequestBuilder
     */
    @jakarta.annotation.Nonnull
    public PropertiesRequestBuilder withUrl(@jakarta.annotation.Nonnull final String rawUrl) {
        Objects.requireNonNull(rawUrl);
        return new PropertiesRequestBuilder(rawUrl, requestAdapter);
    }
    /**
     * Configuration for the request such as headers, query parameters, and middleware options.
     */
    @jakarta.annotation.Generated("com.microsoft.kiota")
    public class GetRequestConfiguration extends BaseRequestConfiguration {
    }
}
