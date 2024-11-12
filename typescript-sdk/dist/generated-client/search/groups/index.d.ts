import { GroupSortBy, SortOrder, GroupSearchResults } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Search for groups in the registry.
 */
export interface GroupsRequestBuilder extends BaseRequestBuilder<GroupsRequestBuilder> {
    /**
     * Returns a paginated list of all groups that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<GroupsRequestBuilderGetQueryParameters> | undefined): Promise<GroupSearchResults | undefined>;
    /**
     * Returns a paginated list of all groups that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
}
/**
 * Returns a paginated list of all groups that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
 */
export interface GroupsRequestBuilderGetQueryParameters {
    /**
     * Filter by description.
     */
    description?: string;
    /**
     * Filter by group name.
     */
    groupId?: string;
    /**
     * Filter by one or more name/value label.  Separate each name/value pair using a colon.  Forexample `labels=foo:bar` will return only artifacts with a label named `foo`and value `bar`.
     */
    labels?: string[];
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SortOrder;
    /**
     * The field to sort by.  Can be one of:* `name`* `createdOn`
     */
    orderby?: GroupSortBy;
}
/**
 * Uri template for the request builder.
 */
export declare const GroupsRequestBuilderUriTemplate = "{+baseurl}/search/groups{?description*,groupId*,labels*,limit*,offset*,order*,orderby*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const GroupsRequestBuilderRequestsMetadata: RequestsMetadata;
