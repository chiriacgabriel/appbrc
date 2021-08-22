package com.app.brc.brandcomputer.components.memory_ram.service;

import com.app.brc.brandcomputer.components.memory_ram.dto.GenerateProductCodeMemoryRamDTO;
import com.app.brc.brandcomputer.components.memory_ram.mapper.GenerateProductCodeMemoryRamMapper;
import com.app.brc.brandcomputer.components.memory_ram.repository.GenerateProductCodeMemoryRamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeMemoryRamService {

    private GenerateProductCodeMemoryRamRepository generateProductCodeMemoryRamRepository;
    private GenerateProductCodeMemoryRamMapper generateProductCodeMemoryRamMapper;

    @Autowired
    public GenerateProductCodeMemoryRamService(GenerateProductCodeMemoryRamRepository generateProductCodeMemoryRamRepository,
                                               GenerateProductCodeMemoryRamMapper generateProductCodeMemoryRamMapper) {
        this.generateProductCodeMemoryRamRepository = generateProductCodeMemoryRamRepository;
        this.generateProductCodeMemoryRamMapper = generateProductCodeMemoryRamMapper;
    }


    public List<GenerateProductCodeMemoryRamDTO> getAllCodes() {
        return generateProductCodeMemoryRamRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(productCode -> generateProductCodeMemoryRamMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeMemoryRamDTO> search(String querySearch) {
        return generateProductCodeMemoryRamRepository.findAllByProductNameOrProductCode(querySearch)
                .stream()
                .map(productCode -> generateProductCodeMemoryRamMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeMemoryRamDTO generateProductCodeMemoryRamDTO) {
        generateProductCodeMemoryRamDTO.setState(true);
        generateProductCodeMemoryRamDTO.setCreatedDate(LocalDate.now());
        generateProductCodeMemoryRamRepository.save(generateProductCodeMemoryRamMapper.map(generateProductCodeMemoryRamDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeMemoryRamDTO generateProductCodeMemoryRamDTO) {
        generateProductCodeMemoryRamMapper.set(id, generateProductCodeMemoryRamDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeMemoryRamRepository.deleteById(id);
    }
}
