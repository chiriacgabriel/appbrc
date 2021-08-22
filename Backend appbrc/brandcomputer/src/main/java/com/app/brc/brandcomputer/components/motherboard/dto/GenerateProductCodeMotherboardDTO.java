package com.app.brc.brandcomputer.components.motherboard.dto;

import com.app.brc.brandcomputer.components.motherboard.model.Motherboard;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class GenerateProductCodeMotherboardDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<Motherboard> motherboardList;
}
