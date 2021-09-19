package com.app.brc.brandcomputer.components.fan_case.dto;
import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class FanCaseDTO {

    private int id;
    private ProductCode generateProductCode;
    private String serialNumber;
    private String manufacturer;
    private String dimension;
    private Double priceIn;
    private String productInformation;
    private String state;
    private String category;
    private int quantity;
    private String unitOfMeasurement;
    private long stock;
    private Double averagePrice;
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
