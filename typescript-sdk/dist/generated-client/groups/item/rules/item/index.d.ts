import { Rule } from '../../../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the configuration of a single group rule.
 */
export interface WithRuleTypeItemRequestBuilder extends BaseRequestBuilder<WithRuleTypeItemRequestBuilder> {
    /**
     * Deletes a rule from the group.  This results in the rule no longer applying forthis group.  If this is the only rule configured for the group, this is the same as deleting **all** rules, and the globally configured rules now apply tothis group.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* No rule with this name/type is configured for this group (HTTP error `404`)* Invalid rule type (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Returns information about a single rule configured for a group.  This is usefulwhen you want to know what the current configuration settings are for a specific rule.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* No rule with this name/type is configured for this artifact (HTTP error `404`)* Invalid rule type (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Rule>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<Rule | undefined>;
    /**
     * Updates the configuration of a single rule for the group.  The configuration datais specific to each rule type, so the configuration of the `COMPATIBILITY` rule is in a different format from the configuration of the `VALIDITY` rule.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* No rule with this name/type is configured for this artifact (HTTP error `404`)* Invalid rule type (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Rule>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    put(body: Rule, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<Rule | undefined>;
    /**
     * Deletes a rule from the group.  This results in the rule no longer applying forthis group.  If this is the only rule configured for the group, this is the same as deleting **all** rules, and the globally configured rules now apply tothis group.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* No rule with this name/type is configured for this group (HTTP error `404`)* Invalid rule type (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Returns information about a single rule configured for a group.  This is usefulwhen you want to know what the current configuration settings are for a specific rule.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* No rule with this name/type is configured for this artifact (HTTP error `404`)* Invalid rule type (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Updates the configuration of a single rule for the group.  The configuration datais specific to each rule type, so the configuration of the `COMPATIBILITY` rule is in a different format from the configuration of the `VALIDITY` rule.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* No rule with this name/type is configured for this artifact (HTTP error `404`)* Invalid rule type (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPutRequestInformation(body: Rule, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const WithRuleTypeItemRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/rules/{ruleType}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const WithRuleTypeItemRequestBuilderRequestsMetadata: RequestsMetadata;
