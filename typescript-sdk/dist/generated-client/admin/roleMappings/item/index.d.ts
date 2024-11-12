import { RoleMapping, UpdateRole } from '../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the configuration of a single role mapping.
 */
export interface WithPrincipalItemRequestBuilder extends BaseRequestBuilder<WithPrincipalItemRequestBuilder> {
    /**
     * Deletes a single role mapping, effectively denying access to a user/principal.This operation can fail for the following reasons:* No role mapping for the principalId exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Gets the details of a single role mapping (by `principalId`).This operation can fail for the following reasons:* No role mapping for the `principalId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RoleMapping>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<RoleMapping | undefined>;
    /**
     * Updates a single role mapping for one user/principal.This operation can fail for the following reasons:* No role mapping for the principalId exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: UpdateRole, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Deletes a single role mapping, effectively denying access to a user/principal.This operation can fail for the following reasons:* No role mapping for the principalId exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Gets the details of a single role mapping (by `principalId`).This operation can fail for the following reasons:* No role mapping for the `principalId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Updates a single role mapping for one user/principal.This operation can fail for the following reasons:* No role mapping for the principalId exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: UpdateRole, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithPrincipalItemRequestBuilderUriTemplate = "{+baseurl}/admin/roleMappings/{principalId}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithPrincipalItemRequestBuilderRequestsMetadata: RequestsMetadata;
