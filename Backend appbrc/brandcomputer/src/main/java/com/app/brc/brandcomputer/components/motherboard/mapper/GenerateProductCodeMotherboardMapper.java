package com.app.brc.brandcomputer.components.motherboard.mapper;

import com.app.brc.brandcomputer.components.motherboard.dto.GenerateProductCodeMotherboardDTO;
import com.app.brc.brandcomputer.components.motherboard.model.GenerateProductCodeMotherboard;
import com.app.brc.brandcomputer.components.motherboard.repository.GenerateProductCodeMotherboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeMotherboardMapper {

    private GenerateProductCodeMotherboardRepository generateProductCodeMotherboardRepository;

    @Autowired
    public GenerateProductCodeMotherboardMapper(GenerateProductCodeMotherboardRepository generateProductCodeMotherboardRepository) {
        this.generateProductCodeMotherboardRepository = generateProductCodeMotherboardRepository;
    }

    public GenerateProductCodeMotherboard map(GenerateProductCodeMotherboardDTO generateProductCodeMotherboardDTO) {
        return GenerateProductCodeMotherboard.builder()
                .productCode(generateProductCodeMotherboardDTO.getProductCode())
                .productName(generateProductCodeMotherboardDTO.getProductName())
                .createdDate(generateProductCodeMotherboardDTO.getCreatedDate())
                .state(generateProductCodeMotherboardDTO.isState())
                .build();
    }

    public GenerateProductCodeMotherboardDTO map(GenerateProductCodeMotherboard generateProductCodeMotherboard) {
        return GenerateProductCodeMotherboardDTO.builder()
                .id(generateProductCodeMotherboard.getId())
                .productCode(generateProductCodeMotherboard.getProductCode())
                .productName(generateProductCodeMotherboard.getProductName())
                .createdDate(generateProductCodeMotherboard.getCreatedDate())
                .state(generateProductCodeMotherboard.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeMotherboardDTO generateProductCodeMotherboardDTO) {

        Optional<GenerateProductCodeMotherboard> optional = generateProductCodeMotherboardRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeMotherboard dbProductCode = optional.get();
        dbProductCode.setProductCode(generateProductCodeMotherboardDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodeMotherboardDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodeMotherboardDTO.isState());

        generateProductCodeMotherboardRepository.save(dbProductCode);

    }
}
