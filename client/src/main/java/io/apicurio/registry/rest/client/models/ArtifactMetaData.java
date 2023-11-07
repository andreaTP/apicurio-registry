package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.AdditionalDataHolder;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
@jakarta.annotation.Generated("com.microsoft.kiota")
public class ArtifactMetaData implements AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    private Map<String, Object> additionalData;
    /**
     * The contentId property
     */
    private Long contentId;
    /**
     * The createdBy property
     */
    private String createdBy;
    /**
     * The createdOn property
     */
    private OffsetDateTime createdOn;
    /**
     * The description property
     */
    private String description;
    /**
     * The globalId property
     */
    private Long globalId;
    /**
     * An ID of a single artifact group.
     */
    private String groupId;
    /**
     * The ID of a single artifact.
     */
    private String id;
    /**
     * The labels property
     */
    private java.util.List<String> labels;
    /**
     * The modifiedBy property
     */
    private String modifiedBy;
    /**
     * The modifiedOn property
     */
    private OffsetDateTime modifiedOn;
    /**
     * The name property
     */
    private String name;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    private Properties properties;
    /**
     * The references property
     */
    private java.util.List<ArtifactReference> references;
    /**
     * Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
     */
    private ArtifactState state;
    /**
     * The type property
     */
    private String type;
    /**
     * The version property
     */
    private String version;
    /**
     * Instantiates a new ArtifactMetaData and sets the default values.
     */
    public ArtifactMetaData() {
        this.setAdditionalData(new HashMap<>());
    }
    /**
     * Creates a new instance of the appropriate class based on discriminator value
     * @param parseNode The parse node to use to read the discriminator value and create the object
     * @return a ArtifactMetaData
     */
    @jakarta.annotation.Nonnull
    public static ArtifactMetaData createFromDiscriminatorValue(@jakarta.annotation.Nonnull final ParseNode parseNode) {
        Objects.requireNonNull(parseNode);
        return new ArtifactMetaData();
    }
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @return a Map<String, Object>
     */
    @jakarta.annotation.Nonnull
    public Map<String, Object> getAdditionalData() {
        return this.additionalData;
    }
    /**
     * Gets the contentId property value. The contentId property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getContentId() {
        return this.contentId;
    }
    /**
     * Gets the createdBy property value. The createdBy property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getCreatedBy() {
        return this.createdBy;
    }
    /**
     * Gets the createdOn property value. The createdOn property
     * @return a OffsetDateTime
     */
    @jakarta.annotation.Nullable
    public OffsetDateTime getCreatedOn() {
        return this.createdOn;
    }
    /**
     * Gets the description property value. The description property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getDescription() {
        return this.description;
    }
    /**
     * The deserialization information for the current model
     * @return a Map<String, java.util.function.Consumer<ParseNode>>
     */
    @jakarta.annotation.Nonnull
    public Map<String, java.util.function.Consumer<ParseNode>> getFieldDeserializers() {
        final HashMap<String, java.util.function.Consumer<ParseNode>> deserializerMap = new HashMap<String, java.util.function.Consumer<ParseNode>>(16);
        deserializerMap.put("contentId", (n) -> { this.setContentId(n.getLongValue()); });
        deserializerMap.put("createdBy", (n) -> { this.setCreatedBy(n.getStringValue()); });
        deserializerMap.put("createdOn", (n) -> { this.setCreatedOn(n.getOffsetDateTimeValue()); });
        deserializerMap.put("description", (n) -> { this.setDescription(n.getStringValue()); });
        deserializerMap.put("globalId", (n) -> { this.setGlobalId(n.getLongValue()); });
        deserializerMap.put("groupId", (n) -> { this.setGroupId(n.getStringValue()); });
        deserializerMap.put("id", (n) -> { this.setId(n.getStringValue()); });
        deserializerMap.put("labels", (n) -> { this.setLabels(n.getCollectionOfPrimitiveValues(String.class)); });
        deserializerMap.put("modifiedBy", (n) -> { this.setModifiedBy(n.getStringValue()); });
        deserializerMap.put("modifiedOn", (n) -> { this.setModifiedOn(n.getOffsetDateTimeValue()); });
        deserializerMap.put("name", (n) -> { this.setName(n.getStringValue()); });
        deserializerMap.put("properties", (n) -> { this.setProperties(n.getObjectValue(Properties::createFromDiscriminatorValue)); });
        deserializerMap.put("references", (n) -> { this.setReferences(n.getCollectionOfObjectValues(ArtifactReference::createFromDiscriminatorValue)); });
        deserializerMap.put("state", (n) -> { this.setState(n.getEnumValue(ArtifactState.class)); });
        deserializerMap.put("type", (n) -> { this.setType(n.getStringValue()); });
        deserializerMap.put("version", (n) -> { this.setVersion(n.getStringValue()); });
        return deserializerMap;
    }
    /**
     * Gets the globalId property value. The globalId property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getGlobalId() {
        return this.globalId;
    }
    /**
     * Gets the groupId property value. An ID of a single artifact group.
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getGroupId() {
        return this.groupId;
    }
    /**
     * Gets the id property value. The ID of a single artifact.
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getId() {
        return this.id;
    }
    /**
     * Gets the labels property value. The labels property
     * @return a java.util.List<String>
     */
    @jakarta.annotation.Nullable
    public java.util.List<String> getLabels() {
        return this.labels;
    }
    /**
     * Gets the modifiedBy property value. The modifiedBy property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getModifiedBy() {
        return this.modifiedBy;
    }
    /**
     * Gets the modifiedOn property value. The modifiedOn property
     * @return a OffsetDateTime
     */
    @jakarta.annotation.Nullable
    public OffsetDateTime getModifiedOn() {
        return this.modifiedOn;
    }
    /**
     * Gets the name property value. The name property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getName() {
        return this.name;
    }
    /**
     * Gets the properties property value. User-defined name-value pairs. Name and value must be strings.
     * @return a Properties
     */
    @jakarta.annotation.Nullable
    public Properties getProperties() {
        return this.properties;
    }
    /**
     * Gets the references property value. The references property
     * @return a java.util.List<ArtifactReference>
     */
    @jakarta.annotation.Nullable
    public java.util.List<ArtifactReference> getReferences() {
        return this.references;
    }
    /**
     * Gets the state property value. Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
     * @return a ArtifactState
     */
    @jakarta.annotation.Nullable
    public ArtifactState getState() {
        return this.state;
    }
    /**
     * Gets the type property value. The type property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getType() {
        return this.type;
    }
    /**
     * Gets the version property value. The version property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getVersion() {
        return this.version;
    }
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public void serialize(@jakarta.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeLongValue("contentId", this.getContentId());
        writer.writeStringValue("createdBy", this.getCreatedBy());
        writer.writeOffsetDateTimeValue("createdOn", this.getCreatedOn());
        writer.writeStringValue("description", this.getDescription());
        writer.writeLongValue("globalId", this.getGlobalId());
        writer.writeStringValue("groupId", this.getGroupId());
        writer.writeStringValue("id", this.getId());
        writer.writeCollectionOfPrimitiveValues("labels", this.getLabels());
        writer.writeStringValue("modifiedBy", this.getModifiedBy());
        writer.writeOffsetDateTimeValue("modifiedOn", this.getModifiedOn());
        writer.writeStringValue("name", this.getName());
        writer.writeObjectValue("properties", this.getProperties());
        writer.writeCollectionOfObjectValues("references", this.getReferences());
        writer.writeEnumValue("state", this.getState());
        writer.writeStringValue("type", this.getType());
        writer.writeStringValue("version", this.getVersion());
        writer.writeAdditionalData(this.getAdditionalData());
    }
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public void setAdditionalData(@jakarta.annotation.Nullable final Map<String, Object> value) {
        this.additionalData = value;
    }
    /**
     * Sets the contentId property value. The contentId property
     * @param value Value to set for the contentId property.
     */
    public void setContentId(@jakarta.annotation.Nullable final Long value) {
        this.contentId = value;
    }
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public void setCreatedBy(@jakarta.annotation.Nullable final String value) {
        this.createdBy = value;
    }
    /**
     * Sets the createdOn property value. The createdOn property
     * @param value Value to set for the createdOn property.
     */
    public void setCreatedOn(@jakarta.annotation.Nullable final OffsetDateTime value) {
        this.createdOn = value;
    }
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public void setDescription(@jakarta.annotation.Nullable final String value) {
        this.description = value;
    }
    /**
     * Sets the globalId property value. The globalId property
     * @param value Value to set for the globalId property.
     */
    public void setGlobalId(@jakarta.annotation.Nullable final Long value) {
        this.globalId = value;
    }
    /**
     * Sets the groupId property value. An ID of a single artifact group.
     * @param value Value to set for the groupId property.
     */
    public void setGroupId(@jakarta.annotation.Nullable final String value) {
        this.groupId = value;
    }
    /**
     * Sets the id property value. The ID of a single artifact.
     * @param value Value to set for the id property.
     */
    public void setId(@jakarta.annotation.Nullable final String value) {
        this.id = value;
    }
    /**
     * Sets the labels property value. The labels property
     * @param value Value to set for the labels property.
     */
    public void setLabels(@jakarta.annotation.Nullable final java.util.List<String> value) {
        this.labels = value;
    }
    /**
     * Sets the modifiedBy property value. The modifiedBy property
     * @param value Value to set for the modifiedBy property.
     */
    public void setModifiedBy(@jakarta.annotation.Nullable final String value) {
        this.modifiedBy = value;
    }
    /**
     * Sets the modifiedOn property value. The modifiedOn property
     * @param value Value to set for the modifiedOn property.
     */
    public void setModifiedOn(@jakarta.annotation.Nullable final OffsetDateTime value) {
        this.modifiedOn = value;
    }
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public void setName(@jakarta.annotation.Nullable final String value) {
        this.name = value;
    }
    /**
     * Sets the properties property value. User-defined name-value pairs. Name and value must be strings.
     * @param value Value to set for the properties property.
     */
    public void setProperties(@jakarta.annotation.Nullable final Properties value) {
        this.properties = value;
    }
    /**
     * Sets the references property value. The references property
     * @param value Value to set for the references property.
     */
    public void setReferences(@jakarta.annotation.Nullable final java.util.List<ArtifactReference> value) {
        this.references = value;
    }
    /**
     * Sets the state property value. Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
     * @param value Value to set for the state property.
     */
    public void setState(@jakarta.annotation.Nullable final ArtifactState value) {
        this.state = value;
    }
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public void setType(@jakarta.annotation.Nullable final String value) {
        this.type = value;
    }
    /**
     * Sets the version property value. The version property
     * @param value Value to set for the version property.
     */
    public void setVersion(@jakarta.annotation.Nullable final String value) {
        this.version = value;
    }
}
