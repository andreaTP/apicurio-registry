package io.apicurio.registry.rest.client.models;

import com.microsoft.kiota.serialization.ValuedEnum;
import java.util.Objects;

@jakarta.annotation.Generated("com.microsoft.kiota")
public enum RuleType implements ValuedEnum {
    VALIDITY("VALIDITY"),
    COMPATIBILITY("COMPATIBILITY"),
    INTEGRITY("INTEGRITY");
    public final String value;
    RuleType(final String value) {
        this.value = value;
    }
    @jakarta.annotation.Nonnull
    public String getValue() { return this.value; }
    @jakarta.annotation.Nullable
    public static RuleType forValue(@jakarta.annotation.Nonnull final String searchValue) {
        Objects.requireNonNull(searchValue);
        switch(searchValue) {
            case "VALIDITY": return VALIDITY;
            case "COMPATIBILITY": return COMPATIBILITY;
            case "INTEGRITY": return INTEGRITY;
            default: return null;
        }
    }
}
