import { ConfigurationProperty } from '../../../models/index.js';
import { WithPropertyNameItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage configuration properties.
 */
export interface PropertiesRequestBuilder extends BaseRequestBuilder<PropertiesRequestBuilder> {
    /**
     * Manage a single configuration property (by name).
     * @param propertyName The name of a configuration property.
     * @returns {WithPropertyNameItemRequestBuilder}
     */
    byPropertyName(propertyName: string): WithPropertyNameItemRequestBuilder;
    /**
     * Returns a list of all configuration properties that have been set.  The list is not paged.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConfigurationProperty[]>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ConfigurationProperty[] | undefined>;
    /**
     * Returns a list of all configuration properties that have been set.  The list is not paged.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const PropertiesRequestBuilderUriTemplate = "{+baseurl}/admin/config/properties";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const PropertiesRequestBuilderNavigationMetadata: Record<Exclude<keyof PropertiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const PropertiesRequestBuilderRequestsMetadata: RequestsMetadata;
