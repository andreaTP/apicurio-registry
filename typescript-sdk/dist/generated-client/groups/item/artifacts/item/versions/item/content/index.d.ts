import { HandleReferencesType, VersionContent } from '../../../../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage a single version of a single artifact in the registry.
 */
export interface ContentRequestBuilder extends BaseRequestBuilder<ContentRequestBuilder> {
    /**
     * Retrieves a single version of the artifact content.  Both the `artifactId` and theunique `version` number must be provided.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<ContentRequestBuilderGetQueryParameters> | undefined): Promise<ArrayBuffer | undefined>;
    /**
     * Updates the content of a single version of an artifact.NOTE: the artifact must be in `DRAFT` status.Both the `artifactId` and the unique `version` number must be provided to identifythe version to update.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* Artifact version not in `DRAFT` status (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 405 status code
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: VersionContent, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Retrieves a single version of the artifact content.  Both the `artifactId` and theunique `version` number must be provided.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContentRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Updates the content of a single version of an artifact.NOTE: the artifact must be in `DRAFT` status.Both the `artifactId` and the unique `version` number must be provided to identifythe version to update.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* Artifact version not in `DRAFT` status (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: VersionContent, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Retrieves a single version of the artifact content.  Both the `artifactId` and theunique `version` number must be provided.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`).This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
 */
export interface ContentRequestBuilderGetQueryParameters {
    /**
     * Allows the user to specify how references in the content should be treated.
     */
    references?: HandleReferencesType;
}
/**
 * Uri template for the request builder.
 */
export declare const ContentRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/content{?references*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ContentRequestBuilderRequestsMetadata: RequestsMetadata;
