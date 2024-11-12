import { ContentHashesRequestBuilder } from './contentHashes/index.js';
import { ContentIdsRequestBuilder } from './contentIds/index.js';
import { GlobalIdsRequestBuilder } from './globalIds/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /ids
 */
export interface IdsRequestBuilder extends BaseRequestBuilder<IdsRequestBuilder> {
    /**
     * The contentHashes property
     */
    get contentHashes(): ContentHashesRequestBuilder;
    /**
     * The contentIds property
     */
    get contentIds(): ContentIdsRequestBuilder;
    /**
     * The globalIds property
     */
    get globalIds(): GlobalIdsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const IdsRequestBuilderUriTemplate = "{+baseurl}/ids";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const IdsRequestBuilderNavigationMetadata: Record<Exclude<keyof IdsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
