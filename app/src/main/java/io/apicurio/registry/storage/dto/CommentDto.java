package io.apicurio.registry.storage.dto;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class CommentDto {

    private String commentId;
    private String value;
    private String owner;
    private long createdOn;
}
