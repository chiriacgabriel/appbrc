package com.app.brc.brandcomputer.components.product_code.services;

import com.app.brc.brandcomputer.components.product_code.dto.ProductCodeDTO;
import com.app.brc.brandcomputer.components.product_code.mapper.ProductCodeMapper;
import com.app.brc.brandcomputer.components.product_code.repository.ProductCodeRepository;
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
        return productCodeRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(productCode -> productCodeMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void add(ProductCodeDTO productCodeDTO) {
        productCodeDTO.setState(true);
        productCodeDTO.setCreatedDate(LocalDate.now());
        productCodeRepository.save(productCodeMapper.map(productCodeDTO));
    }

    public List<ProductCodeDTO> searchByProductCodeOrProductName(String query, String category) {
      return productCodeRepository.findAllByProductNameOrProductCodeOrCategory(query, category)
              .stream()
              .map(productCode -> productCodeMapper.map(productCode))
              .collect(Collectors.toList());
    }

    public void update(int id, ProductCodeDTO productCodeDTO) {
        productCodeMapper.set(id, productCodeDTO);
    }

    public List<ProductCodeDTO> getProductCodesByCategory(String category) {
        return productCodeRepository.findAllByCategory(category)
                .stream().map(productCode -> productCodeMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void delete(int id) {
        productCodeRepository.deleteById(id);
    }
}
