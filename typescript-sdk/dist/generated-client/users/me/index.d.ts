import { UserInfo } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Retrieves information about the current user
 */
export interface MeRequestBuilder extends BaseRequestBuilder<MeRequestBuilder> {
    /**
     * Returns information about the currently authenticated user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserInfo>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<UserInfo | undefined>;
    /**
     * Returns information about the currently authenticated user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const MeRequestBuilderUriTemplate = "{+baseurl}/users/me";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const MeRequestBuilderRequestsMetadata: RequestsMetadata;
