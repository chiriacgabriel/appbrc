package com.app.brc.brandcomputer.computers.services;

import com.app.brc.brandcomputer.computers.dto.GenerateProductCodeComputerDTO;
import com.app.brc.brandcomputer.computers.mapper.GenerateProductCodeComputerMapper;
import com.app.brc.brandcomputer.computers.repository.GenerateProductCodeComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeComputerService {

    private GenerateProductCodeComputerRepository generateProductCodeComputerRepository;
    private GenerateProductCodeComputerMapper generateProductCodeComputerMapper;

    @Autowired
    public GenerateProductCodeComputerService(GenerateProductCodeComputerRepository generateProductCodeComputerRepository,
                                              GenerateProductCodeComputerMapper generateProductCodeComputerMapper) {
        this.generateProductCodeComputerRepository = generateProductCodeComputerRepository;
        this.generateProductCodeComputerMapper = generateProductCodeComputerMapper;
    }

    public List<GenerateProductCodeComputerDTO> getAllCodes() {
        return generateProductCodeComputerRepository.findAll()
                .stream().map(generateProductCodeComputer -> generateProductCodeComputerMapper.map(generateProductCodeComputer))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeComputerDTO> searchByProductCodeOrProductName(String querySearch) {

        return generateProductCodeComputerRepository.findAllByProductNameOrProductCode(querySearch).stream()
                .map(generateProductCodeComputer -> generateProductCodeComputerMapper.map(generateProductCodeComputer))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeComputerDTO generateProductCodeComputerDTO) {

        generateProductCodeComputerDTO.setState(true);
        generateProductCodeComputerDTO.setCreatedDate(LocalDate.now());
        generateProductCodeComputerRepository.save(generateProductCodeComputerMapper.map(generateProductCodeComputerDTO));
    }

    public void deleteProductCode(int id) {
        generateProductCodeComputerRepository.deleteById(id);
    }

    public void updateProductCode(int id, GenerateProductCodeComputerDTO generateProductCodeComputerDTO) {
        generateProductCodeComputerMapper.set(id, generateProductCodeComputerDTO);
    }
}
