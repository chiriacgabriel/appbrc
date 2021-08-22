package com.app.brc.brandcomputer.components.cpu_cooler.mapper;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.GenerateProductCodeCpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.model.GenerateProductCodeCpuCooler;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.GenerateProductCodeCpuCoolerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Observable;
import java.util.Optional;

@Service
public class GenerateProductCodeCpuCoolerMapper {

    private GenerateProductCodeCpuCoolerRepository productCodeCpuCoolerRepository;

    @Autowired
    public GenerateProductCodeCpuCoolerMapper(GenerateProductCodeCpuCoolerRepository productCodeCpuCoolerRepository) {
        this.productCodeCpuCoolerRepository = productCodeCpuCoolerRepository;
    }

    public GenerateProductCodeCpuCooler map(GenerateProductCodeCpuCoolerDTO productCodeCpuCoolerDTO){
        return GenerateProductCodeCpuCooler.builder()
                .productCode(productCodeCpuCoolerDTO.getProductCode())
                .productName(productCodeCpuCoolerDTO.getProductName())
                .createdDate(productCodeCpuCoolerDTO.getCreatedDate())
                .state(productCodeCpuCoolerDTO.isState())
                .build();
    }

    public GenerateProductCodeCpuCoolerDTO map(GenerateProductCodeCpuCooler productCodeCpuCooler){
        return GenerateProductCodeCpuCoolerDTO.builder()
                .id(productCodeCpuCooler.getId())
                .productCode(productCodeCpuCooler.getProductCode())
                .productName(productCodeCpuCooler.getProductName())
                .createdDate(productCodeCpuCooler.getCreatedDate())
                .state(productCodeCpuCooler.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeCpuCoolerDTO generateProductCodeCpuCoolerDTO){
        Optional<GenerateProductCodeCpuCooler> optional = productCodeCpuCoolerRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeCpuCooler dbProductCode = optional.get();

        dbProductCode.setProductCode(generateProductCodeCpuCoolerDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodeCpuCoolerDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodeCpuCoolerDTO.isState());

        productCodeCpuCoolerRepository.save(dbProductCode);
    }
}
