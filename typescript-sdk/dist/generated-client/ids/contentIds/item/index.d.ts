import { ReferencesRequestBuilder } from './references/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Access artifact content utilizing the unique content identifier for that content.
 */
export interface WithContentItemRequestBuilder extends BaseRequestBuilder<WithContentItemRequestBuilder> {
    /**
     * The references property
     */
    get references(): ReferencesRequestBuilder;
    /**
     * Gets the content for an artifact version in the registry using the unique contentidentifier for that content.  This content ID may be shared by multiple artifactversions in the case where the artifact versions are identical.This operation may fail for one of the following reasons:* No content with this `contentId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ArrayBuffer | undefined>;
    /**
     * Gets the content for an artifact version in the registry using the unique contentidentifier for that content.  This content ID may be shared by multiple artifactversions in the case where the artifact versions are identical.This operation may fail for one of the following reasons:* No content with this `contentId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithContentItemRequestBuilderUriTemplate = "{+baseurl}/ids/contentIds/{contentId}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const WithContentItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithContentItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithContentItemRequestBuilderRequestsMetadata: RequestsMetadata;
