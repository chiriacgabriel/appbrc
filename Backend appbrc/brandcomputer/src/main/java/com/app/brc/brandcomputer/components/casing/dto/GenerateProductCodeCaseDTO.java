package com.app.brc.brandcomputer.components.casing.dto;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.casing.model.GenerateProductCodeCase;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class GenerateProductCodeCaseDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<Case> caseList;
}
