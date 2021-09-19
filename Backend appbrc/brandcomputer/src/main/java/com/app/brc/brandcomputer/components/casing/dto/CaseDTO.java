package com.app.brc.brandcomputer.components.casing.dto;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class CaseDTO {

    private int id;
    private ProductCode generateProductCode;

    private String serialNumber;
    private String manufacturer;
    private String caseType;
    private String compatibleMotherboard;
    private boolean powerSourceIncluded;
    private String sourcePower;
    private Double priceIn;
    private Double averagePrice;
    private long stock;
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
