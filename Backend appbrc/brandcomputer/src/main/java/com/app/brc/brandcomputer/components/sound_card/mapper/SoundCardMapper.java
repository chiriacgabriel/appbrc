package com.app.brc.brandcomputer.components.sound_card.mapper;

import com.app.brc.brandcomputer.components.sound_card.dto.SoundCardDTO;
import com.app.brc.brandcomputer.components.sound_card.model.SoundCard;
import com.app.brc.brandcomputer.components.sound_card.repository.SoundCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class SoundCardMapper {

    private SoundCardRepository soundCardRepository;

    @Autowired
    public SoundCardMapper(SoundCardRepository soundCardRepository) {
        this.soundCardRepository = soundCardRepository;
    }

    public SoundCard map(SoundCardDTO soundCardDTO) {
        return SoundCard.builder()
                .generateProductCode(soundCardDTO.getGenerateProductCode())
                .serialNumber(soundCardDTO.getSerialNumber())
                .manufacturer(soundCardDTO.getManufacturer())
                .model(soundCardDTO.getModel())
                .priceIn(soundCardDTO.getPriceIn())
                .productInformation(soundCardDTO.getProductInformation())
                .state(soundCardDTO.getState())
                .category(soundCardDTO.getCategory())
                .quantity(soundCardDTO.getQuantity())
                .unitOfMeasurement(soundCardDTO.getUnitOfMeasurement())
                .soldAt(soundCardDTO.getSoldAt())
                .soldBy(soundCardDTO.getSoldBy())
                .sold(soundCardDTO.isSold())
                .received(soundCardDTO.isReceived())
                .createdDate(soundCardDTO.getCreatedDate())
                .createdBy(soundCardDTO.getCreatedBy())
                .lastUpdated(soundCardDTO.getLastUpdated())
                .updatedBy(soundCardDTO.getUpdatedBy())
                .build();
    }

    public SoundCardDTO map(SoundCard soundCard){
        return SoundCardDTO.builder()
                .id(soundCard.getId())
                .generateProductCode(soundCard.getGenerateProductCode())
                .serialNumber(soundCard.getSerialNumber())
                .manufacturer(soundCard.getManufacturer())
                .model(soundCard.getModel())
                .priceIn(soundCard.getPriceIn())
                .productInformation(soundCard.getProductInformation())
                .state(soundCard.getState())
                .category(soundCard.getCategory())
                .quantity(soundCard.getQuantity())
                .unitOfMeasurement(soundCard.getUnitOfMeasurement())
                .soldAt(soundCard.getSoldAt())
                .soldBy(soundCard.getSoldBy())
                .sold(soundCard.isSold())
                .received(soundCard.isReceived())
                .selected(false)
                .createdDate(soundCard.getCreatedDate())
                .createdBy(soundCard.getCreatedBy())
                .lastUpdated(soundCard.getLastUpdated())
                .updatedBy(soundCard.getUpdatedBy())
                .build();
    }

    public void set(SoundCardDTO soundCardDTO, int id){
        Optional<SoundCard> optional = soundCardRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sound card not found !");
        }

        SoundCard dbSoundCard = optional.get();

        dbSoundCard.setGenerateProductCode(soundCardDTO.getGenerateProductCode());
        dbSoundCard.setSerialNumber(soundCardDTO.getSerialNumber());
        dbSoundCard.setManufacturer(soundCardDTO.getManufacturer());
        dbSoundCard.setModel(soundCardDTO.getModel());
        dbSoundCard.setPriceIn(soundCardDTO.getPriceIn());
        dbSoundCard.setProductInformation(soundCardDTO.getProductInformation());
        dbSoundCard.setState(soundCardDTO.getState());
        dbSoundCard.setQuantity(soundCardDTO.getQuantity());
        dbSoundCard.setUnitOfMeasurement(soundCardDTO.getUnitOfMeasurement());

        dbSoundCard.setUpdatedBy(soundCardDTO.getUpdatedBy());
        dbSoundCard.setReceived(soundCardDTO.isReceived());

        soundCardRepository.save(dbSoundCard);
    }
}
