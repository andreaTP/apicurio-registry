import { GroupSortBy, SortOrder, CreateGroup, GroupMetaData, GroupSearchResults } from '../models/index.js';
import { WithGroupItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Collection of the groups in the registry.
 */
export interface GroupsRequestBuilder extends BaseRequestBuilder<GroupsRequestBuilder> {
    /**
     * Collection to manage a single group in the registry.
     * @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. Must follow the ".{1,512}" pattern.
     * @returns {WithGroupItemRequestBuilder}
     */
    byGroupId(groupId: string): WithGroupItemRequestBuilder;
    /**
     * Returns a list of all groups.  This list is paged.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<GroupsRequestBuilderGetQueryParameters> | undefined): Promise<GroupSearchResults | undefined>;
    /**
     * Creates a new group.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)* The group already exist (HTTP error `409`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupMetaData>}
     * @throws {ProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: CreateGroup, requestConfiguration?: RequestConfiguration<object> | undefined): Promise<GroupMetaData | undefined>;
    /**
     * Returns a list of all groups.  This list is paged.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Creates a new group.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)* The group already exist (HTTP error `409`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CreateGroup, requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
}
/**
 * Returns a list of all groups.  This list is paged.
 */
export interface GroupsRequestBuilderGetQueryParameters {
    /**
     * The number of groups to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of groups to skip before starting the result set.  Defaults to 0.
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
export declare const GroupsRequestBuilderUriTemplate = "{+baseurl}/groups{?limit*,offset*,order*,orderby*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const GroupsRequestBuilderNavigationMetadata: Record<Exclude<keyof GroupsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const GroupsRequestBuilderRequestsMetadata: RequestsMetadata;
