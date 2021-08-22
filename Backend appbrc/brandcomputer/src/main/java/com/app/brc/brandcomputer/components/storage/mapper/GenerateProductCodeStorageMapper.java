package com.app.brc.brandcomputer.components.storage.mapper;

import com.app.brc.brandcomputer.components.storage.dto.GenerateProductCodeStorageDTO;
import com.app.brc.brandcomputer.components.storage.model.GenerateProductCodeStorage;
import com.app.brc.brandcomputer.components.storage.repository.GenerateProductCodeStorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeStorageMapper {

    private GenerateProductCodeStorageRepository storageRepository;

    @Autowired
    public GenerateProductCodeStorageMapper(GenerateProductCodeStorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    public GenerateProductCodeStorage map(GenerateProductCodeStorageDTO storageDTO){
        return GenerateProductCodeStorage.builder()
                .productCode(storageDTO.getProductCode())
                .productName(storageDTO.getProductName())
                .createdDate(storageDTO.getCreatedDate())
                .state(storageDTO.isState())
                .build();
    }

    public GenerateProductCodeStorageDTO map (GenerateProductCodeStorage storage){
        return GenerateProductCodeStorageDTO.builder()
                .id(storage.getId())
                .productCode(storage.getProductCode())
                .productName(storage.getProductName())
                .createdDate(storage.getCreatedDate())
                .state(storage.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeStorageDTO storageDTO){
        Optional<GenerateProductCodeStorage> optional = storageRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeStorage dbStorage = optional.get();

        dbStorage.setProductCode(storageDTO.getProductCode());
        dbStorage.setProductName(storageDTO.getProductName());
        dbStorage.setCreatedDate(LocalDate.now());
        dbStorage.setState(storageDTO.isState());

        storageRepository.save(dbStorage);
    }
}
