import { ReferenceType, ArtifactReference } from '../../../../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the references for a single version of an artifact in the registry.
 */
export interface ReferencesRequestBuilder extends BaseRequestBuilder<ReferencesRequestBuilder> {
    /**
     * Retrieves all references for a single version of an artifact.  Both the `artifactId` and theunique `version` number must be provided.  Using the `refType` query parameter, it is possibleto retrieve an array of either the inbound or outbound references.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactReference[]>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<ReferencesRequestBuilderGetQueryParameters> | undefined): Promise<ArtifactReference[] | undefined>;
    /**
     * Retrieves all references for a single version of an artifact.  Both the `artifactId` and theunique `version` number must be provided.  Using the `refType` query parameter, it is possibleto retrieve an array of either the inbound or outbound references.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<ReferencesRequestBuilderGetQueryParameters> | undefined): RequestInformation;
}
/**
 * Retrieves all references for a single version of an artifact.  Both the `artifactId` and theunique `version` number must be provided.  Using the `refType` query parameter, it is possibleto retrieve an array of either the inbound or outbound references.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
 */
export interface ReferencesRequestBuilderGetQueryParameters {
    /**
     * Determines the type of reference to return, either INBOUND or OUTBOUND.  Defaults to OUTBOUND.
     */
    refType?: ReferenceType;
}
/**
 * Uri template for the request builder.
 */
export declare const ReferencesRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/references{?refType*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ReferencesRequestBuilderRequestsMetadata: RequestsMetadata;
