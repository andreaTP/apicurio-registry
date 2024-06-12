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
public class RuleConfigurationDto {

    private String configuration; // TODO why not a map?
}
