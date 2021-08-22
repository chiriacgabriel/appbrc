package com.app.brc.brandcomputer.computers.dto;

import com.app.brc.brandcomputer.computers.model.Computer;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class GenerateProductCodeComputerDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<Computer> computerList;
}
