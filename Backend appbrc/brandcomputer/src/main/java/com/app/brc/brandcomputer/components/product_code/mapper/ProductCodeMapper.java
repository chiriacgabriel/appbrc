package com.app.brc.brandcomputer.components.product_code.mapper;

import com.app.brc.brandcomputer.components.product_code.repository.ProductCodeRepository;
import com.app.brc.brandcomputer.components.product_code.dto.ProductCodeDTO;
import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ProductCodeMapper {

    private ProductCodeRepository productCodeRepository;

    @Autowired
    public ProductCodeMapper(ProductCodeRepository productCodeRepository) {
        this.productCodeRepository = productCodeRepository;
    }

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

    public void set(int id, ProductCodeDTO productCodeDTO) {
        Optional<ProductCode> optional = productCodeRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        ProductCode dbProductCode = optional.get();

        dbProductCode.setProductCode(productCodeDTO.getProductCode());
        dbProductCode.setProductName(productCodeDTO.getProductName());
        dbProductCode.setState(productCodeDTO.isState());

        productCodeRepository.save(dbProductCode);
    }
}
