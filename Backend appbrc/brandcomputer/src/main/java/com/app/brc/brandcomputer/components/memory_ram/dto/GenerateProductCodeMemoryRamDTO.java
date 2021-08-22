package com.app.brc.brandcomputer.components.memory_ram.dto;

import com.app.brc.brandcomputer.components.memory_ram.model.MemoryRam;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class GenerateProductCodeMemoryRamDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<MemoryRam> memoryRamList;
}
