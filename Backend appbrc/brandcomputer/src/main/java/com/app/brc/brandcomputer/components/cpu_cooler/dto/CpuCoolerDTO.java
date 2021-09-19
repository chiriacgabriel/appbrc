package com.app.brc.brandcomputer.components.cpu_cooler.dto;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class CpuCoolerDTO {

    private int id;
    private ProductCode generateProductCode;

    private long stock;

    private String serialNumber;
    private String manufacturer;
    private String socket;
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
