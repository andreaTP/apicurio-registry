import { HandleReferencesType } from '../../../models/index.js';
import { ReferencesRequestBuilder } from './references/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Access artifact content utilizing an artifact version's globally unique identifier.
 */
export interface WithGlobalItemRequestBuilder extends BaseRequestBuilder<WithGlobalItemRequestBuilder> {
    /**
     * The references property
     */
    get references(): ReferencesRequestBuilder;
    /**
     * Gets the content for an artifact version in the registry using its globally uniqueidentifier.This operation may fail for one of the following reasons:* No artifact version with this `globalId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<WithGlobalItemRequestBuilderGetQueryParameters> | undefined): Promise<ArrayBuffer | undefined>;
    /**
     * Gets the content for an artifact version in the registry using its globally uniqueidentifier.This operation may fail for one of the following reasons:* No artifact version with this `globalId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<WithGlobalItemRequestBuilderGetQueryParameters> | undefined): RequestInformation;
}
/**
 * Gets the content for an artifact version in the registry using its globally uniqueidentifier.This operation may fail for one of the following reasons:* No artifact version with this `globalId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
 */
export interface WithGlobalItemRequestBuilderGetQueryParameters {
    /**
     * Allows the user to specify how references in the content should be treated.
     */
    references?: HandleReferencesType;
    /**
     * When set to `true`, the HTTP response will include a header named `X-Registry-ArtifactType`that contains the type of the artifact being returned.
     */
    returnArtifactType?: boolean;
}
/**
 * Uri template for the request builder.
 */
export declare const WithGlobalItemRequestBuilderUriTemplate = "{+baseurl}/ids/globalIds/{globalId}{?references*,returnArtifactType*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const WithGlobalItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithGlobalItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithGlobalItemRequestBuilderRequestsMetadata: RequestsMetadata;
