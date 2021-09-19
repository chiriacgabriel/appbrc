package com.app.brc.brandcomputer.components.product_code.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ProductCodeDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private String category;
    private boolean state;
}
