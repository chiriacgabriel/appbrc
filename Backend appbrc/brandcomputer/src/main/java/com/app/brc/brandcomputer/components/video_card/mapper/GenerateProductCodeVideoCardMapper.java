package com.app.brc.brandcomputer.components.video_card.mapper;

import com.app.brc.brandcomputer.components.video_card.dto.GenerateProductCodeVideoCardDTO;
import com.app.brc.brandcomputer.components.video_card.model.GenerateProductCodeVideoCard;
import com.app.brc.brandcomputer.components.video_card.repository.GenerateProductCodeVideoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class GenerateProductCodeVideoCardMapper {

    private GenerateProductCodeVideoCardRepository generateProductCodeVideoCardRepository;

    @Autowired
    public GenerateProductCodeVideoCardMapper(GenerateProductCodeVideoCardRepository generateProductCodeVideoCardRepository) {
        this.generateProductCodeVideoCardRepository = generateProductCodeVideoCardRepository;
    }

    public GenerateProductCodeVideoCard map(GenerateProductCodeVideoCardDTO generateProductCodeVideoCardDTO) {

        return GenerateProductCodeVideoCard.builder()
                .productCode(generateProductCodeVideoCardDTO.getProductCode())
                .productName(generateProductCodeVideoCardDTO.getProductName())
                .createdDate(generateProductCodeVideoCardDTO.getCreatedDate())
                .state(generateProductCodeVideoCardDTO.isState())
                .build();
    }

    public GenerateProductCodeVideoCardDTO map(GenerateProductCodeVideoCard generateProductCodeVideoCard) {

        return GenerateProductCodeVideoCardDTO.builder()
                .id(generateProductCodeVideoCard.getId())
                .productCode(generateProductCodeVideoCard.getProductCode())
                .productName(generateProductCodeVideoCard.getProductName())
                .createdDate(generateProductCodeVideoCard.getCreatedDate())
                .state(generateProductCodeVideoCard.isState())
                .build();
    }

    public void set(int id, GenerateProductCodeVideoCardDTO generateProductCodeVideoCardDTO) {

        Optional<GenerateProductCodeVideoCard> optional = generateProductCodeVideoCardRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product code not found !");
        }

        GenerateProductCodeVideoCard dbProductCode = optional.get();
        dbProductCode.setProductCode(generateProductCodeVideoCardDTO.getProductCode());
        dbProductCode.setProductName(generateProductCodeVideoCardDTO.getProductName());
        dbProductCode.setCreatedDate(LocalDate.now());
        dbProductCode.setState(generateProductCodeVideoCardDTO.isState());

        generateProductCodeVideoCardRepository.save(dbProductCode);
    }
}
