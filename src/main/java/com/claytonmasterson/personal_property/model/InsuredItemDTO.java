package com.claytonmasterson.personal_property.model;

import java.util.UUID;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class InsuredItemDTO {

    private UUID id;

    @NotNull
    @Size(max = 255)
    private String name;

    @Size(max = 128)
    private String productCode;

    private ProductType productType;

    @Size(max = 255)
    private String authorArtist;

    private Integer releaseYear;

    private Double estimatedValue;

    private String description;

}
