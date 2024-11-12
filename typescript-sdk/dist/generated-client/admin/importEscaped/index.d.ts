import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Provides a way to import data into the registry.
 */
export interface ImportRequestBuilder extends BaseRequestBuilder<ImportRequestBuilder> {
    /**
     * Imports registry data that was previously exported using the `/admin/export` operation.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: ArrayBuffer | undefined, requestConfiguration?: RequestConfiguration<ImportRequestBuilderPostQueryParameters> | undefined): Promise<void>;
    /**
     * Imports registry data that was previously exported using the `/admin/export` operation.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: ArrayBuffer | undefined, requestConfiguration?: RequestConfiguration<ImportRequestBuilderPostQueryParameters> | undefined): RequestInformation;
}
/**
 * Imports registry data that was previously exported using the `/admin/export` operation.
 */
export interface ImportRequestBuilderPostQueryParameters {
    /**
     * Query parameter indicating whether the registry must be empty before allowingdata to be imported.  Defaults to `true` if omitted.
     */
    requireEmptyRegistry?: boolean;
}
/**
 * Uri template for the request builder.
 */
export declare const ImportRequestBuilderUriTemplate = "{+baseurl}/admin/import{?requireEmptyRegistry*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ImportRequestBuilderRequestsMetadata: RequestsMetadata;
