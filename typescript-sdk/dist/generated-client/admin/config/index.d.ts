import { ArtifactTypesRequestBuilder } from './artifactTypes/index.js';
import { PropertiesRequestBuilder } from './properties/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /admin/config
 */
export interface ConfigRequestBuilder extends BaseRequestBuilder<ConfigRequestBuilder> {
    /**
     * The list of artifact types supported by this instance of Registry.
     */
    get artifactTypes(): ArtifactTypesRequestBuilder;
    /**
     * Manage configuration properties.
     */
    get properties(): PropertiesRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const ConfigRequestBuilderUriTemplate = "{+baseurl}/admin/config";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ConfigRequestBuilderNavigationMetadata: Record<Exclude<keyof ConfigRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
