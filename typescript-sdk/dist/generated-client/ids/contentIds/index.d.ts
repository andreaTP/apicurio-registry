import { WithContentItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /ids/contentIds
 */
export interface ContentIdsRequestBuilder extends BaseRequestBuilder<ContentIdsRequestBuilder> {
    /**
     * Access artifact content utilizing the unique content identifier for that content.
     * @param contentId Global identifier for a single artifact content.
     * @returns {WithContentItemRequestBuilder}
     */
    byContentId(contentId: number): WithContentItemRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const ContentIdsRequestBuilderUriTemplate = "{+baseurl}/ids/contentIds";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ContentIdsRequestBuilderNavigationMetadata: Record<Exclude<keyof ContentIdsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
