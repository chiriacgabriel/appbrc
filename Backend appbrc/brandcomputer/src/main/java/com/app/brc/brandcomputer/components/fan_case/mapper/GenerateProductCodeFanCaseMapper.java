package com.app.brc.brandcomputer.components.fan_case.mapper;

import com.app.brc.brandcomputer.components.fan_case.dto.GenerateProductCodeFanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.model.GenerateProductCodeFanCase;
import com.app.brc.brandcomputer.components.fan_case.repository.GenerateProductCodeFanCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeFanCaseMapper {

    private GenerateProductCodeFanCaseRepository generateProductCodeFanCaseRepository;

    @Autowired
    public GenerateProductCodeFanCaseMapper(GenerateProductCodeFanCaseRepository generateProductCodeFanCaseRepository) {
        this.generateProductCodeFanCaseRepository = generateProductCodeFanCaseRepository;
    }

    public GenerateProductCodeFanCase map(GenerateProductCodeFanCaseDTO generateProductCodeFanCaseDTO) {
        return GenerateProductCodeFanCase.builder()
                .productCode(generateProductCodeFanCaseDTO.getProductCode())
                .productName(generateProductCodeFanCaseDTO.getProductName())
                .createdDate(generateProductCodeFanCaseDTO.getCreatedDate())
                .state(generateProductCodeFanCaseDTO.isState())
                .build();
    }

    public GenerateProductCodeFanCaseDTO map(GenerateProductCodeFanCase generateProductCodeFanCase) {
        return GenerateProductCodeFanCaseDTO.builder()
                .id(generateProductCodeFanCase.getId())
                .productCode(generateProductCodeFanCase.getProductCode())
                .productName(generateProductCodeFanCase.getProductName())
                .createdDate(generateProductCodeFanCase.getCreatedDate())
                .state(generateProductCodeFanCase.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeFanCaseDTO generateProductCodeFanCaseDTO) {

        Optional<GenerateProductCodeFanCase> optional = generateProductCodeFanCaseRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found");
        }

        GenerateProductCodeFanCase dbProductCode = optional.get();
        dbProductCode.setProductCode(generateProductCodeFanCaseDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodeFanCaseDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodeFanCaseDTO.isState());

        generateProductCodeFanCaseRepository.save(dbProductCode);
    }
}
