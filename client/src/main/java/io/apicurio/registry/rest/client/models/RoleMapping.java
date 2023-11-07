package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.AdditionalDataHolder;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * The mapping between a user/principal and their role.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class RoleMapping implements AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    private Map<String, Object> additionalData;
    /**
     * The principalId property
     */
    private String principalId;
    /**
     * A friendly name for the principal.
     */
    private String principalName;
    /**
     * The role property
     */
    private RoleType role;
    /**
     * Instantiates a new RoleMapping and sets the default values.
     */
    public RoleMapping() {
        this.setAdditionalData(new HashMap<>());
    }
    /**
     * Creates a new instance of the appropriate class based on discriminator value
     * @param parseNode The parse node to use to read the discriminator value and create the object
     * @return a RoleMapping
     */
    @jakarta.annotation.Nonnull
    public static RoleMapping createFromDiscriminatorValue(@jakarta.annotation.Nonnull final ParseNode parseNode) {
        Objects.requireNonNull(parseNode);
        return new RoleMapping();
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
        final HashMap<String, java.util.function.Consumer<ParseNode>> deserializerMap = new HashMap<String, java.util.function.Consumer<ParseNode>>(3);
        deserializerMap.put("principalId", (n) -> { this.setPrincipalId(n.getStringValue()); });
        deserializerMap.put("principalName", (n) -> { this.setPrincipalName(n.getStringValue()); });
        deserializerMap.put("role", (n) -> { this.setRole(n.getEnumValue(RoleType.class)); });
        return deserializerMap;
    }
    /**
     * Gets the principalId property value. The principalId property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getPrincipalId() {
        return this.principalId;
    }
    /**
     * Gets the principalName property value. A friendly name for the principal.
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getPrincipalName() {
        return this.principalName;
    }
    /**
     * Gets the role property value. The role property
     * @return a RoleType
     */
    @jakarta.annotation.Nullable
    public RoleType getRole() {
        return this.role;
    }
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public void serialize(@jakarta.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeStringValue("principalId", this.getPrincipalId());
        writer.writeStringValue("principalName", this.getPrincipalName());
        writer.writeEnumValue("role", this.getRole());
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
     * Sets the principalId property value. The principalId property
     * @param value Value to set for the principalId property.
     */
    public void setPrincipalId(@jakarta.annotation.Nullable final String value) {
        this.principalId = value;
    }
    /**
     * Sets the principalName property value. A friendly name for the principal.
     * @param value Value to set for the principalName property.
     */
    public void setPrincipalName(@jakarta.annotation.Nullable final String value) {
        this.principalName = value;
    }
    /**
     * Sets the role property value. The role property
     * @param value Value to set for the role property.
     */
    public void setRole(@jakarta.annotation.Nullable final RoleType value) {
        this.role = value;
    }
}
