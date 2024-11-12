import { RoleMapping, RoleMappingSearchResults } from '../../models/index.js';
import { WithPrincipalItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Collection to manage role mappings for authenticated principals
 */
export interface RoleMappingsRequestBuilder extends BaseRequestBuilder<RoleMappingsRequestBuilder> {
    /**
     * Manage the configuration of a single role mapping.
     * @param principalId Unique id of a principal (typically either a user or service account).
     * @returns {WithPrincipalItemRequestBuilder}
     */
    byPrincipalId(principalId: string): WithPrincipalItemRequestBuilder;
    /**
     * Gets a list of all role mappings configured in the registry (if any).This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RoleMappingSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<RoleMappingsRequestBuilderGetQueryParameters> | undefined): Promise<RoleMappingSearchResults | undefined>;
    /**
     * Creates a new mapping between a user/principal and a role.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param body The mapping between a user/principal and their role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: RoleMapping, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Gets a list of all role mappings configured in the registry (if any).This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleMappingsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Creates a new mapping between a user/principal and a role.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param body The mapping between a user/principal and their role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: RoleMapping, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Gets a list of all role mappings configured in the registry (if any).This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
 */
export interface RoleMappingsRequestBuilderGetQueryParameters {
    /**
     * The number of role mappings to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of role mappings to skip before starting the result set.  Defaults to 0.
     */
    offset?: number;
}
/**
 * Uri template for the request builder.
 */
export declare const RoleMappingsRequestBuilderUriTemplate = "{+baseurl}/admin/roleMappings{?limit*,offset*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const RoleMappingsRequestBuilderNavigationMetadata: Record<Exclude<keyof RoleMappingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const RoleMappingsRequestBuilderRequestsMetadata: RequestsMetadata;
