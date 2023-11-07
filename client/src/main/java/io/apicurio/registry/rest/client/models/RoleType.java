package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.ValuedEnum;
import java.util.Objects;

@jakarta.annotation.Generated("com.microsoft.kiota")
public enum RoleType implements ValuedEnum {
    READ_ONLY("READ_ONLY"),
    DEVELOPER("DEVELOPER"),
    ADMIN("ADMIN");
    public final String value;
    RoleType(final String value) {
        this.value = value;
    }
    @jakarta.annotation.Nonnull
    public String getValue() { return this.value; }
    @jakarta.annotation.Nullable
    public static RoleType forValue(@jakarta.annotation.Nonnull final String searchValue) {
        Objects.requireNonNull(searchValue);
        switch(searchValue) {
            case "READ_ONLY": return READ_ONLY;
            case "DEVELOPER": return DEVELOPER;
            case "ADMIN": return ADMIN;
            default: return null;
        }
    }
}
