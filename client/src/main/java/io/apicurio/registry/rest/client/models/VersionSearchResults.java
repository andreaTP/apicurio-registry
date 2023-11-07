package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.AdditionalDataHolder;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Describes the response received when searching for artifacts.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class VersionSearchResults implements AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    private Map<String, Object> additionalData;
    /**
     * The total number of versions that matched the query (may be more than the number of versionsreturned in the result set).
     */
    private Integer count;
    /**
     * The collection of artifact versions returned in the result set.
     */
    private java.util.List<SearchedVersion> versions;
    /**
     * Instantiates a new VersionSearchResults and sets the default values.
     */
    public VersionSearchResults() {
        this.setAdditionalData(new HashMap<>());
    }
    /**
     * Creates a new instance of the appropriate class based on discriminator value
     * @param parseNode The parse node to use to read the discriminator value and create the object
     * @return a VersionSearchResults
     */
    @jakarta.annotation.Nonnull
    public static VersionSearchResults createFromDiscriminatorValue(@jakarta.annotation.Nonnull final ParseNode parseNode) {
        Objects.requireNonNull(parseNode);
        return new VersionSearchResults();
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
     * Gets the count property value. The total number of versions that matched the query (may be more than the number of versionsreturned in the result set).
     * @return a Integer
     */
    @jakarta.annotation.Nullable
    public Integer getCount() {
        return this.count;
    }
    /**
     * The deserialization information for the current model
     * @return a Map<String, java.util.function.Consumer<ParseNode>>
     */
    @jakarta.annotation.Nonnull
    public Map<String, java.util.function.Consumer<ParseNode>> getFieldDeserializers() {
        final HashMap<String, java.util.function.Consumer<ParseNode>> deserializerMap = new HashMap<String, java.util.function.Consumer<ParseNode>>(2);
        deserializerMap.put("count", (n) -> { this.setCount(n.getIntegerValue()); });
        deserializerMap.put("versions", (n) -> { this.setVersions(n.getCollectionOfObjectValues(SearchedVersion::createFromDiscriminatorValue)); });
        return deserializerMap;
    }
    /**
     * Gets the versions property value. The collection of artifact versions returned in the result set.
     * @return a java.util.List<SearchedVersion>
     */
    @jakarta.annotation.Nullable
    public java.util.List<SearchedVersion> getVersions() {
        return this.versions;
    }
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public void serialize(@jakarta.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeIntegerValue("count", this.getCount());
        writer.writeCollectionOfObjectValues("versions", this.getVersions());
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
     * Sets the count property value. The total number of versions that matched the query (may be more than the number of versionsreturned in the result set).
     * @param value Value to set for the count property.
     */
    public void setCount(@jakarta.annotation.Nullable final Integer value) {
        this.count = value;
    }
    /**
     * Sets the versions property value. The collection of artifact versions returned in the result set.
     * @param value Value to set for the versions property.
     */
    public void setVersions(@jakarta.annotation.Nullable final java.util.List<SearchedVersion> value) {
        this.versions = value;
    }
}
