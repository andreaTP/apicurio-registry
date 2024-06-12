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
public class ArtifactReferenceDto {

    private String groupId;
    private String artifactId;
    private String version;
    private String name;
}
