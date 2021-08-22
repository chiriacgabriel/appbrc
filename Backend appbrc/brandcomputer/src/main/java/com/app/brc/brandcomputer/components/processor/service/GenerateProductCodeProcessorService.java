package com.app.brc.brandcomputer.components.processor.service;

import com.app.brc.brandcomputer.components.processor.dto.GenerateProductCodeProcessorDTO;
import com.app.brc.brandcomputer.components.processor.mapper.GenerateProductCodeProcessorMapper;
import com.app.brc.brandcomputer.components.processor.repository.GenerateProductCodeProcessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeProcessorService {

    private GenerateProductCodeProcessorRepository generateProductCodeProcessorRepository;
    private GenerateProductCodeProcessorMapper generateProductCodeProcessorMapper;

    @Autowired
    public GenerateProductCodeProcessorService(GenerateProductCodeProcessorRepository generateProductCodeProcessorRepository, GenerateProductCodeProcessorMapper generateProductCodeProcessorMapper) {
        this.generateProductCodeProcessorRepository = generateProductCodeProcessorRepository;
        this.generateProductCodeProcessorMapper = generateProductCodeProcessorMapper;
    }

    public List<GenerateProductCodeProcessorDTO> getAllCodes() {
        return generateProductCodeProcessorRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(productCode -> generateProductCodeProcessorMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeProcessorDTO> search(String querySearch) {
        return generateProductCodeProcessorRepository.findAllByProductNameOrProductCode(querySearch)
                .stream()
                .map(productCode -> generateProductCodeProcessorMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeProcessorDTO generateProductCodeProcessorDTO) {
        generateProductCodeProcessorDTO.setState(true);
        generateProductCodeProcessorDTO.setCreatedDate(LocalDate.now());
        generateProductCodeProcessorRepository.save(generateProductCodeProcessorMapper.map(generateProductCodeProcessorDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeProcessorDTO generateProductCodeProcessorDTO) {
        generateProductCodeProcessorMapper.set(id, generateProductCodeProcessorDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeProcessorRepository.deleteById(id);
    }
}
