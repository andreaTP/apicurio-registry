import { ConfigurationProperty, UpdateConfigurationProperty } from '../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage a single configuration property (by name).
 */
export interface WithPropertyNameItemRequestBuilder extends BaseRequestBuilder<WithPropertyNameItemRequestBuilder> {
    /**
     * Resets the value of a single configuration property.  This will return the property toits default value (see external documentation for supported properties and their defaultvalues).This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Returns the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConfigurationProperty>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ConfigurationProperty | undefined>;
    /**
     * Updates the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: UpdateConfigurationProperty, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Resets the value of a single configuration property.  This will return the property toits default value (see external documentation for supported properties and their defaultvalues).This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Returns the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Updates the value of a single configuration property.This operation may fail for one of the following reasons:* Property not found or not configured (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: UpdateConfigurationProperty, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithPropertyNameItemRequestBuilderUriTemplate = "{+baseurl}/admin/config/properties/{propertyName}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithPropertyNameItemRequestBuilderRequestsMetadata: RequestsMetadata;
