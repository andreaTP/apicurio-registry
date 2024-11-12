import { BranchMetaData, BranchSearchResults, CreateBranch } from '../../../../../models/index.js';
import { WithBranchItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage branches of an artifact.
 */
export interface BranchesRequestBuilder extends BaseRequestBuilder<BranchesRequestBuilder> {
    /**
     * Manage a single branch.
     * @param branchId Artifact branch ID.  Must follow the "[a-zA-Z0-9._//-+]{1,256}" pattern.
     * @returns {WithBranchItemRequestBuilder}
     */
    byBranchId(branchId: string): WithBranchItemRequestBuilder;
    /**
     * Returns a list of all branches in the artifact. Each branch is a list of version identifiers,ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BranchSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<BranchesRequestBuilderGetQueryParameters> | undefined): Promise<BranchSearchResults | undefined>;
    /**
     * Creates a new branch for the artifact.  A new branch consists of metadata and alist of versions.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* A branch with the given `branchId` already exists (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BranchMetaData>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: CreateBranch, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<BranchMetaData | undefined>;
    /**
     * Returns a list of all branches in the artifact. Each branch is a list of version identifiers,ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<BranchesRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Creates a new branch for the artifact.  A new branch consists of metadata and alist of versions.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* A branch with the given `branchId` already exists (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CreateBranch, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Returns a list of all branches in the artifact. Each branch is a list of version identifiers,ordered from the latest (tip of the branch) to the oldest.This operation can fail for the following reasons:* No artifact with this `groupId` and `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
 */
export interface BranchesRequestBuilderGetQueryParameters {
    /**
     * The number of branches to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of branches to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
}
/**
 * Uri template for the request builder.
 */
export declare const BranchesRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches{?limit*,offset*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const BranchesRequestBuilderNavigationMetadata: Record<Exclude<keyof BranchesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const BranchesRequestBuilderRequestsMetadata: RequestsMetadata;
