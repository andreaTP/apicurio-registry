import { ReferencesRequestBuilder } from './references/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Access artifact content utilizing the SHA-256 hash of the content.
 */
export interface WithContentHashItemRequestBuilder extends BaseRequestBuilder<WithContentHashItemRequestBuilder> {
    /**
     * The references property
     */
    get references(): ReferencesRequestBuilder;
    /**
     * Gets the content for an artifact version in the registry using the SHA-256 hash of the content.  This content hash may be shared by multiple artifactversions in the case where the artifact versions have identical content.This operation may fail for one of the following reasons:* No content with this `contentHash` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ArrayBuffer | undefined>;
    /**
     * Gets the content for an artifact version in the registry using the SHA-256 hash of the content.  This content hash may be shared by multiple artifactversions in the case where the artifact versions have identical content.This operation may fail for one of the following reasons:* No content with this `contentHash` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithContentHashItemRequestBuilderUriTemplate = "{+baseurl}/ids/contentHashes/{contentHash}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const WithContentHashItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithContentHashItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithContentHashItemRequestBuilderRequestsMetadata: RequestsMetadata;
