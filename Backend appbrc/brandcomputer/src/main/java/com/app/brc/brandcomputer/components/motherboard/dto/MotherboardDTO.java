package com.app.brc.brandcomputer.components.motherboard.dto;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class MotherboardDTO {

    private int id;

    private ProductCode generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;
    private String model;
    private String formFactor;
    private String socket;
    private int numberOfSockets;
    private String chipset;
    private int numberOfSlotMemoryRAM;
    private int maxMemoryRAM;
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
