package com.app.brc.brandcomputer.components.motherboard.services;

import com.app.brc.brandcomputer.components.motherboard.dto.GenerateProductCodeMotherboardDTO;
import com.app.brc.brandcomputer.components.motherboard.mapper.GenerateProductCodeMotherboardMapper;
import com.app.brc.brandcomputer.components.motherboard.repository.GenerateProductCodeMotherboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeMotherboardService {

    private GenerateProductCodeMotherboardRepository generateProductCodeMotherboardRepository;
    private GenerateProductCodeMotherboardMapper generateProductCodeMotherboardMapper;

    @Autowired
    public GenerateProductCodeMotherboardService(GenerateProductCodeMotherboardRepository generateProductCodeMotherboardRepository,
                                                 GenerateProductCodeMotherboardMapper generateProductCodeMotherboardMapper) {
        this.generateProductCodeMotherboardRepository = generateProductCodeMotherboardRepository;
        this.generateProductCodeMotherboardMapper = generateProductCodeMotherboardMapper;
    }


    public List<GenerateProductCodeMotherboardDTO> getAllCodes() {
        return generateProductCodeMotherboardRepository.findAllByOrderByCreatedDateDesc()
                .stream().map(generateProductCodeMotherboard -> generateProductCodeMotherboardMapper.map(generateProductCodeMotherboard))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeMotherboardDTO> searchByProductCodeOrProductName(String querySearch) {
        return generateProductCodeMotherboardRepository.findAllByProductNameOrProductCode(querySearch).stream()
                .map(generateProductCodeMotherboard -> generateProductCodeMotherboardMapper.map(generateProductCodeMotherboard))
                .collect(Collectors.toList());
    }


    public void addProductCode(GenerateProductCodeMotherboardDTO generateProductCodeMotherboardDTO) {
        generateProductCodeMotherboardDTO.setState(true);
        generateProductCodeMotherboardDTO.setCreatedDate(LocalDate.now());
        generateProductCodeMotherboardRepository.save(generateProductCodeMotherboardMapper.map(generateProductCodeMotherboardDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeMotherboardDTO generateProductCodeMotherboardDTO) {

        generateProductCodeMotherboardMapper.set(id, generateProductCodeMotherboardDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeMotherboardRepository.deleteById(id);
    }

}
