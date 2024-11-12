import { EditableVersionMetaData, VersionMetaData } from '../../../../../../models/index.js';
import { CommentsRequestBuilder } from './comments/index.js';
import { ContentRequestBuilder } from './content/index.js';
import { ReferencesRequestBuilder } from './references/index.js';
import { StateRequestBuilder } from './state/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage a single version of a single artifact in the registry.
 */
export interface WithVersionExpressionItemRequestBuilder extends BaseRequestBuilder<WithVersionExpressionItemRequestBuilder> {
    /**
     * Manage a collection of comments for an artifact version
     */
    get comments(): CommentsRequestBuilder;
    /**
     * Manage a single version of a single artifact in the registry.
     */
    get content(): ContentRequestBuilder;
    /**
     * Manage the references for a single version of an artifact in the registry.
     */
    get references(): ReferencesRequestBuilder;
    /**
     * Manage the state of an artifact version.
     */
    get state(): StateRequestBuilder;
    /**
     * Deletes a single version of the artifact. Parameters `groupId`, `artifactId` and the unique `version`are needed. If this is the only version of the artifact, this operation is the same as deleting the entire artifact.This feature is disabled by default and it's discouraged for normal usage. To enable it, set the `registry.rest.artifact.deletion.enabled` property to true. This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`) * Feature is disabled (HTTP error `405`) * A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 405 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Retrieves the metadata for a single version of the artifact.  The version metadata is a subset of the artifact metadata and only includes the metadata that is specific tothe version (for example, this doesn't include `modifiedOn`).This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VersionMetaData>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<VersionMetaData | undefined>;
    /**
     * Updates the user-editable portion of the artifact version's metadata.  Only some of the metadata fields are editable by the user.  For example, `description` is editable, but `createdOn` is not.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: EditableVersionMetaData, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Deletes a single version of the artifact. Parameters `groupId`, `artifactId` and the unique `version`are needed. If this is the only version of the artifact, this operation is the same as deleting the entire artifact.This feature is disabled by default and it's discouraged for normal usage. To enable it, set the `registry.rest.artifact.deletion.enabled` property to true. This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`) * Feature is disabled (HTTP error `405`) * A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Retrieves the metadata for a single version of the artifact.  The version metadata is a subset of the artifact metadata and only includes the metadata that is specific tothe version (for example, this doesn't include `modifiedOn`).This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Updates the user-editable portion of the artifact version's metadata.  Only some of the metadata fields are editable by the user.  For example, `description` is editable, but `createdOn` is not.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: EditableVersionMetaData, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithVersionExpressionItemRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const WithVersionExpressionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithVersionExpressionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithVersionExpressionItemRequestBuilderRequestsMetadata: RequestsMetadata;
