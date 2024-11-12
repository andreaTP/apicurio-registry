import { RuleType, CreateRule } from '../../models/index.js';
import { WithRuleTypeItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the global rules that apply to all artifacts if not otherwise configured.
 */
export interface RulesRequestBuilder extends BaseRequestBuilder<RulesRequestBuilder> {
    /**
     * Manage the configuration of a single global artifact rule.
     * @param ruleType The unique name/type of a rule.
     * @returns {WithRuleTypeItemRequestBuilder}
     */
    byRuleType(ruleType: string): WithRuleTypeItemRequestBuilder;
    /**
     * Deletes all globally configured rules.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Gets a list of all the currently configured global rules (if any).This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RuleType[]>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<RuleType[] | undefined>;
    /**
     * Adds a rule to the list of globally configured rules.This operation can fail for the following reasons:* The rule type is unknown (HTTP error `400`)* The rule already exists (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: CreateRule, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Deletes all globally configured rules.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Gets a list of all the currently configured global rules (if any).This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Adds a rule to the list of globally configured rules.This operation can fail for the following reasons:* The rule type is unknown (HTTP error `400`)* The rule already exists (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CreateRule, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export declare const RulesRequestBuilderUriTemplate = "{+baseurl}/admin/rules";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const RulesRequestBuilderNavigationMetadata: Record<Exclude<keyof RulesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const RulesRequestBuilderRequestsMetadata: RequestsMetadata;
