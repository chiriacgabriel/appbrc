package com.app.brc.brandcomputer.components.processor.mapper;

import com.app.brc.brandcomputer.components.processor.dto.GenerateProductCodeProcessorDTO;
import com.app.brc.brandcomputer.components.processor.model.GenerateProductCodeProcessor;
import com.app.brc.brandcomputer.components.processor.repository.GenerateProductCodeProcessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeProcessorMapper {

    private GenerateProductCodeProcessorRepository generateProductCodeProcessorRepository;

    @Autowired
    public GenerateProductCodeProcessorMapper(GenerateProductCodeProcessorRepository generateProductCodeProcessorRepository) {
        this.generateProductCodeProcessorRepository = generateProductCodeProcessorRepository;
    }

    public GenerateProductCodeProcessor map(GenerateProductCodeProcessorDTO productCodeProcessorDTO){
        return GenerateProductCodeProcessor.builder()
                .productCode(productCodeProcessorDTO.getProductCode())
                .productName(productCodeProcessorDTO.getProductName())
                .createdDate(productCodeProcessorDTO.getCreatedDate())
                .state(productCodeProcessorDTO.isState())
                .build();
    }

    public GenerateProductCodeProcessorDTO map(GenerateProductCodeProcessor productCodeProcessor){
        return GenerateProductCodeProcessorDTO.builder()
                .id(productCodeProcessor.getId())
                .productCode(productCodeProcessor.getProductCode())
                .productName(productCodeProcessor.getProductName())
                .createdDate(productCodeProcessor.getCreatedDate())
                .state(productCodeProcessor.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeProcessorDTO productCodeProcessorDTO){
        Optional<GenerateProductCodeProcessor> optional = generateProductCodeProcessorRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Product code not found !");
        }

        GenerateProductCodeProcessor dbProductCodeProcessor = optional.get();

        dbProductCodeProcessor.setProductCode(productCodeProcessorDTO.getProductCode());
        dbProductCodeProcessor.setProductName(productCodeProcessorDTO.getProductName());
        dbProductCodeProcessor.setCreatedDate(LocalDate.now());
        dbProductCodeProcessor.setState(productCodeProcessorDTO.isState());

        generateProductCodeProcessorRepository.save(dbProductCodeProcessor);
    }
}
