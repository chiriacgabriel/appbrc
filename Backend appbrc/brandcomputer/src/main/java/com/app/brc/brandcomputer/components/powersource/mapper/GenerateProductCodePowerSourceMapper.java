package com.app.brc.brandcomputer.components.powersource.mapper;

import com.app.brc.brandcomputer.components.powersource.dto.GenerateProductCodePowerSourceDTO;
import com.app.brc.brandcomputer.components.powersource.model.GenerateProductCodePowerSource;
import com.app.brc.brandcomputer.components.powersource.repository.GenerateProductCodePowerSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodePowerSourceMapper {

    private GenerateProductCodePowerSourceRepository generateProductCodePowerSourceRepository;

    @Autowired
    public GenerateProductCodePowerSourceMapper(GenerateProductCodePowerSourceRepository generateProductCodePowerSourceRepository) {
        this.generateProductCodePowerSourceRepository = generateProductCodePowerSourceRepository;
    }

    public GenerateProductCodePowerSource map(GenerateProductCodePowerSourceDTO generateProductCodePowerSourceDTO) {

        return GenerateProductCodePowerSource.builder()
                .productCode(generateProductCodePowerSourceDTO.getProductCode())
                .productName(generateProductCodePowerSourceDTO.getProductName())
                .createdDate(generateProductCodePowerSourceDTO.getCreatedDate())
                .state(generateProductCodePowerSourceDTO.isState())
                .build();
    }

    public GenerateProductCodePowerSourceDTO map(GenerateProductCodePowerSource generateProductCodePowerSource) {

        return GenerateProductCodePowerSourceDTO.builder()
                .id(generateProductCodePowerSource.getId())
                .productCode(generateProductCodePowerSource.getProductCode())
                .productName(generateProductCodePowerSource.getProductName())
                .createdDate(generateProductCodePowerSource.getCreatedDate())
                .state(generateProductCodePowerSource.isState())
                .build();
    }

    public void set(int id, GenerateProductCodePowerSourceDTO generateProductCodePowerSourceDTO) {

        Optional<GenerateProductCodePowerSource> optional = generateProductCodePowerSourceRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product Code not found!");
        }

        GenerateProductCodePowerSource dbProductCode = optional.get();
        dbProductCode.setProductCode(generateProductCodePowerSourceDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodePowerSourceDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodePowerSourceDTO.isState());

        generateProductCodePowerSourceRepository.save(dbProductCode);
    }
}
