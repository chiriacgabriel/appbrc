package com.app.brc.brandcomputer.components.casing.services;

import com.app.brc.brandcomputer.components.casing.dto.GenerateProductCodeCaseDTO;
import com.app.brc.brandcomputer.components.casing.mapper.GenerateProductCodeCaseMapper;
import com.app.brc.brandcomputer.components.casing.repository.GenerateProductCodeCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeCaseService {

    private GenerateProductCodeCaseRepository generateProductCodeCaseRepository;
    private GenerateProductCodeCaseMapper generateProductCodeCaseMapper;

    @Autowired
    public GenerateProductCodeCaseService(GenerateProductCodeCaseRepository generateProductCodeCaseRepository,
                                          GenerateProductCodeCaseMapper generateProductCodeCaseMapper) {
        this.generateProductCodeCaseRepository = generateProductCodeCaseRepository;
        this.generateProductCodeCaseMapper = generateProductCodeCaseMapper;
    }

    public List<GenerateProductCodeCaseDTO> getAllCodes() {
        return generateProductCodeCaseRepository.findAllByOrderByCreatedDateDesc()
                .stream().map(generateProductCodeCase -> generateProductCodeCaseMapper.map(generateProductCodeCase))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeCaseDTO> searchByProductCodeOrProductName(String querySearch) {
        return generateProductCodeCaseRepository.findAllByProductNameOrProductCode(querySearch).stream()
                .map(generateProductCodeCase -> generateProductCodeCaseMapper.map(generateProductCodeCase))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeCaseDTO generateProductCodeCaseDTO) {
        generateProductCodeCaseDTO.setState(true);
        generateProductCodeCaseDTO.setCreatedDate(LocalDate.now());
        generateProductCodeCaseRepository.save(generateProductCodeCaseMapper.map(generateProductCodeCaseDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeCaseDTO generateProductCodeCaseDTO) {
        generateProductCodeCaseMapper.set(id, generateProductCodeCaseDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeCaseRepository.deleteById(id);
    }
}
