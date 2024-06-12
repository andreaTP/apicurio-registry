package io.apicurio.registry.storage.dto;

import io.quarkus.runtime.annotations.RegisterForReflection;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@EqualsAndHashCode
@ToString
@RegisterForReflection
public class RoleMappingDto {

    private String principalId;
    private String role;
    private String principalName;
}
