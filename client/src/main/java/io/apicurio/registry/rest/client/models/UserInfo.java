package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.AdditionalDataHolder;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/**
 * Information about a single user.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class UserInfo implements AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    private Map<String, Object> additionalData;
    /**
     * The admin property
     */
    private Boolean admin;
    /**
     * The developer property
     */
    private Boolean developer;
    /**
     * The displayName property
     */
    private String displayName;
    /**
     * The username property
     */
    private String username;
    /**
     * The viewer property
     */
    private Boolean viewer;
    /**
     * Instantiates a new UserInfo and sets the default values.
     */
    public UserInfo() {
        this.setAdditionalData(new HashMap<>());
    }
    /**
     * Creates a new instance of the appropriate class based on discriminator value
     * @param parseNode The parse node to use to read the discriminator value and create the object
     * @return a UserInfo
     */
    @jakarta.annotation.Nonnull
    public static UserInfo createFromDiscriminatorValue(@jakarta.annotation.Nonnull final ParseNode parseNode) {
        Objects.requireNonNull(parseNode);
        return new UserInfo();
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
     * Gets the admin property value. The admin property
     * @return a Boolean
     */
    @jakarta.annotation.Nullable
    public Boolean getAdmin() {
        return this.admin;
    }
    /**
     * Gets the developer property value. The developer property
     * @return a Boolean
     */
    @jakarta.annotation.Nullable
    public Boolean getDeveloper() {
        return this.developer;
    }
    /**
     * Gets the displayName property value. The displayName property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getDisplayName() {
        return this.displayName;
    }
    /**
     * The deserialization information for the current model
     * @return a Map<String, java.util.function.Consumer<ParseNode>>
     */
    @jakarta.annotation.Nonnull
    public Map<String, java.util.function.Consumer<ParseNode>> getFieldDeserializers() {
        final HashMap<String, java.util.function.Consumer<ParseNode>> deserializerMap = new HashMap<String, java.util.function.Consumer<ParseNode>>(5);
        deserializerMap.put("admin", (n) -> { this.setAdmin(n.getBooleanValue()); });
        deserializerMap.put("developer", (n) -> { this.setDeveloper(n.getBooleanValue()); });
        deserializerMap.put("displayName", (n) -> { this.setDisplayName(n.getStringValue()); });
        deserializerMap.put("username", (n) -> { this.setUsername(n.getStringValue()); });
        deserializerMap.put("viewer", (n) -> { this.setViewer(n.getBooleanValue()); });
        return deserializerMap;
    }
    /**
     * Gets the username property value. The username property
     * @return a String
     */
    @jakarta.annotation.Nullable
    public String getUsername() {
        return this.username;
    }
    /**
     * Gets the viewer property value. The viewer property
     * @return a Boolean
     */
    @jakarta.annotation.Nullable
    public Boolean getViewer() {
        return this.viewer;
    }
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public void serialize(@jakarta.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeBooleanValue("admin", this.getAdmin());
        writer.writeBooleanValue("developer", this.getDeveloper());
        writer.writeStringValue("displayName", this.getDisplayName());
        writer.writeStringValue("username", this.getUsername());
        writer.writeBooleanValue("viewer", this.getViewer());
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
     * Sets the admin property value. The admin property
     * @param value Value to set for the admin property.
     */
    public void setAdmin(@jakarta.annotation.Nullable final Boolean value) {
        this.admin = value;
    }
    /**
     * Sets the developer property value. The developer property
     * @param value Value to set for the developer property.
     */
    public void setDeveloper(@jakarta.annotation.Nullable final Boolean value) {
        this.developer = value;
    }
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public void setDisplayName(@jakarta.annotation.Nullable final String value) {
        this.displayName = value;
    }
    /**
     * Sets the username property value. The username property
     * @param value Value to set for the username property.
     */
    public void setUsername(@jakarta.annotation.Nullable final String value) {
        this.username = value;
    }
    /**
     * Sets the viewer property value. The viewer property
     * @param value Value to set for the viewer property.
     */
    public void setViewer(@jakarta.annotation.Nullable final Boolean value) {
        this.viewer = value;
    }
}
