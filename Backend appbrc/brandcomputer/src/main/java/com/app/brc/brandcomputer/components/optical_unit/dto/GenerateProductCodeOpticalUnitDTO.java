package com.app.brc.brandcomputer.components.optical_unit.dto;

import com.app.brc.brandcomputer.components.optical_unit.model.OpticalUnit;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class GenerateProductCodeOpticalUnitDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<OpticalUnit> opticalUnitList;
}
