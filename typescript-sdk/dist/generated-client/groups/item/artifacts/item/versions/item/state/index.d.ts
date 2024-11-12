import { WrappedVersionState } from '../../../../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the state of an artifact version.
 */
export interface StateRequestBuilder extends BaseRequestBuilder<StateRequestBuilder> {
    /**
     * Gets the current state of an artifact version.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WrappedVersionState>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<WrappedVersionState | undefined>;
    /**
     * Updates the state of an artifact version.NOTE: There are some restrictions on state transitions.  Notably a version cannot be transitioned to the `DRAFT` state from any other state.  The `DRAFT` state can only be entered (optionally) when creating a new artifact/version.A version in `DRAFT` state can only be transitioned to `ENABLED`.  When thishappens, any configured content rules will be applied.  This may result in afailure to change the state.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* An invalid new state was provided (HTTP error `400`)* The draft content violates one or more of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: WrappedVersionState, requestConfiguration?: RequestConfiguration<StateRequestBuilderPutQueryParameters> | undefined): Promise<void>;
    /**
     * Gets the current state of an artifact version.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Updates the state of an artifact version.NOTE: There are some restrictions on state transitions.  Notably a version cannot be transitioned to the `DRAFT` state from any other state.  The `DRAFT` state can only be entered (optionally) when creating a new artifact/version.A version in `DRAFT` state can only be transitioned to `ENABLED`.  When thishappens, any configured content rules will be applied.  This may result in afailure to change the state.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* An invalid new state was provided (HTTP error `400`)* The draft content violates one or more of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: WrappedVersionState, requestConfiguration?: RequestConfiguration<StateRequestBuilderPutQueryParameters> | undefined): RequestInformation;
}
/**
 * Updates the state of an artifact version.NOTE: There are some restrictions on state transitions.  Notably a version cannot be transitioned to the `DRAFT` state from any other state.  The `DRAFT` state can only be entered (optionally) when creating a new artifact/version.A version in `DRAFT` state can only be transitioned to `ENABLED`.  When thishappens, any configured content rules will be applied.  This may result in afailure to change the state.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* No version with this `version` exists (HTTP error `404`)* An invalid new state was provided (HTTP error `400`)* The draft content violates one or more of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)
 */
export interface StateRequestBuilderPutQueryParameters {
    /**
     * When set to `true`, the operation will not result in any changes. Instead, itwill return a result based on whether the operation **would have succeeded**.
     */
    dryRun?: boolean;
}
/**
 * Uri template for the request builder.
 */
export declare const StateRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/state{?dryRun*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const StateRequestBuilderRequestsMetadata: RequestsMetadata;
