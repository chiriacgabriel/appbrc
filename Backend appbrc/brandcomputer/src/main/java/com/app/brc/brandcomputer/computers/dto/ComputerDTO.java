package com.app.brc.brandcomputer.computers.dto;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class ComputerDTO {

    private int id;

    private ProductCode generateProductCode;

    private String serialNumber;
    private String manufacturer;
    private String model;
    private String form;
    private String cpuType;
    private String cpuModel;
    private String memoryType;
    private int memoryCapacity;
    private int numberOfDIMM;
    private int memoryFrequency;
    private boolean storageExist;
    private String storageType;
    private int storageCapacity;
    private boolean opticalUnitExist;
    private String opticalUnit;
    private boolean videoCardExist;
    private String videoCard;
    private boolean soundCardExist;
    private String soundCard;
    private boolean networkCardExist;
    private String networkCard;
    private String category;
    private String state;
    private String productInformation;
    private Double priceIn;
    private Double averagePrice;
    private int stock;
    private boolean dismantled;
    private boolean received;
    private boolean selected;
    private int quantity;
    private String unitOfMeasurement;

    private LocalDateTime soldAt;
    private String soldBy;
    private boolean sold;

    private LocalDateTime createdDate;
    private String createdBy;

    private LocalDateTime lastUpdated;
    private String updatedBy;
}
