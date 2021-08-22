package com.app.brc.brandcomputer.components.powersource.services;

import com.app.brc.brandcomputer.components.powersource.dto.GenerateProductCodePowerSourceDTO;
import com.app.brc.brandcomputer.components.powersource.mapper.GenerateProductCodePowerSourceMapper;
import com.app.brc.brandcomputer.components.powersource.model.GenerateProductCodePowerSource;
import com.app.brc.brandcomputer.components.powersource.repository.GenerateProductCodePowerSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodePowerSourceService {

    private GenerateProductCodePowerSourceMapper generateProductCodePowerSourceMapper;
    private GenerateProductCodePowerSourceRepository generateProductCodePowerSourceRepository;

    @Autowired
    public GenerateProductCodePowerSourceService(GenerateProductCodePowerSourceMapper generateProductCodePowerSourceMapper,
                                                 GenerateProductCodePowerSourceRepository generateProductCodePowerSourceRepository) {
        this.generateProductCodePowerSourceMapper = generateProductCodePowerSourceMapper;
        this.generateProductCodePowerSourceRepository = generateProductCodePowerSourceRepository;
    }


    public List<GenerateProductCodePowerSourceDTO> getAllCodes() {

        return generateProductCodePowerSourceRepository.findAllByOrderByCreatedDateDesc().stream()
                .map(generateProductCodePowerSource -> generateProductCodePowerSourceMapper.map(generateProductCodePowerSource))
                .collect(Collectors.toList());
    }


    public List<GenerateProductCodePowerSourceDTO> searchByProductCodeOrProductName(String querySearch) {

        return generateProductCodePowerSourceRepository.findAllByProductNameOrProductCode(querySearch).stream()
                .map(generateProductCodePowerSource -> generateProductCodePowerSourceMapper.map(generateProductCodePowerSource))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodePowerSourceDTO generateProductCodePowerSourceDTO) {
        generateProductCodePowerSourceDTO.setState(true);
        generateProductCodePowerSourceDTO.setCreatedDate(LocalDate.now());
        generateProductCodePowerSourceRepository.save(generateProductCodePowerSourceMapper.map(generateProductCodePowerSourceDTO));
    }

    public void updateProductCode(int id, GenerateProductCodePowerSourceDTO generateProductCodePowerSourceDTO) {
        generateProductCodePowerSourceMapper.set(id, generateProductCodePowerSourceDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodePowerSourceRepository.deleteById(id);
    }



}
