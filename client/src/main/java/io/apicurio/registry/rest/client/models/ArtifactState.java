package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.ValuedEnum;
import java.util.Objects;

/**
 * Describes the state of an artifact or artifact version.  The following statesare possible:* ENABLED* DISABLED* DEPRECATED
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public enum ArtifactState implements ValuedEnum {
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DEPRECATED("DEPRECATED");
    public final String value;
    ArtifactState(final String value) {
        this.value = value;
    }
    @jakarta.annotation.Nonnull
    public String getValue() { return this.value; }
    @jakarta.annotation.Nullable
    public static ArtifactState forValue(@jakarta.annotation.Nonnull final String searchValue) {
        Objects.requireNonNull(searchValue);
        switch(searchValue) {
            case "ENABLED": return ENABLED;
            case "DISABLED": return DISABLED;
            case "DEPRECATED": return DEPRECATED;
            default: return null;
        }
    }
}
