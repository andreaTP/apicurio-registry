import { ArtifactTypeInfo } from '../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * The list of artifact types supported by this instance of Registry.
 */
export interface ArtifactTypesRequestBuilder extends BaseRequestBuilder<ArtifactTypesRequestBuilder> {
    /**
     * Gets a list of all the configured artifact types.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactTypeInfo[]>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ArtifactTypeInfo[] | undefined>;
    /**
     * Gets a list of all the configured artifact types.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const ArtifactTypesRequestBuilderUriTemplate = "{+baseurl}/admin/config/artifactTypes";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ArtifactTypesRequestBuilderRequestsMetadata: RequestsMetadata;
