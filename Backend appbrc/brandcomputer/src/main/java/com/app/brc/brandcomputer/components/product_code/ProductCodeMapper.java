package com.app.brc.brandcomputer.components.product_code;

import org.springframework.stereotype.Service;

@Service
public class ProductCodeMapper {

    public ProductCodeDTO map(ProductCode productCode){
        return ProductCodeDTO.builder()
                .id(productCode.getId())
                .productCode(productCode.getProductCode())
                .productName(productCode.getProductName())
                .createdDate(productCode.getCreatedDate())
                .category(productCode.getCategory())
                .state(productCode.isState())
                .build();
    }

    public ProductCode map(ProductCodeDTO productCodeDTO){
        return ProductCode.builder()
                .productCode(productCodeDTO.getProductCode())
                .productName(productCodeDTO.getProductName())
                .createdDate(productCodeDTO.getCreatedDate())
                .category(productCodeDTO.getCategory())
                .state(productCodeDTO.isState())
                .build();
    }
}
