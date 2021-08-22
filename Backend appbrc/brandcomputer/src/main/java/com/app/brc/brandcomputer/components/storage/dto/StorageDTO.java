package com.app.brc.brandcomputer.components.storage.dto;

import com.app.brc.brandcomputer.components.storage.model.GenerateProductCodeStorage;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class StorageDTO {

    private int id;

    private GenerateProductCodeStorage generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;

    private String model;
    private String type;
    private String form;
    private int capacity;
    private int rpm;

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
