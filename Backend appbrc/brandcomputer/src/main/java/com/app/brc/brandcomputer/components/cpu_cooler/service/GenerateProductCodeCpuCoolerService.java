package com.app.brc.brandcomputer.components.cpu_cooler.service;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.GenerateProductCodeCpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.mapper.GenerateProductCodeCpuCoolerMapper;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.GenerateProductCodeCpuCoolerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeCpuCoolerService {

    private GenerateProductCodeCpuCoolerRepository generateProductCodeCpuCoolerRepository;
    private GenerateProductCodeCpuCoolerMapper generateProductCodeCpuCoolerMapper;

    @Autowired
    public GenerateProductCodeCpuCoolerService(GenerateProductCodeCpuCoolerRepository generateProductCodeCpuCoolerRepository,
                                               GenerateProductCodeCpuCoolerMapper generateProductCodeCpuCoolerMapper) {
        this.generateProductCodeCpuCoolerRepository = generateProductCodeCpuCoolerRepository;
        this.generateProductCodeCpuCoolerMapper = generateProductCodeCpuCoolerMapper;
    }

    public List<GenerateProductCodeCpuCoolerDTO> getAllCodes() {
        return generateProductCodeCpuCoolerRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(productCode -> generateProductCodeCpuCoolerMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeCpuCoolerDTO> search(String querySearch) {
        return generateProductCodeCpuCoolerRepository.findAllByProductNameOrProductCode(querySearch)
                .stream()
                .map(productCode -> generateProductCodeCpuCoolerMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeCpuCoolerDTO generateProductCodeCpuCoolerDTO) {
        generateProductCodeCpuCoolerDTO.setState(true);
        generateProductCodeCpuCoolerDTO.setCreatedDate(LocalDate.now());
        generateProductCodeCpuCoolerRepository.save(generateProductCodeCpuCoolerMapper.map(generateProductCodeCpuCoolerDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeCpuCoolerDTO productCodeCpuCoolerDTO) {
        generateProductCodeCpuCoolerMapper.set(id, productCodeCpuCoolerDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeCpuCoolerRepository.deleteById(id);
    }
}
