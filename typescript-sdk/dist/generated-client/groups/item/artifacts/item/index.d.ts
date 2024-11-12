import { ArtifactMetaData, EditableArtifactMetaData } from '../../../../models/index.js';
import { BranchesRequestBuilder } from './branches/index.js';
import { RulesRequestBuilder } from './rules/index.js';
import { VersionsRequestBuilder } from './versions/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage a single artifact.
 */
export interface WithArtifactItemRequestBuilder extends BaseRequestBuilder<WithArtifactItemRequestBuilder> {
    /**
     * Manage branches of an artifact.
     */
    get branches(): BranchesRequestBuilder;
    /**
     * Manage the rules for a single artifact.
     */
    get rules(): RulesRequestBuilder;
    /**
     * Manage all the versions of an artifact in the registry.
     */
    get versions(): VersionsRequestBuilder;
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also beingdeleted.  This may fail for one of the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 405 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Gets the metadata for an artifact in the registry, based on the latest version. If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used. The returned metadata includesboth generated (read-only) and editable metadata (such as name and description).This operation can fail for the following reasons:* No artifact with this `artifactId` exists  or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactMetaData>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ArtifactMetaData | undefined>;
    /**
     * Updates the editable parts of the artifact's metadata.  Not all metadata fields canbe updated.  Note that only the properties included will be updated.  You can updateonly the name by including only the `name` property in the payload of the request.Properties that are allowed but not present will result in the artifact's metadatanot being changed.This operation can fail for the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: EditableArtifactMetaData, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also beingdeleted.  This may fail for one of the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Gets the metadata for an artifact in the registry, based on the latest version. If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used. The returned metadata includesboth generated (read-only) and editable metadata (such as name and description).This operation can fail for the following reasons:* No artifact with this `artifactId` exists  or all versions are `DISABLED` (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Updates the editable parts of the artifact's metadata.  Not all metadata fields canbe updated.  Note that only the properties included will be updated.  You can updateonly the name by including only the `name` property in the payload of the request.Properties that are allowed but not present will result in the artifact's metadatanot being changed.This operation can fail for the following reasons:* No artifact with the `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: EditableArtifactMetaData, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithArtifactItemRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const WithArtifactItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithArtifactItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithArtifactItemRequestBuilderRequestsMetadata: RequestsMetadata;
