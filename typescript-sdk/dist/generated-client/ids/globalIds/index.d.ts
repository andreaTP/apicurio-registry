import { WithGlobalItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /ids/globalIds
 */
export interface GlobalIdsRequestBuilder extends BaseRequestBuilder<GlobalIdsRequestBuilder> {
    /**
     * Access artifact content utilizing an artifact version's globally unique identifier.
     * @param globalId Global identifier for an artifact version.
     * @returns {WithGlobalItemRequestBuilder}
     */
    byGlobalId(globalId: number): WithGlobalItemRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const GlobalIdsRequestBuilderUriTemplate = "{+baseurl}/ids/globalIds";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const GlobalIdsRequestBuilderNavigationMetadata: Record<Exclude<keyof GlobalIdsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
