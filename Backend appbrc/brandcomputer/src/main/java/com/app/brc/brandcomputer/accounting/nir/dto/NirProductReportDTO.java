package com.app.brc.brandcomputer.accounting.nir.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class NirProductReportDTO {

    private String productCode;
    private String productName;
    private String unitOfMeasurement;
    private Integer quantity;
    private Double priceIn;
    private Double vat;

}
