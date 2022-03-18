package com.claytonmasterson.personal_property.domain;

import com.claytonmasterson.personal_property.model.ProductType;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Getter
@Setter
public class InsuredItem {

    @Id
    @Column(nullable = false, updatable = false, columnDefinition = "UUID")
    @GenericGenerator(name = "uuid", strategy = "org.hibernate.id.UUIDGenerator")
    @GeneratedValue(generator = "uuid")
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(length = 128)
    private String productCode;

    @Column
    @Enumerated(EnumType.STRING)
    private ProductType productType;

    @Column
    private String authorArtist;

    @Column
    private Integer releaseYear;

    @Column
    private Double estimatedValue;

    @Column(columnDefinition = "text")
    private String description;

}
