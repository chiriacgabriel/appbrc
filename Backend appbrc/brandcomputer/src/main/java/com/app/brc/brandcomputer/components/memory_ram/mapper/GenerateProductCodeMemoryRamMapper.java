package com.app.brc.brandcomputer.components.memory_ram.mapper;

import com.app.brc.brandcomputer.components.memory_ram.dto.GenerateProductCodeMemoryRamDTO;
import com.app.brc.brandcomputer.components.memory_ram.model.GenerateProductCodeMemoryRam;
import com.app.brc.brandcomputer.components.memory_ram.repository.GenerateProductCodeMemoryRamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeMemoryRamMapper {

    private GenerateProductCodeMemoryRamRepository generateProductCodeMemoryRamRepository;

    @Autowired
    public GenerateProductCodeMemoryRamMapper(GenerateProductCodeMemoryRamRepository generateProductCodeMemoryRamRepository) {
        this.generateProductCodeMemoryRamRepository = generateProductCodeMemoryRamRepository;
    }

    public GenerateProductCodeMemoryRam map(GenerateProductCodeMemoryRamDTO productCodeMemoryRamDTO){
        return GenerateProductCodeMemoryRam.builder()
                .productCode(productCodeMemoryRamDTO.getProductCode())
                .productName(productCodeMemoryRamDTO.getProductName())
                .createdDate(productCodeMemoryRamDTO.getCreatedDate())
                .state(productCodeMemoryRamDTO.isState())
                .build();
    }

    public GenerateProductCodeMemoryRamDTO map(GenerateProductCodeMemoryRam productCodeMemoryRam){
        return GenerateProductCodeMemoryRamDTO.builder()
                .id(productCodeMemoryRam.getId())
                .productCode(productCodeMemoryRam.getProductCode())
                .productName(productCodeMemoryRam.getProductName())
                .createdDate(productCodeMemoryRam.getCreatedDate())
                .state(productCodeMemoryRam.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeMemoryRamDTO productCodeMemoryRamDTO){
        Optional<GenerateProductCodeMemoryRam> optional = generateProductCodeMemoryRamRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeMemoryRam dbProductCode = optional.get();

        dbProductCode.setProductCode(productCodeMemoryRamDTO.getProductCode());
        dbProductCode.setProductName(productCodeMemoryRamDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(productCodeMemoryRamDTO.isState());

        generateProductCodeMemoryRamRepository.save(dbProductCode);
    }
}
