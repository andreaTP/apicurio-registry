import { ArtifactsRequestBuilder } from './artifacts/index.js';
import { GroupsRequestBuilder } from './groups/index.js';
import { VersionsRequestBuilder } from './versions/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /search
 */
export interface SearchRequestBuilder extends BaseRequestBuilder<SearchRequestBuilder> {
    /**
     * Search for artifacts in the registry.
     */
    get artifacts(): ArtifactsRequestBuilder;
    /**
     * Search for groups in the registry.
     */
    get groups(): GroupsRequestBuilder;
    /**
     * Search for versions in the registry.
     */
    get versions(): VersionsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const SearchRequestBuilderUriTemplate = "{+baseurl}/search";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const SearchRequestBuilderNavigationMetadata: Record<Exclude<keyof SearchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
