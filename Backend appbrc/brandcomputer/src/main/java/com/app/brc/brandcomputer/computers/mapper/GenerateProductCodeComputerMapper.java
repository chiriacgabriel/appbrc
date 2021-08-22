package com.app.brc.brandcomputer.computers.mapper;

import com.app.brc.brandcomputer.computers.dto.GenerateProductCodeComputerDTO;
import com.app.brc.brandcomputer.computers.model.GenerateProductCodeComputer;
import com.app.brc.brandcomputer.computers.repository.GenerateProductCodeComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeComputerMapper {

    private GenerateProductCodeComputerRepository generateProductCodeComputerRepository;

    @Autowired
    public GenerateProductCodeComputerMapper(GenerateProductCodeComputerRepository generateProductCodeComputerRepository) {
        this.generateProductCodeComputerRepository = generateProductCodeComputerRepository;
    }

    public GenerateProductCodeComputer map(GenerateProductCodeComputerDTO generateProductCodeComputerDTO) {

        return GenerateProductCodeComputer.builder()
                .productCode(generateProductCodeComputerDTO.getProductCode())
                .productName(generateProductCodeComputerDTO.getProductName())
                .createdDate(generateProductCodeComputerDTO.getCreatedDate())
                .state(generateProductCodeComputerDTO.isState())
                .build();
    }

    public GenerateProductCodeComputerDTO map(GenerateProductCodeComputer generateProductCodeComputer) {

        return GenerateProductCodeComputerDTO.builder()
                .id(generateProductCodeComputer.getId())
                .productCode(generateProductCodeComputer.getProductCode())
                .productName(generateProductCodeComputer.getProductName())
                .createdDate(generateProductCodeComputer.getCreatedDate())
                .state(generateProductCodeComputer.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeComputerDTO generateProductCodeComputerDTO) {

        Optional<GenerateProductCodeComputer> optional = generateProductCodeComputerRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found");
        }

        GenerateProductCodeComputer dbProductCode = optional.get();
        dbProductCode.setProductCode(generateProductCodeComputerDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodeComputerDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodeComputerDTO.isState());

        generateProductCodeComputerRepository.save(dbProductCode);
    }
}
