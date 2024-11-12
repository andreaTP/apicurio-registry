import { Limits } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Retrieve resource limits information
 */
export interface LimitsRequestBuilder extends BaseRequestBuilder<LimitsRequestBuilder> {
    /**
     * This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Limits>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<Limits | undefined>;
    /**
     * This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const LimitsRequestBuilderUriTemplate = "{+baseurl}/system/limits";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const LimitsRequestBuilderRequestsMetadata: RequestsMetadata;
