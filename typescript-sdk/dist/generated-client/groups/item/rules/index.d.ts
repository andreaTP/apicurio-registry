import { RuleType, CreateRule } from '../../../models/index.js';
import { WithRuleTypeItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the rules for a group.
 */
export interface RulesRequestBuilder extends BaseRequestBuilder<RulesRequestBuilder> {
    /**
     * Manage the configuration of a single group rule.
     * @param ruleType The unique name/type of a rule.
     * @returns {WithRuleTypeItemRequestBuilder}
     */
    byRuleType(ruleType: string): WithRuleTypeItemRequestBuilder;
    /**
     * Deletes all of the rules configured for the group.  After this is done, the globalrules apply to artifacts in the group again.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Returns a list of all rules configured for the group.  The set of rules determineshow the content of an artifact in the group can evolve over time.  If no rules are configured for a group, the set of globally configured rules are used.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RuleType[]>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<RuleType[] | undefined>;
    /**
     * Adds a rule to the list of rules that get applied to an artifact in the group when adding newversions.  All configured rules must pass to successfully add a new artifact version.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* Rule (named in the request body) is unknown (HTTP error `400`)* Rule is already configured (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: CreateRule, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Deletes all of the rules configured for the group.  After this is done, the globalrules apply to artifacts in the group again.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Returns a list of all rules configured for the group.  The set of rules determineshow the content of an artifact in the group can evolve over time.  If no rules are configured for a group, the set of globally configured rules are used.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Adds a rule to the list of rules that get applied to an artifact in the group when adding newversions.  All configured rules must pass to successfully add a new artifact version.This operation can fail for the following reasons:* No group with this `groupId` exists (HTTP error `404`)* Rule (named in the request body) is unknown (HTTP error `400`)* Rule is already configured (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CreateRule, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const RulesRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/rules";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const RulesRequestBuilderNavigationMetadata: Record<Exclude<keyof RulesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const RulesRequestBuilderRequestsMetadata: RequestsMetadata;
