import { AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export interface AddVersionToBranch extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The version property
     */
    version?: string | null;
}
export interface ArtifactMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The artifactType property
     */
    artifactType?: string | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The owner property
     */
    owner?: string | null;
}
/**
 * A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf.
 */
export interface ArtifactReference extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The artifactId property
     */
    artifactId?: string | null;
    /**
     * The groupId property
     */
    groupId?: string | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The version property
     */
    version?: string | null;
}
/**
 * Describes the response received when searching for artifacts.
 */
export interface ArtifactSearchResults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The artifacts returned in the result set.
     */
    artifacts?: SearchedArtifact[] | null;
    /**
     * The total number of artifacts that matched the query that produced the result set (may be more than the number of artifacts in the result set).
     */
    count?: number | null;
}
export type ArtifactSortBy = (typeof ArtifactSortByObject)[keyof typeof ArtifactSortByObject];
export interface ArtifactTypeInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name property
     */
    name?: string | null;
}
export interface BranchMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The ID of a single artifact branch.
     */
    branchId?: string | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The owner property
     */
    owner?: string | null;
    /**
     * The systemDefined property
     */
    systemDefined?: boolean | null;
}
/**
 * Describes the response received when searching for branches.
 */
export interface BranchSearchResults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The branches returned in the result set.
     */
    branches?: SearchedBranch[] | null;
    /**
     * The total number of branches that matched the query that produced the result set (may be more than the number of branches in the result set).
     */
    count?: number | null;
}
export interface Comment extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The commentId property
     */
    commentId?: string | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The owner property
     */
    owner?: string | null;
    /**
     * The value property
     */
    value?: string | null;
}
export interface ConfigurationProperty extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The label property
     */
    label?: string | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The type property
     */
    type?: string | null;
    /**
     * The value property
     */
    value?: string | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddVersionToBranch}
 */
export declare function createAddVersionToBranchFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Data sent when creating a new artifact.
 */
export interface CreateArtifact extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The artifactType property
     */
    artifactType?: string | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The firstVersion property
     */
    firstVersion?: CreateVersion | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The name property
     */
    name?: string | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ArtifactMetaData}
 */
export declare function createArtifactMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ArtifactReference}
 */
export declare function createArtifactReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
export interface CreateArtifactResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The artifact property
     */
    artifact?: ArtifactMetaData | null;
    /**
     * The version property
     */
    version?: VersionMetaData | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ArtifactSearchResults}
 */
export declare function createArtifactSearchResultsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ArtifactTypeInfo}
 */
export declare function createArtifactTypeInfoFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
export interface CreateBranch extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact branch.
     */
    branchId?: string | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The versions property
     */
    versions?: string[] | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {BranchMetaData}
 */
export declare function createBranchMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {BranchSearchResults}
 */
export declare function createBranchSearchResultsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Comment}
 */
export declare function createCommentFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ConfigurationProperty}
 */
export declare function createConfigurationPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateArtifact}
 */
export declare function createCreateArtifactFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateArtifactResponse}
 */
export declare function createCreateArtifactResponseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateBranch}
 */
export declare function createCreateBranchFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateGroup}
 */
export declare function createCreateGroupFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateRule}
 */
export declare function createCreateRuleFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateVersion}
 */
export declare function createCreateVersionFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DownloadRef}
 */
export declare function createDownloadRefFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EditableArtifactMetaData}
 */
export declare function createEditableArtifactMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EditableBranchMetaData}
 */
export declare function createEditableBranchMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EditableGroupMetaData}
 */
export declare function createEditableGroupMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EditableVersionMetaData}
 */
export declare function createEditableVersionMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
export interface CreateGroup extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GroupMetaData}
 */
export declare function createGroupMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GroupSearchResults}
 */
export declare function createGroupSearchResultsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Labels}
 */
export declare function createLabelsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Limits}
 */
export declare function createLimitsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {NewComment}
 */
export declare function createNewCommentFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ProblemDetails}
 */
export declare function createProblemDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ReplaceBranchVersions}
 */
export declare function createReplaceBranchVersionsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RoleMapping}
 */
export declare function createRoleMappingFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RoleMappingSearchResults}
 */
export declare function createRoleMappingSearchResultsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
export interface CreateRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The config property
     */
    config?: string | null;
    /**
     * The ruleType property
     */
    ruleType?: RuleType | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Rule}
 */
export declare function createRuleFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RuleViolationCause}
 */
export declare function createRuleViolationCauseFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RuleViolationProblemDetails}
 */
export declare function createRuleViolationProblemDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchedArtifact}
 */
export declare function createSearchedArtifactFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchedBranch}
 */
export declare function createSearchedBranchFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchedGroup}
 */
export declare function createSearchedGroupFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SearchedVersion}
 */
export declare function createSearchedVersionFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SnapshotMetaData}
 */
export declare function createSnapshotMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SystemInfo}
 */
export declare function createSystemInfoFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UpdateConfigurationProperty}
 */
export declare function createUpdateConfigurationPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UpdateRole}
 */
export declare function createUpdateRoleFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInfo}
 */
export declare function createUserInfoFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInterfaceConfigAuth}
 */
export declare function createUserInterfaceConfigAuthFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInterfaceConfigFeatures}
 */
export declare function createUserInterfaceConfigFeaturesFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInterfaceConfig}
 */
export declare function createUserInterfaceConfigFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInterfaceConfigUi}
 */
export declare function createUserInterfaceConfigUiFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
export interface CreateVersion extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The branches property
     */
    branches?: string[] | null;
    /**
     * The content property
     */
    content?: VersionContent | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The isDraft property
     */
    isDraft?: boolean | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * A single version of an artifact.  Can be provided by the client when creating a new version,or it can be server-generated.  The value can be any string unique to the artifact, but it isrecommended to use a simple integer or a semver value.
     */
    version?: string | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {VersionContent}
 */
export declare function createVersionContentFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {VersionMetaData}
 */
export declare function createVersionMetaDataFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {VersionSearchResults}
 */
export declare function createVersionSearchResultsFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WrappedVersionState}
 */
export declare function createWrappedVersionStateFromDiscriminatorValue(parseNode: ParseNode | undefined): ((instance?: Parsable) => Record<string, (node: ParseNode) => void>);
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoAddVersionToBranch(addVersionToBranch?: Partial<AddVersionToBranch> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoArtifactMetaData(artifactMetaData?: Partial<ArtifactMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoArtifactReference(artifactReference?: Partial<ArtifactReference> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoArtifactSearchResults(artifactSearchResults?: Partial<ArtifactSearchResults> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoArtifactTypeInfo(artifactTypeInfo?: Partial<ArtifactTypeInfo> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoBranchMetaData(branchMetaData?: Partial<BranchMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoBranchSearchResults(branchSearchResults?: Partial<BranchSearchResults> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoComment(comment?: Partial<Comment> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoConfigurationProperty(configurationProperty?: Partial<ConfigurationProperty> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCreateArtifact(createArtifact?: Partial<CreateArtifact> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCreateArtifactResponse(createArtifactResponse?: Partial<CreateArtifactResponse> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCreateBranch(createBranch?: Partial<CreateBranch> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCreateGroup(createGroup?: Partial<CreateGroup> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCreateRule(createRule?: Partial<CreateRule> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoCreateVersion(createVersion?: Partial<CreateVersion> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoDownloadRef(downloadRef?: Partial<DownloadRef> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoEditableArtifactMetaData(editableArtifactMetaData?: Partial<EditableArtifactMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoEditableBranchMetaData(editableBranchMetaData?: Partial<EditableBranchMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoEditableGroupMetaData(editableGroupMetaData?: Partial<EditableGroupMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoEditableVersionMetaData(editableVersionMetaData?: Partial<EditableVersionMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoGroupMetaData(groupMetaData?: Partial<GroupMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoGroupSearchResults(groupSearchResults?: Partial<GroupSearchResults> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoLabels(labels?: Partial<Labels> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoLimits(limits?: Partial<Limits> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoNewComment(newComment?: Partial<NewComment> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoProblemDetails(problemDetails?: Partial<ProblemDetails> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoReplaceBranchVersions(replaceBranchVersions?: Partial<ReplaceBranchVersions> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRoleMapping(roleMapping?: Partial<RoleMapping> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRoleMappingSearchResults(roleMappingSearchResults?: Partial<RoleMappingSearchResults> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRule(rule?: Partial<Rule> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRuleViolationCause(ruleViolationCause?: Partial<RuleViolationCause> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoRuleViolationProblemDetails(ruleViolationProblemDetails?: Partial<RuleViolationProblemDetails> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchedArtifact(searchedArtifact?: Partial<SearchedArtifact> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchedBranch(searchedBranch?: Partial<SearchedBranch> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchedGroup(searchedGroup?: Partial<SearchedGroup> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSearchedVersion(searchedVersion?: Partial<SearchedVersion> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSnapshotMetaData(snapshotMetaData?: Partial<SnapshotMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoSystemInfo(systemInfo?: Partial<SystemInfo> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUpdateConfigurationProperty(updateConfigurationProperty?: Partial<UpdateConfigurationProperty> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUpdateRole(updateRole?: Partial<UpdateRole> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUserInfo(userInfo?: Partial<UserInfo> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUserInterfaceConfig(userInterfaceConfig?: Partial<UserInterfaceConfig> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUserInterfaceConfigAuth(userInterfaceConfigAuth?: Partial<UserInterfaceConfigAuth> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUserInterfaceConfigFeatures(userInterfaceConfigFeatures?: Partial<UserInterfaceConfigFeatures> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoUserInterfaceConfigUi(userInterfaceConfigUi?: Partial<UserInterfaceConfigUi> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoVersionContent(versionContent?: Partial<VersionContent> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoVersionMetaData(versionMetaData?: Partial<VersionMetaData> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoVersionSearchResults(versionSearchResults?: Partial<VersionSearchResults> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export declare function deserializeIntoWrappedVersionState(wrappedVersionState?: Partial<WrappedVersionState> | undefined): Record<string, (node: ParseNode) => void>;
/**
 * Models a download "link".  Useful for browser use-cases.
 */
export interface DownloadRef extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The downloadId property
     */
    downloadId?: string | null;
    /**
     * The href property
     */
    href?: string | null;
}
export interface EditableArtifactMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The owner property
     */
    owner?: string | null;
}
export interface EditableBranchMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | null;
}
export interface EditableGroupMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
}
export interface EditableVersionMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The name property
     */
    name?: string | null;
}
export interface GroupMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The owner property
     */
    owner?: string | null;
}
/**
 * Describes the response received when searching for groups.
 */
export interface GroupSearchResults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The total number of groups that matched the query that produced the result set (may be more than the number of groups in the result set).
     */
    count?: number | null;
    /**
     * The groups returned in the result set.
     */
    groups?: SearchedGroup[] | null;
}
export type GroupSortBy = (typeof GroupSortByObject)[keyof typeof GroupSortByObject];
export type HandleReferencesType = (typeof HandleReferencesTypeObject)[keyof typeof HandleReferencesTypeObject];
export type IfArtifactExists = (typeof IfArtifactExistsObject)[keyof typeof IfArtifactExistsObject];
/**
 * User-defined name-value pairs. Name and value must be strings.
 */
export interface Labels extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
/**
 * List of limitations on used resources, that are applied on the current instance of Registry.Keys represent the resource type and are suffixed by the corresponding unit.Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.
 */
export interface Limits extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The maxArtifactDescriptionLengthChars property
     */
    maxArtifactDescriptionLengthChars?: number | null;
    /**
     * The maxArtifactLabelsCount property
     */
    maxArtifactLabelsCount?: number | null;
    /**
     * The maxArtifactNameLengthChars property
     */
    maxArtifactNameLengthChars?: number | null;
    /**
     * The maxArtifactPropertiesCount property
     */
    maxArtifactPropertiesCount?: number | null;
    /**
     * The maxArtifactsCount property
     */
    maxArtifactsCount?: number | null;
    /**
     * The maxLabelSizeBytes property
     */
    maxLabelSizeBytes?: number | null;
    /**
     * The maxPropertyKeySizeBytes property
     */
    maxPropertyKeySizeBytes?: number | null;
    /**
     * The maxPropertyValueSizeBytes property
     */
    maxPropertyValueSizeBytes?: number | null;
    /**
     * The maxRequestsPerSecondCount property
     */
    maxRequestsPerSecondCount?: number | null;
    /**
     * The maxSchemaSizeBytes property
     */
    maxSchemaSizeBytes?: number | null;
    /**
     * The maxTotalSchemasCount property
     */
    maxTotalSchemasCount?: number | null;
    /**
     * The maxVersionsPerArtifactCount property
     */
    maxVersionsPerArtifactCount?: number | null;
}
export interface NewComment extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: string | null;
}
/**
 * All error responses, whether `4xx` or `5xx` will include one of these as the responsebody.
 */
export interface ProblemDetails extends AdditionalDataHolder, ApiError, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail?: string | null;
    /**
     * A URI reference that identifies the specific occurrence of the problem.
     */
    instance?: string | null;
    /**
     * The name of the error (typically a server exception class name).
     */
    nameEscaped?: string | null;
    /**
     * The HTTP status code.
     */
    status?: number | null;
    /**
     * A short, human-readable summary of the problem type.
     */
    title?: string | null;
    /**
     * A URI reference [RFC3986] that identifies the problem type.
     */
    type?: string | null;
}
export type ReferenceType = (typeof ReferenceTypeObject)[keyof typeof ReferenceTypeObject];
export interface ReplaceBranchVersions extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The versions property
     */
    versions?: string[] | null;
}
/**
 * The mapping between a user/principal and their role.
 */
export interface RoleMapping extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The principalId property
     */
    principalId?: string | null;
    /**
     * A friendly name for the principal.
     */
    principalName?: string | null;
    /**
     * The role property
     */
    role?: RoleType | null;
}
/**
 * Describes the response received when searching for artifacts.
 */
export interface RoleMappingSearchResults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The total number of role mappings that matched the query that produced the result set (may be more than the number of role mappings in the result set).
     */
    count?: number | null;
    /**
     * The role mappings returned in the result set.
     */
    roleMappings?: RoleMapping[] | null;
}
export type RoleType = (typeof RoleTypeObject)[keyof typeof RoleTypeObject];
export interface Rule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The config property
     */
    config?: string | null;
    /**
     * The ruleType property
     */
    ruleType?: RuleType | null;
}
export type RuleType = (typeof RuleTypeObject)[keyof typeof RuleTypeObject];
export interface RuleViolationCause extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The context property
     */
    context?: string | null;
    /**
     * The description property
     */
    description?: string | null;
}
/**
 * All error responses, whether `4xx` or `5xx` will include one of these as the responsebody.
 */
export interface RuleViolationProblemDetails extends ApiError, Parsable, ProblemDetails {
    /**
     * List of rule violation causes.
     */
    causes?: RuleViolationCause[] | null;
}
/**
 * Models a single artifact from the result set returned when searching for artifacts.
 */
export interface SearchedArtifact extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The artifactType property
     */
    artifactType?: string | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The owner property
     */
    owner?: string | null;
}
export interface SearchedBranch extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The ID of a single artifact branch.
     */
    branchId?: string | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The owner property
     */
    owner?: string | null;
    /**
     * The systemDefined property
     */
    systemDefined?: boolean | null;
}
/**
 * Models a single group from the result set returned when searching for groups.
 */
export interface SearchedGroup extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The owner property
     */
    owner?: string | null;
}
/**
 * Models a single artifact from the result set returned when searching for artifacts.
 */
export interface SearchedVersion extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The artifactType property
     */
    artifactType?: string | null;
    /**
     * The contentId property
     */
    contentId?: number | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The globalId property
     */
    globalId?: number | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The owner property
     */
    owner?: string | null;
    /**
     * Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
     */
    state?: VersionState | null;
    /**
     * A single version of an artifact.  Can be provided by the client when creating a new version,or it can be server-generated.  The value can be any string unique to the artifact, but it isrecommended to use a simple integer or a semver value.
     */
    version?: string | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeAddVersionToBranch(writer: SerializationWriter, addVersionToBranch?: Partial<AddVersionToBranch> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeArtifactMetaData(writer: SerializationWriter, artifactMetaData?: Partial<ArtifactMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeArtifactReference(writer: SerializationWriter, artifactReference?: Partial<ArtifactReference> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeArtifactSearchResults(writer: SerializationWriter, artifactSearchResults?: Partial<ArtifactSearchResults> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeArtifactTypeInfo(writer: SerializationWriter, artifactTypeInfo?: Partial<ArtifactTypeInfo> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeBranchMetaData(writer: SerializationWriter, branchMetaData?: Partial<BranchMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeBranchSearchResults(writer: SerializationWriter, branchSearchResults?: Partial<BranchSearchResults> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeComment(writer: SerializationWriter, comment?: Partial<Comment> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeConfigurationProperty(writer: SerializationWriter, configurationProperty?: Partial<ConfigurationProperty> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCreateArtifact(writer: SerializationWriter, createArtifact?: Partial<CreateArtifact> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCreateArtifactResponse(writer: SerializationWriter, createArtifactResponse?: Partial<CreateArtifactResponse> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCreateBranch(writer: SerializationWriter, createBranch?: Partial<CreateBranch> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCreateGroup(writer: SerializationWriter, createGroup?: Partial<CreateGroup> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCreateRule(writer: SerializationWriter, createRule?: Partial<CreateRule> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeCreateVersion(writer: SerializationWriter, createVersion?: Partial<CreateVersion> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeDownloadRef(writer: SerializationWriter, downloadRef?: Partial<DownloadRef> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeEditableArtifactMetaData(writer: SerializationWriter, editableArtifactMetaData?: Partial<EditableArtifactMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeEditableBranchMetaData(writer: SerializationWriter, editableBranchMetaData?: Partial<EditableBranchMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeEditableGroupMetaData(writer: SerializationWriter, editableGroupMetaData?: Partial<EditableGroupMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeEditableVersionMetaData(writer: SerializationWriter, editableVersionMetaData?: Partial<EditableVersionMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeGroupMetaData(writer: SerializationWriter, groupMetaData?: Partial<GroupMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeGroupSearchResults(writer: SerializationWriter, groupSearchResults?: Partial<GroupSearchResults> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeLabels(writer: SerializationWriter, labels?: Partial<Labels> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeLimits(writer: SerializationWriter, limits?: Partial<Limits> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeNewComment(writer: SerializationWriter, newComment?: Partial<NewComment> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeProblemDetails(writer: SerializationWriter, problemDetails?: Partial<ProblemDetails> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeReplaceBranchVersions(writer: SerializationWriter, replaceBranchVersions?: Partial<ReplaceBranchVersions> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRoleMapping(writer: SerializationWriter, roleMapping?: Partial<RoleMapping> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRoleMappingSearchResults(writer: SerializationWriter, roleMappingSearchResults?: Partial<RoleMappingSearchResults> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRule(writer: SerializationWriter, rule?: Partial<Rule> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRuleViolationCause(writer: SerializationWriter, ruleViolationCause?: Partial<RuleViolationCause> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeRuleViolationProblemDetails(writer: SerializationWriter, ruleViolationProblemDetails?: Partial<RuleViolationProblemDetails> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchedArtifact(writer: SerializationWriter, searchedArtifact?: Partial<SearchedArtifact> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchedBranch(writer: SerializationWriter, searchedBranch?: Partial<SearchedBranch> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchedGroup(writer: SerializationWriter, searchedGroup?: Partial<SearchedGroup> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSearchedVersion(writer: SerializationWriter, searchedVersion?: Partial<SearchedVersion> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSnapshotMetaData(writer: SerializationWriter, snapshotMetaData?: Partial<SnapshotMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeSystemInfo(writer: SerializationWriter, systemInfo?: Partial<SystemInfo> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUpdateConfigurationProperty(writer: SerializationWriter, updateConfigurationProperty?: Partial<UpdateConfigurationProperty> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUpdateRole(writer: SerializationWriter, updateRole?: Partial<UpdateRole> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUserInfo(writer: SerializationWriter, userInfo?: Partial<UserInfo> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUserInterfaceConfig(writer: SerializationWriter, userInterfaceConfig?: Partial<UserInterfaceConfig> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUserInterfaceConfigAuth(writer: SerializationWriter, userInterfaceConfigAuth?: Partial<UserInterfaceConfigAuth> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUserInterfaceConfigFeatures(writer: SerializationWriter, userInterfaceConfigFeatures?: Partial<UserInterfaceConfigFeatures> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeUserInterfaceConfigUi(writer: SerializationWriter, userInterfaceConfigUi?: Partial<UserInterfaceConfigUi> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeVersionContent(writer: SerializationWriter, versionContent?: Partial<VersionContent> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeVersionMetaData(writer: SerializationWriter, versionMetaData?: Partial<VersionMetaData> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeVersionSearchResults(writer: SerializationWriter, versionSearchResults?: Partial<VersionSearchResults> | undefined | null): void;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export declare function serializeWrappedVersionState(writer: SerializationWriter, wrappedVersionState?: Partial<WrappedVersionState> | undefined | null): void;
export interface SnapshotMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The snapshotId property
     */
    snapshotId?: string | null;
}
export type SortOrder = (typeof SortOrderObject)[keyof typeof SortOrderObject];
export interface SystemInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The builtOn property
     */
    builtOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The version property
     */
    version?: string | null;
}
export interface UpdateConfigurationProperty extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: string | null;
}
export interface UpdateRole extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The role property
     */
    role?: RoleType | null;
}
/**
 * Information about a single user.
 */
export interface UserInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The admin property
     */
    admin?: boolean | null;
    /**
     * The developer property
     */
    developer?: boolean | null;
    /**
     * The displayName property
     */
    displayName?: string | null;
    /**
     * The username property
     */
    username?: string | null;
    /**
     * The viewer property
     */
    viewer?: boolean | null;
}
/**
 * Defines the user interface configuration data type.
 */
export interface UserInterfaceConfig extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The auth property
     */
    auth?: UserInterfaceConfigAuth | null;
    /**
     * The features property
     */
    features?: UserInterfaceConfigFeatures | null;
    /**
     * The ui property
     */
    ui?: UserInterfaceConfigUi | null;
}
export interface UserInterfaceConfigAuth extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The obacEnabled property
     */
    obacEnabled?: boolean | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    options?: Labels | null;
    /**
     * The rbacEnabled property
     */
    rbacEnabled?: boolean | null;
    /**
     * The type property
     */
    type?: UserInterfaceConfigAuth_type | null;
}
export type UserInterfaceConfigAuth_type = (typeof UserInterfaceConfigAuth_typeObject)[keyof typeof UserInterfaceConfigAuth_typeObject];
export interface UserInterfaceConfigFeatures extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The breadcrumbs property
     */
    breadcrumbs?: boolean | null;
    /**
     * The deleteArtifact property
     */
    deleteArtifact?: boolean | null;
    /**
     * The deleteGroup property
     */
    deleteGroup?: boolean | null;
    /**
     * The deleteVersion property
     */
    deleteVersion?: boolean | null;
    /**
     * The draftMutability property
     */
    draftMutability?: boolean | null;
    /**
     * The readOnly property
     */
    readOnly?: boolean | null;
    /**
     * The roleManagement property
     */
    roleManagement?: boolean | null;
    /**
     * The settings property
     */
    settings?: boolean | null;
}
export interface UserInterfaceConfigUi extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The contextPath property
     */
    contextPath?: string | null;
    /**
     * The navPrefixPath property
     */
    navPrefixPath?: string | null;
    /**
     * The oaiDocsUrl property
     */
    oaiDocsUrl?: string | null;
}
export interface VersionContent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Raw content of the artifact version or a valid (and accessible) URL where the content can be found.
     */
    content?: string | null;
    /**
     * The content-type, such as `application/json` or `text/xml`.
     */
    contentType?: string | null;
    /**
     * Collection of references to other artifacts.
     */
    references?: ArtifactReference[] | null;
}
export interface VersionMetaData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of a single artifact.
     */
    artifactId?: string | null;
    /**
     * The artifactType property
     */
    artifactType?: string | null;
    /**
     * The contentId property
     */
    contentId?: number | null;
    /**
     * The createdOn property
     */
    createdOn?: Date | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The globalId property
     */
    globalId?: number | null;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string | null;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    labels?: Labels | null;
    /**
     * The modifiedBy property
     */
    modifiedBy?: string | null;
    /**
     * The modifiedOn property
     */
    modifiedOn?: Date | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The owner property
     */
    owner?: string | null;
    /**
     * Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
     */
    state?: VersionState | null;
    /**
     * A single version of an artifact.  Can be provided by the client when creating a new version,or it can be server-generated.  The value can be any string unique to the artifact, but it isrecommended to use a simple integer or a semver value.
     */
    version?: string | null;
}
/**
 * Describes the response received when searching for artifacts.
 */
export interface VersionSearchResults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The total number of versions that matched the query (may be more than the number of versionsreturned in the result set).
     */
    count?: number | null;
    /**
     * The collection of artifact versions returned in the result set.
     */
    versions?: SearchedVersion[] | null;
}
export type VersionSortBy = (typeof VersionSortByObject)[keyof typeof VersionSortByObject];
export type VersionState = (typeof VersionStateObject)[keyof typeof VersionStateObject];
export interface WrappedVersionState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
     */
    state?: VersionState | null;
}
export declare const ArtifactSortByObject: {
    readonly GroupId: "groupId";
    readonly ArtifactId: "artifactId";
    readonly CreatedOn: "createdOn";
    readonly ModifiedOn: "modifiedOn";
    readonly ArtifactType: "artifactType";
    readonly Name: "name";
};
export declare const GroupSortByObject: {
    readonly GroupId: "groupId";
    readonly CreatedOn: "createdOn";
    readonly ModifiedOn: "modifiedOn";
};
/**
 * How to handle references when retrieving content.  References can either beleft unchanged (`PRESERVE`), re-written so they are valid in the context of theregistry (`REWRITE`), or fully dereferenced such that all externally referencedcontent is internalized (`DEREFERENCE`).
 */
export declare const HandleReferencesTypeObject: {
    readonly PRESERVE: "PRESERVE";
    readonly DEREFERENCE: "DEREFERENCE";
    readonly REWRITE: "REWRITE";
};
export declare const IfArtifactExistsObject: {
    readonly FAIL: "FAIL";
    readonly CREATE_VERSION: "CREATE_VERSION";
    readonly FIND_OR_CREATE_VERSION: "FIND_OR_CREATE_VERSION";
};
export declare const ReferenceTypeObject: {
    readonly OUTBOUND: "OUTBOUND";
    readonly INBOUND: "INBOUND";
};
export declare const RoleTypeObject: {
    readonly READ_ONLY: "READ_ONLY";
    readonly DEVELOPER: "DEVELOPER";
    readonly ADMIN: "ADMIN";
};
export declare const RuleTypeObject: {
    readonly VALIDITY: "VALIDITY";
    readonly COMPATIBILITY: "COMPATIBILITY";
    readonly INTEGRITY: "INTEGRITY";
};
export declare const SortOrderObject: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
/**
 * This endpoint is used by the user interface to retrieve UI specific configurationin a JSON payload.  This allows the UI and the backend to be configured in the same place (the backend process/pod).  When the UI loads, it will make an API callto this endpoint to determine what UI features and options are configured.
 */
export declare const UserInterfaceConfigAuth_typeObject: {
    readonly None: "none";
    readonly Basic: "basic";
    readonly Oidc: "oidc";
};
export declare const VersionSortByObject: {
    readonly GroupId: "groupId";
    readonly ArtifactId: "artifactId";
    readonly Version: "version";
    readonly Name: "name";
    readonly CreatedOn: "createdOn";
    readonly ModifiedOn: "modifiedOn";
    readonly GlobalId: "globalId";
};
/**
 * Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
 */
export declare const VersionStateObject: {
    readonly ENABLED: "ENABLED";
    readonly DISABLED: "DISABLED";
    readonly DEPRECATED: "DEPRECATED";
    readonly DRAFT: "DRAFT";
};
