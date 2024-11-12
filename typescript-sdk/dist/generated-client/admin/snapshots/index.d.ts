import { SnapshotMetaData } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Triggers a snapshot of the Registry storage. Only supported in KafkaSQL storage
 */
export interface SnapshotsRequestBuilder extends BaseRequestBuilder<SnapshotsRequestBuilder> {
    /**
     * Triggers the creation of a snapshot of the internal database for compatible storages.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SnapshotMetaData>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SnapshotMetaData | undefined>;
    /**
     * Triggers the creation of a snapshot of the internal database for compatible storages.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const SnapshotsRequestBuilderUriTemplate = "{+baseurl}/admin/snapshots";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const SnapshotsRequestBuilderRequestsMetadata: RequestsMetadata;
