package com.app.brc.brandcomputer.components.video_card.services;

import com.app.brc.brandcomputer.components.video_card.dto.GenerateProductCodeVideoCardDTO;
import com.app.brc.brandcomputer.components.video_card.mapper.GenerateProductCodeVideoCardMapper;
import com.app.brc.brandcomputer.components.video_card.repository.GenerateProductCodeVideoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenerateProductCodeVideoCardService {

    private GenerateProductCodeVideoCardRepository generateProductCodeVideoCardRepository;
    private GenerateProductCodeVideoCardMapper generateProductCodeVideoCardMapper;

    @Autowired
    public GenerateProductCodeVideoCardService(GenerateProductCodeVideoCardRepository generateProductCodeVideoCardRepository,
                                               GenerateProductCodeVideoCardMapper generateProductCodeVideoCardMapper) {
        this.generateProductCodeVideoCardRepository = generateProductCodeVideoCardRepository;
        this.generateProductCodeVideoCardMapper = generateProductCodeVideoCardMapper;
    }

    public List<GenerateProductCodeVideoCardDTO> getAllCodes() {
        return generateProductCodeVideoCardRepository.findAllByOrderByCreatedDateDesc()
                .stream().map(generateProductCodeVideoCard -> generateProductCodeVideoCardMapper.map(generateProductCodeVideoCard))
                .collect(Collectors.toList());
    }


    public List<GenerateProductCodeVideoCardDTO> searchByProductCodeOrProductName(String querySearch) {
        return generateProductCodeVideoCardRepository.findAllByProductNameOrProductCode(querySearch)
                .stream().map(generateProductCodeVideoCard -> generateProductCodeVideoCardMapper.map(generateProductCodeVideoCard))
                .collect(Collectors.toList());
    }

    public void addProductCode(GenerateProductCodeVideoCardDTO generateProductCodeVideoCardDTO) {
        generateProductCodeVideoCardDTO.setState(true);
        generateProductCodeVideoCardDTO.setCreatedDate(LocalDate.now());
        generateProductCodeVideoCardRepository.save(generateProductCodeVideoCardMapper.map(generateProductCodeVideoCardDTO));
    }

    public void updateProductCode(int id, GenerateProductCodeVideoCardDTO generateProductCodeVideoCardDTO) {
        generateProductCodeVideoCardMapper.set(id, generateProductCodeVideoCardDTO);
    }

    public void deleteProductCode(int id) {
        generateProductCodeVideoCardRepository.deleteById(id);
    }
}
