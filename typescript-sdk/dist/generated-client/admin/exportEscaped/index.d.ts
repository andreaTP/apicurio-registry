import { DownloadRef } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Provides a way to export registry data.
 */
export interface ExportRequestBuilder extends BaseRequestBuilder<ExportRequestBuilder> {
    /**
     * Exports registry data as a ZIP archive.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DownloadRef>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<ExportRequestBuilderGetQueryParameters> | undefined): Promise<DownloadRef | undefined>;
    /**
     * Exports registry data as a ZIP archive.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExportRequestBuilderGetQueryParameters> | undefined): RequestInformation;
}
/**
 * Exports registry data as a ZIP archive.
 */
export interface ExportRequestBuilderGetQueryParameters {
    /**
     * Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called `href`.  This `href` will be a single-use, naked download link suitable for use by a web browser to download the content.
     */
    forBrowser?: boolean;
}
/**
 * Uri template for the request builder.
 */
export declare const ExportRequestBuilderUriTemplate = "{+baseurl}/admin/export{?forBrowser*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ExportRequestBuilderRequestsMetadata: RequestsMetadata;
