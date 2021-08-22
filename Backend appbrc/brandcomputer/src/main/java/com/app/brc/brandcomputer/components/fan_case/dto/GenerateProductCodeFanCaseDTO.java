package com.app.brc.brandcomputer.components.fan_case.dto;

import com.app.brc.brandcomputer.components.fan_case.model.FanCase;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class GenerateProductCodeFanCaseDTO {
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<FanCase> fanCaseList;
}
