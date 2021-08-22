package com.app.brc.brandcomputer.components.sound_card.service;

import com.app.brc.brandcomputer.components.sound_card.dto.GenerateProductCodeSoundCardDTO;
import com.app.brc.brandcomputer.components.sound_card.mapper.GenerateProductCodeSoundCardMapper;
import com.app.brc.brandcomputer.components.sound_card.repository.GenerateProductCodeSoundCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeSoundCardService {

    private GenerateProductCodeSoundCardRepository generateProductCodeSoundCardRepository;
    private GenerateProductCodeSoundCardMapper generateProductCodeSoundCardMapper;

    @Autowired
    public GenerateProductCodeSoundCardService(GenerateProductCodeSoundCardRepository generateProductCodeSoundCardRepository,
                                               GenerateProductCodeSoundCardMapper generateProductCodeSoundCardMapper) {
        this.generateProductCodeSoundCardRepository = generateProductCodeSoundCardRepository;
        this.generateProductCodeSoundCardMapper = generateProductCodeSoundCardMapper;
    }

    public List<GenerateProductCodeSoundCardDTO> getAllCodes() {
        return generateProductCodeSoundCardRepository.findAllByOrderByCreatedDateDesc()
                .stream()
                .map(productCode -> generateProductCodeSoundCardMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public List<GenerateProductCodeSoundCardDTO> search(String querySearch) {
        return generateProductCodeSoundCardRepository.findAllByProductNameOrProductCode(querySearch)
                .stream()
                .map(productCode -> generateProductCodeSoundCardMapper.map(productCode))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeSoundCardDTO generateProductCodeSoundCardDTO) {
        generateProductCodeSoundCardDTO.setState(true);
        generateProductCodeSoundCardDTO.setCreatedDate(LocalDate.now());
        generateProductCodeSoundCardRepository.save(generateProductCodeSoundCardMapper.map(generateProductCodeSoundCardDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeSoundCardDTO generateProductCodeSoundCardDTO) {
        generateProductCodeSoundCardDTO.setCreatedDate(LocalDate.now());
        generateProductCodeSoundCardMapper.set(id, generateProductCodeSoundCardDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeSoundCardRepository.deleteById(id);
    }
}
