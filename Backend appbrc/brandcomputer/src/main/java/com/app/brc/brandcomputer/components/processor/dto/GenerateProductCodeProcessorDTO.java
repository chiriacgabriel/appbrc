package com.app.brc.brandcomputer.components.processor.dto;

import com.app.brc.brandcomputer.components.processor.model.Processor;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class GenerateProductCodeProcessorDTO {
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<Processor> processorList;

}
