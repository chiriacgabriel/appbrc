package com.app.brc.brandcomputer.components.storage.service;

import com.app.brc.brandcomputer.components.storage.dto.GenerateProductCodeStorageDTO;
import com.app.brc.brandcomputer.components.storage.mapper.GenerateProductCodeStorageMapper;
import com.app.brc.brandcomputer.components.storage.repository.GenerateProductCodeStorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeStorageService {

    private GenerateProductCodeStorageRepository generateProductCodeStorageRepository;
    private GenerateProductCodeStorageMapper generateProductCodeStorageMapper;

    @Autowired
    public GenerateProductCodeStorageService(GenerateProductCodeStorageRepository generateProductCodeStorageRepository, GenerateProductCodeStorageMapper generateProductCodeStorageMapper) {
        this.generateProductCodeStorageRepository = generateProductCodeStorageRepository;
        this.generateProductCodeStorageMapper = generateProductCodeStorageMapper;
    }

    public List<GenerateProductCodeStorageDTO> getAllCodes() {
        return generateProductCodeStorageRepository.findAllByOrderByCreatedDateDesc()
                .stream().map(generateProductCodeStorage -> generateProductCodeStorageMapper.map(generateProductCodeStorage))
                .collect(Collectors.toList());
    }
    public List<GenerateProductCodeStorageDTO> searchByProductCodeOrProductName(String querySearch) {
        return generateProductCodeStorageRepository.findAllByProductNameOrProductCode(querySearch)
                .stream().map(generateProductCodeStorage -> generateProductCodeStorageMapper.map(generateProductCodeStorage))
                .collect(Collectors.toList());
    }
    public void addProductCode(GenerateProductCodeStorageDTO generateProductCodeStorageDTO) {
        generateProductCodeStorageDTO.setState(true);
        generateProductCodeStorageDTO.setCreatedDate(LocalDate.now());
        generateProductCodeStorageRepository.save(generateProductCodeStorageMapper.map(generateProductCodeStorageDTO));
    }
    public void updateProductCode(int id, GenerateProductCodeStorageDTO generateProductCodeStorageDTO) {
        generateProductCodeStorageMapper.set(id, generateProductCodeStorageDTO);
    }
    public void deleteProductCode(int id) {
        generateProductCodeStorageRepository.deleteById(id);
    }
}
