package com.app.brc.brandcomputer.components.sound_card.mapper;

import com.app.brc.brandcomputer.components.sound_card.dto.GenerateProductCodeSoundCardDTO;
import com.app.brc.brandcomputer.components.sound_card.model.GenerateProductCodeSoundCard;
import com.app.brc.brandcomputer.components.sound_card.repository.GenerateProductCodeSoundCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeSoundCardMapper {

    private GenerateProductCodeSoundCardRepository generateProductCodeSoundCardRepository;

    @Autowired
    public GenerateProductCodeSoundCardMapper(GenerateProductCodeSoundCardRepository generateProductCodeSoundCardRepository) {
        this.generateProductCodeSoundCardRepository = generateProductCodeSoundCardRepository;
    }

    public GenerateProductCodeSoundCard map(GenerateProductCodeSoundCardDTO productCodeSoundCardDTO){
        return GenerateProductCodeSoundCard.builder()
                .productCode(productCodeSoundCardDTO.getProductCode())
                .productName(productCodeSoundCardDTO.getProductName())
                .createdDate(productCodeSoundCardDTO.getCreatedDate())
                .state(productCodeSoundCardDTO.isState())
                .build();
    }

    public GenerateProductCodeSoundCardDTO map(GenerateProductCodeSoundCard productCodeSoundCard){
        return GenerateProductCodeSoundCardDTO.builder()
                .id(productCodeSoundCard.getId())
                .productCode(productCodeSoundCard.getProductCode())
                .productName(productCodeSoundCard.getProductName())
                .createdDate(productCodeSoundCard.getCreatedDate())
                .state(productCodeSoundCard.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeSoundCardDTO productCodeSoundCardDTO){
        Optional<GenerateProductCodeSoundCard> optional = generateProductCodeSoundCardRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeSoundCard dbProductCode = optional.get();

        dbProductCode.setProductCode(productCodeSoundCardDTO.getProductCode());
        dbProductCode.setProductName(productCodeSoundCardDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(productCodeSoundCardDTO.isState());

        generateProductCodeSoundCardRepository.save(dbProductCode);
    }
}
