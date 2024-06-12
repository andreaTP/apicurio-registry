package io.apicurio.registry.storage.dto;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class VersionSearchResultsDto {

    @Builder.Default
    private List<SearchedVersionDto> versions = new ArrayList<>();
    private long count;
}
