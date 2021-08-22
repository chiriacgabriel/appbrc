package com.app.brc.brandcomputer.components.memory_ram.dto;

import com.app.brc.brandcomputer.components.memory_ram.model.GenerateProductCodeMemoryRam;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class MemoryRamDTO {

    private int id;

    private GenerateProductCodeMemoryRam generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;
    private String module;
    private String ramType;
    private String frequency;
    private String capacity;

    private Double priceIn;
    private Double averagePrice;
    private String productInformation;
    private String state;
    private String category;
    private int quantity;
    private String unitOfMeasurement;

    private LocalDateTime soldAt;
    private String soldBy;
    private boolean sold;
    private boolean received;
    private boolean selected;

    private LocalDateTime createdDate;
    private String createdBy;

    private LocalDateTime lastUpdated;
    private String updatedBy;
}
