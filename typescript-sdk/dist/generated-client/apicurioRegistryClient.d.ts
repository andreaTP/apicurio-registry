import { AdminRequestBuilder } from './admin/index.js';
import { GroupsRequestBuilder } from './groups/index.js';
import { IdsRequestBuilder } from './ids/index.js';
import { SearchRequestBuilder } from './search/index.js';
import { SystemRequestBuilder } from './system/index.js';
import { UsersRequestBuilder } from './users/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ApicurioRegistryClient extends BaseRequestBuilder<ApicurioRegistryClient> {
    /**
     * The admin property
     */
    get admin(): AdminRequestBuilder;
    /**
     * Collection of the groups in the registry.
     */
    get groups(): GroupsRequestBuilder;
    /**
     * The ids property
     */
    get ids(): IdsRequestBuilder;
    /**
     * The search property
     */
    get search(): SearchRequestBuilder;
    /**
     * The system property
     */
    get system(): SystemRequestBuilder;
    /**
     * The users property
     */
    get users(): UsersRequestBuilder;
}
/**
 * Instantiates a new {@link ApicurioRegistryClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export declare function createApicurioRegistryClient(requestAdapter: RequestAdapter): ApicurioRegistryClient;
/**
 * Uri template for the request builder.
 */
export declare const ApicurioRegistryClientUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ApicurioRegistryClientNavigationMetadata: Record<Exclude<keyof ApicurioRegistryClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
