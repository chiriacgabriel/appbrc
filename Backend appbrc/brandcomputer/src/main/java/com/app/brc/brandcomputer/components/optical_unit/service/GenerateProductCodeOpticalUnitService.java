package com.app.brc.brandcomputer.components.optical_unit.service;

import com.app.brc.brandcomputer.components.optical_unit.dto.GenerateProductCodeOpticalUnitDTO;
import com.app.brc.brandcomputer.components.optical_unit.mapper.GenerateProductCodeOpticalUnitMapper;
import com.app.brc.brandcomputer.components.optical_unit.repository.GenerateProductCodeOpticalUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeOpticalUnitService {

    private GenerateProductCodeOpticalUnitRepository generateProductCodeOpticalUnitRepository;
    private GenerateProductCodeOpticalUnitMapper generateProductCodeOpticalUnitMapper;

    @Autowired
    public GenerateProductCodeOpticalUnitService(GenerateProductCodeOpticalUnitRepository generateProductCodeOpticalUnitRepository, GenerateProductCodeOpticalUnitMapper generateProductCodeOpticalUnitMapper) {
        this.generateProductCodeOpticalUnitRepository = generateProductCodeOpticalUnitRepository;
        this.generateProductCodeOpticalUnitMapper = generateProductCodeOpticalUnitMapper;
    }

    public List<GenerateProductCodeOpticalUnitDTO> getAllCodes() {
        return generateProductCodeOpticalUnitRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(generateProductCodeMotherboard -> generateProductCodeOpticalUnitMapper.map(generateProductCodeMotherboard))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeOpticalUnitDTO> search(String queryString) {
        return generateProductCodeOpticalUnitRepository.findAllByProductNameOrProductCode(queryString)
                .stream()
                .map(generateProductCodeMotherboard -> generateProductCodeOpticalUnitMapper.map(generateProductCodeMotherboard))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeOpticalUnitDTO generateProductCodeOpticalUnitDTO) {
        generateProductCodeOpticalUnitDTO.setState(true);
        generateProductCodeOpticalUnitDTO.setCreatedDate(LocalDate.now());
        generateProductCodeOpticalUnitRepository.save(generateProductCodeOpticalUnitMapper.map(generateProductCodeOpticalUnitDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeOpticalUnitDTO generateProductCodeOpticalUnitDTO) {
        generateProductCodeOpticalUnitMapper.set(id, generateProductCodeOpticalUnitDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeOpticalUnitRepository.deleteById(id);
    }
}
