import { InfoRequestBuilder } from './info/index.js';
import { LimitsRequestBuilder } from './limits/index.js';
import { UiConfigRequestBuilder } from './uiConfig/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /system
 */
export interface SystemRequestBuilder extends BaseRequestBuilder<SystemRequestBuilder> {
    /**
     * Retrieve system information
     */
    get info(): InfoRequestBuilder;
    /**
     * Retrieve resource limits information
     */
    get limits(): LimitsRequestBuilder;
    /**
     * This endpoint is used by the user interface to retrieve UI specific configurationin a JSON payload.  This allows the UI and the backend to be configured in the same place (the backend process/pod).  When the UI loads, it will make an API callto this endpoint to determine what UI features and options are configured.
     */
    get uiConfig(): UiConfigRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const SystemRequestBuilderUriTemplate = "{+baseurl}/system";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const SystemRequestBuilderNavigationMetadata: Record<Exclude<keyof SystemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
