package com.app.brc.brandcomputer.components.powersource.dto;

import com.app.brc.brandcomputer.components.powersource.model.GenerateProductCodePowerSource;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class PowerSourceDTO {

    private int id;

    private GenerateProductCodePowerSource generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;
    private String model;
    private int power;
    private String sourceType;
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
