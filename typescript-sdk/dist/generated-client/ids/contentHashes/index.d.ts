import { WithContentHashItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /ids/contentHashes
 */
export interface ContentHashesRequestBuilder extends BaseRequestBuilder<ContentHashesRequestBuilder> {
    /**
     * Access artifact content utilizing the SHA-256 hash of the content.
     * @param contentHash SHA-256 content hash for a single artifact content.
     * @returns {WithContentHashItemRequestBuilder}
     */
    byContentHash(contentHash: string): WithContentHashItemRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const ContentHashesRequestBuilderUriTemplate = "{+baseurl}/ids/contentHashes";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ContentHashesRequestBuilderNavigationMetadata: Record<Exclude<keyof ContentHashesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
