package com.app.brc.brandcomputer.components.product_code;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductCodeService {

    private ProductCodeMapper productCodeMapper;
    private ProductCodeRepository productCodeRepository;

    @Autowired
    public ProductCodeService(ProductCodeMapper productCodeMapper, ProductCodeRepository productCodeRepository) {
        this.productCodeMapper = productCodeMapper;
        this.productCodeRepository = productCodeRepository;
    }

    public List<ProductCodeDTO> getProductCodes() {
        return productCodeRepository.findAll()
                .stream()
                .map(productCode -> productCodeMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void add(ProductCodeDTO productCodeDTO) {
        productCodeDTO.setState(true);
        productCodeDTO.setCreatedDate(LocalDate.now());
        productCodeRepository.save(productCodeMapper.map(productCodeDTO));
    }
}
