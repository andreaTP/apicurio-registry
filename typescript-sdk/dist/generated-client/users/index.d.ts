import { MeRequestBuilder } from './me/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /users
 */
export interface UsersRequestBuilder extends BaseRequestBuilder<UsersRequestBuilder> {
    /**
     * Retrieves information about the current user
     */
    get me(): MeRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const UsersRequestBuilderUriTemplate = "{+baseurl}/users";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const UsersRequestBuilderNavigationMetadata: Record<Exclude<keyof UsersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
