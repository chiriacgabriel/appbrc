package com.app.brc.brandcomputer.components.casing.mapper;

import com.app.brc.brandcomputer.components.casing.dto.GenerateProductCodeCaseDTO;
import com.app.brc.brandcomputer.components.casing.model.GenerateProductCodeCase;
import com.app.brc.brandcomputer.components.casing.repository.GenerateProductCodeCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeCaseMapper {

    private GenerateProductCodeCaseRepository generateProductCodeCaseRepository;

    @Autowired
    public GenerateProductCodeCaseMapper(GenerateProductCodeCaseRepository generateProductCodeCaseRepository) {
        this.generateProductCodeCaseRepository = generateProductCodeCaseRepository;
    }

    public GenerateProductCodeCase map(GenerateProductCodeCaseDTO generateProductCodeCaseDTO) {
        return GenerateProductCodeCase.builder()
                .productCode(generateProductCodeCaseDTO.getProductCode())
                .productName(generateProductCodeCaseDTO.getProductName())
                .createdDate(generateProductCodeCaseDTO.getCreatedDate())
                .state(generateProductCodeCaseDTO.isState())
                .build();
    }

    public GenerateProductCodeCaseDTO map(GenerateProductCodeCase generateProductCodeCase) {
        return GenerateProductCodeCaseDTO.builder()
                .id(generateProductCodeCase.getId())
                .productCode(generateProductCodeCase.getProductCode())
                .productName(generateProductCodeCase.getProductName())
                .createdDate(generateProductCodeCase.getCreatedDate())
                .state(generateProductCodeCase.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeCaseDTO generateProductCodeCaseDTO) {

        Optional<GenerateProductCodeCase> optional = generateProductCodeCaseRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeCase dbProductCode = optional.get();
        dbProductCode.setProductCode(generateProductCodeCaseDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodeCaseDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodeCaseDTO.isState());

        generateProductCodeCaseRepository.save(dbProductCode);
    }
}
