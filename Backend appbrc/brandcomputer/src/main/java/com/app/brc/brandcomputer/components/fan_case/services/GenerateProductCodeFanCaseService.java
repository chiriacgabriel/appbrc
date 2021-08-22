package com.app.brc.brandcomputer.components.fan_case.services;

import com.app.brc.brandcomputer.components.casing.dto.GenerateProductCodeCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.dto.GenerateProductCodeFanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.mapper.GenerateProductCodeFanCaseMapper;
import com.app.brc.brandcomputer.components.fan_case.model.GenerateProductCodeFanCase;
import com.app.brc.brandcomputer.components.fan_case.repository.GenerateProductCodeFanCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeFanCaseService {

    private GenerateProductCodeFanCaseRepository generateProductCodeFanCaseRepository;
    private GenerateProductCodeFanCaseMapper generateProductCodeFanCaseMapper;

    @Autowired

    public GenerateProductCodeFanCaseService(GenerateProductCodeFanCaseRepository generateProductCodeFanCaseRepository,
                                             GenerateProductCodeFanCaseMapper generateProductCodeFanCaseMapper) {
        this.generateProductCodeFanCaseRepository = generateProductCodeFanCaseRepository;
        this.generateProductCodeFanCaseMapper = generateProductCodeFanCaseMapper;
    }

    public List<GenerateProductCodeFanCaseDTO> getAllCodes() {
        return generateProductCodeFanCaseRepository.findAllByOrderByCreatedDateDesc()
                .stream().map(generateProductCodeFanCase -> generateProductCodeFanCaseMapper.map(generateProductCodeFanCase))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeFanCaseDTO> searchByProductCodeOrProductName(String querySearch) {
        return generateProductCodeFanCaseRepository.findAllByProductNameOrProductCode(querySearch).stream()
                .map(generateProductCodeFanCase -> generateProductCodeFanCaseMapper.map(generateProductCodeFanCase))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeFanCaseDTO generateProductCodeFanCaseDTO) {
        generateProductCodeFanCaseDTO.setState(true);
        generateProductCodeFanCaseDTO.setCreatedDate(LocalDate.now());
        generateProductCodeFanCaseRepository.save(generateProductCodeFanCaseMapper.map(generateProductCodeFanCaseDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeFanCaseDTO generateProductCodeFanCaseDTO) {
        generateProductCodeFanCaseMapper.set(id, generateProductCodeFanCaseDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeFanCaseRepository.deleteById(id);
    }

}
