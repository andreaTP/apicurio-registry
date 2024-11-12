import { UserInterfaceConfig } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * This endpoint is used by the user interface to retrieve UI specific configurationin a JSON payload.  This allows the UI and the backend to be configured in the same place (the backend process/pod).  When the UI loads, it will make an API callto this endpoint to determine what UI features and options are configured.
 */
export interface UiConfigRequestBuilder extends BaseRequestBuilder<UiConfigRequestBuilder> {
    /**
     * Returns the UI configuration properties for this server.  The registry UI can beconnected to a backend using just a URL.  The rest of the UI configuration can thenbe fetched from the backend using this operation.  This allows UI and backend toboth be configured in the same place.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserInterfaceConfig>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<UserInterfaceConfig | undefined>;
    /**
     * Returns the UI configuration properties for this server.  The registry UI can beconnected to a backend using just a URL.  The rest of the UI configuration can thenbe fetched from the backend using this operation.  This allows UI and backend toboth be configured in the same place.This operation may fail for one of the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const UiConfigRequestBuilderUriTemplate = "{+baseurl}/system/uiConfig";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const UiConfigRequestBuilderRequestsMetadata: RequestsMetadata;
