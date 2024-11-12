import { ArtifactSortBy, IfArtifactExists, SortOrder, ArtifactSearchResults, CreateArtifact, CreateArtifactResponse } from '../../../models/index.js';
import { WithArtifactItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage the collection of artifacts within a single group in the registry.
 */
export interface ArtifactsRequestBuilder extends BaseRequestBuilder<ArtifactsRequestBuilder> {
    /**
     * Manage a single artifact.
     * @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. Must follow the ".{1,512}" pattern.
     * @returns {WithArtifactItemRequestBuilder}
     */
    byArtifactId(artifactId: string): WithArtifactItemRequestBuilder;
    /**
     * Deletes all of the artifacts that exist in a given group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    delete(requestConfiguration?: RequestConfiguration<object> | undefined): Promise<void>;
    /**
     * Returns a list of all artifacts in the group.  This list is paged.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderGetQueryParameters> | undefined): Promise<ArtifactSearchResults | undefined>;
    /**
     * Creates a new artifact.  The body of the request should be a `CreateArtifact` object, which includes the metadata of the new artifact and, optionally, the metadata and content of the first version.If the artifact type is not provided, the registry attempts to figure out what kind of artifact is being added from thefollowing supported list:* Avro (`AVRO`)* Protobuf (`PROTOBUF`)* JSON Schema (`JSON`)* Kafka Connect (`KCONNECT`)* OpenAPI (`OPENAPI`)* AsyncAPI (`ASYNCAPI`)* GraphQL (`GRAPHQL`)* Web Services Description Language (`WSDL`)* XML Schema (`XSD`)An artifact will be created using the unique artifact ID that can optionally be provided in the request body.  If not provided in the request, the server willgenerate a unique ID for the artifact.  It is typically recommended that callersprovide the ID, because it is typically a meaningful identifier, and as suchfor most use cases should be supplied by the caller.If an artifact with the provided artifact ID already exists, the default behavioris for the server to reject the content with a 409 error.  However, the caller cansupply the `ifExists` query parameter to alter this default behavior. The `ifExists`query parameter can have one of the following values:* `FAIL` (*default*) - server rejects the content with a 409 error* `UPDATE` - server updates the existing artifact and returns the new metadata* `RETURN` - server does not create or add content to the server, but instead returns the metadata for the existing artifact* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the provided content if such a version exists, otherwise a new version is createdThis operation may fail for one of the following reasons:* An invalid `ArtifactType` was indicated (HTTP error `400`)* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)* Provided content (request body) was empty (HTTP error `400`)* An invalid version number was used for the optional included first version (HTTP error `400`)* An artifact with the provided ID already exists (HTTP error `409`)* The content violates one of the configured global rules (HTTP error `409`)* A server error occurred (HTTP error `500`)Note that if the `dryRun` query parameter is set to `true`, then this operationwill not actually make any changes.  Instead it will succeed or fail based on whether it **would have worked**.  Use this option to, for example, check if anartifact is valid or if a new version passes configured compatibility checks.
     * @param body Data sent when creating a new artifact.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CreateArtifactResponse>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {RuleViolationProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: CreateArtifact, requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderPostQueryParameters> | undefined): Promise<CreateArtifactResponse | undefined>;
    /**
     * Deletes all of the artifacts that exist in a given group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined): RequestInformation;
    /**
     * Returns a list of all artifacts in the group.  This list is paged.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Creates a new artifact.  The body of the request should be a `CreateArtifact` object, which includes the metadata of the new artifact and, optionally, the metadata and content of the first version.If the artifact type is not provided, the registry attempts to figure out what kind of artifact is being added from thefollowing supported list:* Avro (`AVRO`)* Protobuf (`PROTOBUF`)* JSON Schema (`JSON`)* Kafka Connect (`KCONNECT`)* OpenAPI (`OPENAPI`)* AsyncAPI (`ASYNCAPI`)* GraphQL (`GRAPHQL`)* Web Services Description Language (`WSDL`)* XML Schema (`XSD`)An artifact will be created using the unique artifact ID that can optionally be provided in the request body.  If not provided in the request, the server willgenerate a unique ID for the artifact.  It is typically recommended that callersprovide the ID, because it is typically a meaningful identifier, and as suchfor most use cases should be supplied by the caller.If an artifact with the provided artifact ID already exists, the default behavioris for the server to reject the content with a 409 error.  However, the caller cansupply the `ifExists` query parameter to alter this default behavior. The `ifExists`query parameter can have one of the following values:* `FAIL` (*default*) - server rejects the content with a 409 error* `UPDATE` - server updates the existing artifact and returns the new metadata* `RETURN` - server does not create or add content to the server, but instead returns the metadata for the existing artifact* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the provided content if such a version exists, otherwise a new version is createdThis operation may fail for one of the following reasons:* An invalid `ArtifactType` was indicated (HTTP error `400`)* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)* Provided content (request body) was empty (HTTP error `400`)* An invalid version number was used for the optional included first version (HTTP error `400`)* An artifact with the provided ID already exists (HTTP error `409`)* The content violates one of the configured global rules (HTTP error `409`)* A server error occurred (HTTP error `500`)Note that if the `dryRun` query parameter is set to `true`, then this operationwill not actually make any changes.  Instead it will succeed or fail based on whether it **would have worked**.  Use this option to, for example, check if anartifact is valid or if a new version passes configured compatibility checks.
     * @param body Data sent when creating a new artifact.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CreateArtifact, requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderPostQueryParameters> | undefined): RequestInformation;
}
/**
 * Returns a list of all artifacts in the group.  This list is paged.
 */
export interface ArtifactsRequestBuilderGetQueryParameters {
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of artifacts to skip before starting the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SortOrder;
    /**
     * The field to sort by.  Can be one of:* `name`* `createdOn`
     */
    orderby?: ArtifactSortBy;
}
/**
 * Creates a new artifact.  The body of the request should be a `CreateArtifact` object, which includes the metadata of the new artifact and, optionally, the metadata and content of the first version.If the artifact type is not provided, the registry attempts to figure out what kind of artifact is being added from thefollowing supported list:* Avro (`AVRO`)* Protobuf (`PROTOBUF`)* JSON Schema (`JSON`)* Kafka Connect (`KCONNECT`)* OpenAPI (`OPENAPI`)* AsyncAPI (`ASYNCAPI`)* GraphQL (`GRAPHQL`)* Web Services Description Language (`WSDL`)* XML Schema (`XSD`)An artifact will be created using the unique artifact ID that can optionally be provided in the request body.  If not provided in the request, the server willgenerate a unique ID for the artifact.  It is typically recommended that callersprovide the ID, because it is typically a meaningful identifier, and as suchfor most use cases should be supplied by the caller.If an artifact with the provided artifact ID already exists, the default behavioris for the server to reject the content with a 409 error.  However, the caller cansupply the `ifExists` query parameter to alter this default behavior. The `ifExists`query parameter can have one of the following values:* `FAIL` (*default*) - server rejects the content with a 409 error* `UPDATE` - server updates the existing artifact and returns the new metadata* `RETURN` - server does not create or add content to the server, but instead returns the metadata for the existing artifact* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the provided content if such a version exists, otherwise a new version is createdThis operation may fail for one of the following reasons:* An invalid `ArtifactType` was indicated (HTTP error `400`)* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)* Provided content (request body) was empty (HTTP error `400`)* An invalid version number was used for the optional included first version (HTTP error `400`)* An artifact with the provided ID already exists (HTTP error `409`)* The content violates one of the configured global rules (HTTP error `409`)* A server error occurred (HTTP error `500`)Note that if the `dryRun` query parameter is set to `true`, then this operationwill not actually make any changes.  Instead it will succeed or fail based on whether it **would have worked**.  Use this option to, for example, check if anartifact is valid or if a new version passes configured compatibility checks.
 */
export interface ArtifactsRequestBuilderPostQueryParameters {
    /**
     * Used only when the `ifExists` query parameter is set to `RETURN_OR_UPDATE`, this parameter can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  The canonicalization algorithm is unique to each artifact type, but typically involves removing extra whitespace and formatting the content in a consistent manner.
     */
    canonical?: boolean;
    /**
     * When set to `true`, the operation will not result in any changes. Instead, itwill return a result based on whether the operation **would have succeeded**.
     */
    dryRun?: boolean;
    /**
     * Set this option to instruct the server on what to do if the artifact already exists.
     */
    ifExists?: IfArtifactExists;
}
/**
 * Uri template for the request builder.
 */
export declare const ArtifactsRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts{?canonical*,dryRun*,ifExists*,limit*,offset*,order*,orderby*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const ArtifactsRequestBuilderNavigationMetadata: Record<Exclude<keyof ArtifactsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ArtifactsRequestBuilderRequestsMetadata: RequestsMetadata;
