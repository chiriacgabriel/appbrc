package com.app.brc.brandcomputer.components.optical_unit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "generateProductCodeOpticalUnit")
public class GenerateProductCodeOpticalUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCodeOpticalUnit")
    @JsonIgnore
    private List<OpticalUnit> opticalUnitList = new ArrayList<>();
}
