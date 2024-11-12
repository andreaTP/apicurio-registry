import { AddVersionToBranch, ReplaceBranchVersions, VersionSearchResults } from '../../../../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the versions in a branch.
 */
export interface VersionsRequestBuilder extends BaseRequestBuilder<VersionsRequestBuilder> {
    /**
     * Get a list of all versions in the branch.  Returns a list of version identifiers in the branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VersionSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined): Promise<VersionSearchResults | undefined>;
    /**
     * Add a new version to an artifact branch. Returns a list of version identifiers in the branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* Branch already contains the given version. Artifact branches are append-only, cycles and history rewrites, except by replacing the entire branch using the replaceBranchVersions operation,  are not supported. (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: AddVersionToBranch, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Add a new version to an artifact branch. Branch is created if it does not exist. Returns a list of version identifiers in the artifact branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: ReplaceBranchVersions, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Get a list of all versions in the branch.  Returns a list of version identifiers in the branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Add a new version to an artifact branch. Returns a list of version identifiers in the branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* Branch already contains the given version. Artifact branches are append-only, cycles and history rewrites, except by replacing the entire branch using the replaceBranchVersions operation,  are not supported. (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: AddVersionToBranch, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Add a new version to an artifact branch. Branch is created if it does not exist. Returns a list of version identifiers in the artifact branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: ReplaceBranchVersions, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Get a list of all versions in the branch.  Returns a list of version identifiers in the branch, ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* No branch with this `branchId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
 */
export interface VersionsRequestBuilderGetQueryParameters {
    /**
     * The number of versions to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of versions to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
}
/**
 * Uri template for the request builder.
 */
export declare const VersionsRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches/{branchId}/versions{?limit*,offset*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const VersionsRequestBuilderRequestsMetadata: RequestsMetadata;
