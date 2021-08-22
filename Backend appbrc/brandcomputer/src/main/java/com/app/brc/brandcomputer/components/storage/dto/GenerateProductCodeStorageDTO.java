package com.app.brc.brandcomputer.components.storage.dto;

import com.app.brc.brandcomputer.components.storage.model.Storage;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class GenerateProductCodeStorageDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<Storage> storageList;

}
