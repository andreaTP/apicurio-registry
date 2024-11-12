import { SystemInfo } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Retrieve system information
 */
export interface InfoRequestBuilder extends BaseRequestBuilder<InfoRequestBuilder> {
    /**
     * This operation retrieves information about the running registry system, such as the versionof the software and when it was built.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SystemInfo>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<SystemInfo | undefined>;
    /**
     * This operation retrieves information about the running registry system, such as the versionof the software and when it was built.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const InfoRequestBuilderUriTemplate = "{+baseurl}/system/info";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const InfoRequestBuilderRequestsMetadata: RequestsMetadata;
