package com.app.brc.brandcomputer.components.powersource.dto;

import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class GenerateProductCodePowerSourceDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<PowerSource> powerSourceList;

}
