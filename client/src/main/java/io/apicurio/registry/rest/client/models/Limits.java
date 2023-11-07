package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.AdditionalDataHolder;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * List of limitations on used resources, that are applied on the current instance of Registry.Keys represent the resource type and are suffixed by the corresponding unit.Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class Limits implements AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    private Map<String, Object> additionalData;
    /**
     * The maxArtifactDescriptionLengthChars property
     */
    private Long maxArtifactDescriptionLengthChars;
    /**
     * The maxArtifactLabelsCount property
     */
    private Long maxArtifactLabelsCount;
    /**
     * The maxArtifactNameLengthChars property
     */
    private Long maxArtifactNameLengthChars;
    /**
     * The maxArtifactPropertiesCount property
     */
    private Long maxArtifactPropertiesCount;
    /**
     * The maxArtifactsCount property
     */
    private Long maxArtifactsCount;
    /**
     * The maxLabelSizeBytes property
     */
    private Long maxLabelSizeBytes;
    /**
     * The maxPropertyKeySizeBytes property
     */
    private Long maxPropertyKeySizeBytes;
    /**
     * The maxPropertyValueSizeBytes property
     */
    private Long maxPropertyValueSizeBytes;
    /**
     * The maxRequestsPerSecondCount property
     */
    private Long maxRequestsPerSecondCount;
    /**
     * The maxSchemaSizeBytes property
     */
    private Long maxSchemaSizeBytes;
    /**
     * The maxTotalSchemasCount property
     */
    private Long maxTotalSchemasCount;
    /**
     * The maxVersionsPerArtifactCount property
     */
    private Long maxVersionsPerArtifactCount;
    /**
     * Instantiates a new Limits and sets the default values.
     */
    public Limits() {
        this.setAdditionalData(new HashMap<>());
    }
    /**
     * Creates a new instance of the appropriate class based on discriminator value
     * @param parseNode The parse node to use to read the discriminator value and create the object
     * @return a Limits
     */
    @jakarta.annotation.Nonnull
    public static Limits createFromDiscriminatorValue(@jakarta.annotation.Nonnull final ParseNode parseNode) {
        Objects.requireNonNull(parseNode);
        return new Limits();
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
     * The deserialization information for the current model
     * @return a Map<String, java.util.function.Consumer<ParseNode>>
     */
    @jakarta.annotation.Nonnull
    public Map<String, java.util.function.Consumer<ParseNode>> getFieldDeserializers() {
        final HashMap<String, java.util.function.Consumer<ParseNode>> deserializerMap = new HashMap<String, java.util.function.Consumer<ParseNode>>(12);
        deserializerMap.put("maxArtifactDescriptionLengthChars", (n) -> { this.setMaxArtifactDescriptionLengthChars(n.getLongValue()); });
        deserializerMap.put("maxArtifactLabelsCount", (n) -> { this.setMaxArtifactLabelsCount(n.getLongValue()); });
        deserializerMap.put("maxArtifactNameLengthChars", (n) -> { this.setMaxArtifactNameLengthChars(n.getLongValue()); });
        deserializerMap.put("maxArtifactPropertiesCount", (n) -> { this.setMaxArtifactPropertiesCount(n.getLongValue()); });
        deserializerMap.put("maxArtifactsCount", (n) -> { this.setMaxArtifactsCount(n.getLongValue()); });
        deserializerMap.put("maxLabelSizeBytes", (n) -> { this.setMaxLabelSizeBytes(n.getLongValue()); });
        deserializerMap.put("maxPropertyKeySizeBytes", (n) -> { this.setMaxPropertyKeySizeBytes(n.getLongValue()); });
        deserializerMap.put("maxPropertyValueSizeBytes", (n) -> { this.setMaxPropertyValueSizeBytes(n.getLongValue()); });
        deserializerMap.put("maxRequestsPerSecondCount", (n) -> { this.setMaxRequestsPerSecondCount(n.getLongValue()); });
        deserializerMap.put("maxSchemaSizeBytes", (n) -> { this.setMaxSchemaSizeBytes(n.getLongValue()); });
        deserializerMap.put("maxTotalSchemasCount", (n) -> { this.setMaxTotalSchemasCount(n.getLongValue()); });
        deserializerMap.put("maxVersionsPerArtifactCount", (n) -> { this.setMaxVersionsPerArtifactCount(n.getLongValue()); });
        return deserializerMap;
    }
    /**
     * Gets the maxArtifactDescriptionLengthChars property value. The maxArtifactDescriptionLengthChars property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxArtifactDescriptionLengthChars() {
        return this.maxArtifactDescriptionLengthChars;
    }
    /**
     * Gets the maxArtifactLabelsCount property value. The maxArtifactLabelsCount property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxArtifactLabelsCount() {
        return this.maxArtifactLabelsCount;
    }
    /**
     * Gets the maxArtifactNameLengthChars property value. The maxArtifactNameLengthChars property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxArtifactNameLengthChars() {
        return this.maxArtifactNameLengthChars;
    }
    /**
     * Gets the maxArtifactPropertiesCount property value. The maxArtifactPropertiesCount property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxArtifactPropertiesCount() {
        return this.maxArtifactPropertiesCount;
    }
    /**
     * Gets the maxArtifactsCount property value. The maxArtifactsCount property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxArtifactsCount() {
        return this.maxArtifactsCount;
    }
    /**
     * Gets the maxLabelSizeBytes property value. The maxLabelSizeBytes property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxLabelSizeBytes() {
        return this.maxLabelSizeBytes;
    }
    /**
     * Gets the maxPropertyKeySizeBytes property value. The maxPropertyKeySizeBytes property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxPropertyKeySizeBytes() {
        return this.maxPropertyKeySizeBytes;
    }
    /**
     * Gets the maxPropertyValueSizeBytes property value. The maxPropertyValueSizeBytes property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxPropertyValueSizeBytes() {
        return this.maxPropertyValueSizeBytes;
    }
    /**
     * Gets the maxRequestsPerSecondCount property value. The maxRequestsPerSecondCount property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxRequestsPerSecondCount() {
        return this.maxRequestsPerSecondCount;
    }
    /**
     * Gets the maxSchemaSizeBytes property value. The maxSchemaSizeBytes property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxSchemaSizeBytes() {
        return this.maxSchemaSizeBytes;
    }
    /**
     * Gets the maxTotalSchemasCount property value. The maxTotalSchemasCount property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxTotalSchemasCount() {
        return this.maxTotalSchemasCount;
    }
    /**
     * Gets the maxVersionsPerArtifactCount property value. The maxVersionsPerArtifactCount property
     * @return a Long
     */
    @jakarta.annotation.Nullable
    public Long getMaxVersionsPerArtifactCount() {
        return this.maxVersionsPerArtifactCount;
    }
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public void serialize(@jakarta.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeLongValue("maxArtifactDescriptionLengthChars", this.getMaxArtifactDescriptionLengthChars());
        writer.writeLongValue("maxArtifactLabelsCount", this.getMaxArtifactLabelsCount());
        writer.writeLongValue("maxArtifactNameLengthChars", this.getMaxArtifactNameLengthChars());
        writer.writeLongValue("maxArtifactPropertiesCount", this.getMaxArtifactPropertiesCount());
        writer.writeLongValue("maxArtifactsCount", this.getMaxArtifactsCount());
        writer.writeLongValue("maxLabelSizeBytes", this.getMaxLabelSizeBytes());
        writer.writeLongValue("maxPropertyKeySizeBytes", this.getMaxPropertyKeySizeBytes());
        writer.writeLongValue("maxPropertyValueSizeBytes", this.getMaxPropertyValueSizeBytes());
        writer.writeLongValue("maxRequestsPerSecondCount", this.getMaxRequestsPerSecondCount());
        writer.writeLongValue("maxSchemaSizeBytes", this.getMaxSchemaSizeBytes());
        writer.writeLongValue("maxTotalSchemasCount", this.getMaxTotalSchemasCount());
        writer.writeLongValue("maxVersionsPerArtifactCount", this.getMaxVersionsPerArtifactCount());
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
     * Sets the maxArtifactDescriptionLengthChars property value. The maxArtifactDescriptionLengthChars property
     * @param value Value to set for the maxArtifactDescriptionLengthChars property.
     */
    public void setMaxArtifactDescriptionLengthChars(@jakarta.annotation.Nullable final Long value) {
        this.maxArtifactDescriptionLengthChars = value;
    }
    /**
     * Sets the maxArtifactLabelsCount property value. The maxArtifactLabelsCount property
     * @param value Value to set for the maxArtifactLabelsCount property.
     */
    public void setMaxArtifactLabelsCount(@jakarta.annotation.Nullable final Long value) {
        this.maxArtifactLabelsCount = value;
    }
    /**
     * Sets the maxArtifactNameLengthChars property value. The maxArtifactNameLengthChars property
     * @param value Value to set for the maxArtifactNameLengthChars property.
     */
    public void setMaxArtifactNameLengthChars(@jakarta.annotation.Nullable final Long value) {
        this.maxArtifactNameLengthChars = value;
    }
    /**
     * Sets the maxArtifactPropertiesCount property value. The maxArtifactPropertiesCount property
     * @param value Value to set for the maxArtifactPropertiesCount property.
     */
    public void setMaxArtifactPropertiesCount(@jakarta.annotation.Nullable final Long value) {
        this.maxArtifactPropertiesCount = value;
    }
    /**
     * Sets the maxArtifactsCount property value. The maxArtifactsCount property
     * @param value Value to set for the maxArtifactsCount property.
     */
    public void setMaxArtifactsCount(@jakarta.annotation.Nullable final Long value) {
        this.maxArtifactsCount = value;
    }
    /**
     * Sets the maxLabelSizeBytes property value. The maxLabelSizeBytes property
     * @param value Value to set for the maxLabelSizeBytes property.
     */
    public void setMaxLabelSizeBytes(@jakarta.annotation.Nullable final Long value) {
        this.maxLabelSizeBytes = value;
    }
    /**
     * Sets the maxPropertyKeySizeBytes property value. The maxPropertyKeySizeBytes property
     * @param value Value to set for the maxPropertyKeySizeBytes property.
     */
    public void setMaxPropertyKeySizeBytes(@jakarta.annotation.Nullable final Long value) {
        this.maxPropertyKeySizeBytes = value;
    }
    /**
     * Sets the maxPropertyValueSizeBytes property value. The maxPropertyValueSizeBytes property
     * @param value Value to set for the maxPropertyValueSizeBytes property.
     */
    public void setMaxPropertyValueSizeBytes(@jakarta.annotation.Nullable final Long value) {
        this.maxPropertyValueSizeBytes = value;
    }
    /**
     * Sets the maxRequestsPerSecondCount property value. The maxRequestsPerSecondCount property
     * @param value Value to set for the maxRequestsPerSecondCount property.
     */
    public void setMaxRequestsPerSecondCount(@jakarta.annotation.Nullable final Long value) {
        this.maxRequestsPerSecondCount = value;
    }
    /**
     * Sets the maxSchemaSizeBytes property value. The maxSchemaSizeBytes property
     * @param value Value to set for the maxSchemaSizeBytes property.
     */
    public void setMaxSchemaSizeBytes(@jakarta.annotation.Nullable final Long value) {
        this.maxSchemaSizeBytes = value;
    }
    /**
     * Sets the maxTotalSchemasCount property value. The maxTotalSchemasCount property
     * @param value Value to set for the maxTotalSchemasCount property.
     */
    public void setMaxTotalSchemasCount(@jakarta.annotation.Nullable final Long value) {
        this.maxTotalSchemasCount = value;
    }
    /**
     * Sets the maxVersionsPerArtifactCount property value. The maxVersionsPerArtifactCount property
     * @param value Value to set for the maxVersionsPerArtifactCount property.
     */
    public void setMaxVersionsPerArtifactCount(@jakarta.annotation.Nullable final Long value) {
        this.maxVersionsPerArtifactCount = value;
    }
}
