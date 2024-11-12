import { ConfigRequestBuilder } from './config/index.js';
import { ExportRequestBuilder } from './exportEscaped/index.js';
import { ImportRequestBuilder } from './importEscaped/index.js';
import { RoleMappingsRequestBuilder } from './roleMappings/index.js';
import { RulesRequestBuilder } from './rules/index.js';
import { SnapshotsRequestBuilder } from './snapshots/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata } from '@microsoft/kiota-abstractions';
/**
 * Builds and executes requests for operations under /admin
 */
export interface AdminRequestBuilder extends BaseRequestBuilder<AdminRequestBuilder> {
    /**
     * The config property
     */
    get config(): ConfigRequestBuilder;
    /**
     * Provides a way to export registry data.
     */
    get exportEscaped(): ExportRequestBuilder;
    /**
     * Provides a way to import data into the registry.
     */
    get importEscaped(): ImportRequestBuilder;
    /**
     * Collection to manage role mappings for authenticated principals
     */
    get roleMappings(): RoleMappingsRequestBuilder;
    /**
     * Manage the global rules that apply to all artifacts if not otherwise configured.
     */
    get rules(): RulesRequestBuilder;
    /**
     * Triggers a snapshot of the Registry storage. Only supported in KafkaSQL storage
     */
    get snapshots(): SnapshotsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export declare const AdminRequestBuilderUriTemplate = "{+baseurl}/admin";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const AdminRequestBuilderNavigationMetadata: Record<Exclude<keyof AdminRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
