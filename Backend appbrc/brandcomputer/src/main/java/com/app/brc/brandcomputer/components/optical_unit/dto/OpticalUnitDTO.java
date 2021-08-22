package com.app.brc.brandcomputer.components.optical_unit.dto;

import com.app.brc.brandcomputer.components.optical_unit.model.GenerateProductCodeOpticalUnit;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class OpticalUnitDTO {

    private int id;

    private GenerateProductCodeOpticalUnit generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;
    private String type;
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
