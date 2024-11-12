import { ArtifactReference } from '../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /ids/contentHashes/{contentHash}/references
 */
export interface ReferencesRequestBuilder extends BaseRequestBuilder<ReferencesRequestBuilder> {
    /**
     * Returns a list containing all the artifact references using the artifact content hash.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactReference[]>}
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<ArtifactReference[] | undefined>;
    /**
     * Returns a list containing all the artifact references using the artifact content hash.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const ReferencesRequestBuilderUriTemplate = "{+baseurl}/ids/contentHashes/{contentHash}/references";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ReferencesRequestBuilderRequestsMetadata: RequestsMetadata;
