package com.app.brc.brandcomputer.components.optical_unit.mapper;

import com.app.brc.brandcomputer.components.optical_unit.dto.GenerateProductCodeOpticalUnitDTO;
import com.app.brc.brandcomputer.components.optical_unit.model.GenerateProductCodeOpticalUnit;
import com.app.brc.brandcomputer.components.optical_unit.repository.GenerateProductCodeOpticalUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeOpticalUnitMapper {

    private GenerateProductCodeOpticalUnitRepository generateProductCodeOpticalUnitRepository;

    @Autowired
    public GenerateProductCodeOpticalUnitMapper(GenerateProductCodeOpticalUnitRepository generateProductCodeOpticalUnitRepository) {
        this.generateProductCodeOpticalUnitRepository = generateProductCodeOpticalUnitRepository;
    }

    public GenerateProductCodeOpticalUnit map(GenerateProductCodeOpticalUnitDTO productCodeDTO){
        return GenerateProductCodeOpticalUnit.builder()
                .productCode(productCodeDTO.getProductCode())
                .productName(productCodeDTO.getProductName())
                .createdDate(productCodeDTO.getCreatedDate())
                .state(productCodeDTO.isState())
                .build();
    }

    public GenerateProductCodeOpticalUnitDTO map(GenerateProductCodeOpticalUnit productCode){
        return GenerateProductCodeOpticalUnitDTO.builder()
                .id(productCode.getId())
                .productCode(productCode.getProductCode())
                .productName(productCode.getProductName())
                .createdDate(productCode.getCreatedDate())
                .state(productCode.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeOpticalUnitDTO productCodeDTO){
        Optional<GenerateProductCodeOpticalUnit> optional = generateProductCodeOpticalUnitRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeOpticalUnit dbProductCode = optional.get();

        dbProductCode.setProductCode(productCodeDTO.getProductCode());
        dbProductCode.setProductName(productCodeDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(productCodeDTO.isState());

        generateProductCodeOpticalUnitRepository.save(dbProductCode);
    }
}
