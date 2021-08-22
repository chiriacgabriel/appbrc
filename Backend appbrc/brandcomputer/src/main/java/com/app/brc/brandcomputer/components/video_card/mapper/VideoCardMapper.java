package com.app.brc.brandcomputer.components.video_card.mapper;

import com.app.brc.brandcomputer.components.video_card.dto.VideoCardDTO;
import com.app.brc.brandcomputer.components.video_card.model.VideoCard;
import com.app.brc.brandcomputer.components.video_card.repository.VideoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class VideoCardMapper {

    private VideoCardRepository videoCardRepository;

    @Autowired
    public VideoCardMapper(VideoCardRepository videoCardRepository) {
        this.videoCardRepository = videoCardRepository;
    }

    public VideoCard map(VideoCardDTO videoCardDTO) {

        return VideoCard.builder()
                .generateProductCodeVideoCard(videoCardDTO.getGenerateProductCode())
                .serialNumber(videoCardDTO.getSerialNumber())
                .manufacturer(videoCardDTO.getManufacturer())
                .model(videoCardDTO.getModel())
                .memory(videoCardDTO.getMemory())
                .profile(videoCardDTO.getProfile())
                .vga(videoCardDTO.isVga())
                .hdmi(videoCardDTO.isHdmi())
                .dvi(videoCardDTO.isDvi())
                .displayPort(videoCardDTO.isDisplayPort())
                .numberOfPortsVGA(videoCardDTO.getNumberOfPortsVGA())
                .numberOfPortsHDMI(videoCardDTO.getNumberOfPortsHDMI())
                .numberOfPortsDVI(videoCardDTO.getNumberOfPortsDVI())
                .numberOfPortsDisplayPort(videoCardDTO.getNumberOfPortsDisplayPort())
                .typeOfMemory(videoCardDTO.getTypeOfMemory())
                .numberOfBits(videoCardDTO.getNumberOfBits())
                .series(videoCardDTO.getSeries())
                .priceIn(videoCardDTO.getPriceIn())
                .productInformation(videoCardDTO.getProductInformation())
                .state(videoCardDTO.getState())
                .category(videoCardDTO.getCategory())
                .quantity(videoCardDTO.getQuantity())
                .unitOfMeasurement(videoCardDTO.getUnitOfMeasurement())
                .soldAt(videoCardDTO.getSoldAt())
                .soldBy(videoCardDTO.getSoldBy())
                .sold(videoCardDTO.isSold())
                .received(videoCardDTO.isReceived())
                .createdDate(videoCardDTO.getCreatedDate())
                .createdBy(videoCardDTO.getCreatedBy())
                .lastUpdated(videoCardDTO.getLastUpdated())
                .updatedBy(videoCardDTO.getUpdatedBy())
                .build();
    }

    public VideoCardDTO map(VideoCard videoCard) {
        return VideoCardDTO.builder()
                .id(videoCard.getId())
                .generateProductCode(videoCard.getGenerateProductCodeVideoCard())
                .serialNumber(videoCard.getSerialNumber())
                .manufacturer(videoCard.getManufacturer())
                .model(videoCard.getModel())
                .memory(videoCard.getMemory())
                .profile(videoCard.getProfile())
                .vga(videoCard.isVga())
                .hdmi(videoCard.isHdmi())
                .dvi(videoCard.isDvi())
                .displayPort(videoCard.isDisplayPort())
                .numberOfPortsVGA(videoCard.getNumberOfPortsVGA())
                .numberOfPortsHDMI(videoCard.getNumberOfPortsHDMI())
                .numberOfPortsDVI(videoCard.getNumberOfPortsDVI())
                .numberOfPortsDisplayPort(videoCard.getNumberOfPortsDisplayPort())
                .typeOfMemory(videoCard.getTypeOfMemory())
                .numberOfBits(videoCard.getNumberOfBits())
                .series(videoCard.getSeries())
                .priceIn(videoCard.getPriceIn())
                .productInformation(videoCard.getProductInformation())
                .state(videoCard.getState())
                .category(videoCard.getCategory())
                .selected(false)
                .quantity(videoCard.getQuantity())
                .unitOfMeasurement(videoCard.getUnitOfMeasurement())
                .soldAt(videoCard.getSoldAt())
                .soldBy(videoCard.getSoldBy())
                .sold(videoCard.isSold())
                .createdDate(videoCard.getCreatedDate())
                .createdBy(videoCard.getCreatedBy())
                .lastUpdated(videoCard.getLastUpdated())
                .updatedBy(videoCard.getUpdatedBy())
                .build();
    }

    public void set(int id, VideoCardDTO videoCardDTO) {
        Optional<VideoCard> optional = videoCardRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Video Card not found !");
        }

        VideoCard dbVideoCard = optional.get();

        dbVideoCard.setGenerateProductCodeVideoCard(videoCardDTO.getGenerateProductCode());
        dbVideoCard.setSerialNumber(videoCardDTO.getSerialNumber());
        dbVideoCard.setManufacturer(videoCardDTO.getManufacturer());
        dbVideoCard.setModel(videoCardDTO.getModel());
        dbVideoCard.setQuantity(videoCardDTO.getQuantity());
        dbVideoCard.setUnitOfMeasurement(videoCardDTO.getUnitOfMeasurement());

        dbVideoCard.setMemory(videoCardDTO.getMemory());
        dbVideoCard.setProfile(videoCardDTO.getProfile());

        dbVideoCard.setVga(videoCardDTO.isVga());
        dbVideoCard.setHdmi(videoCardDTO.isHdmi());
        dbVideoCard.setDvi(videoCardDTO.isDvi());
        dbVideoCard.setDisplayPort(videoCardDTO.isDisplayPort());
        dbVideoCard.setNumberOfPortsVGA(videoCardDTO.getNumberOfPortsVGA());
        dbVideoCard.setNumberOfPortsHDMI(videoCardDTO.getNumberOfPortsHDMI());
        dbVideoCard.setNumberOfPortsDVI(videoCardDTO.getNumberOfPortsDVI());
        dbVideoCard.setNumberOfPortsDisplayPort(videoCardDTO.getNumberOfPortsDisplayPort());

        dbVideoCard.setTypeOfMemory(videoCardDTO.getTypeOfMemory());
        dbVideoCard.setNumberOfBits(videoCardDTO.getNumberOfBits());
        dbVideoCard.setSeries(videoCardDTO.getSeries());

        dbVideoCard.setPriceIn(videoCardDTO.getPriceIn());
        dbVideoCard.setProductInformation(videoCardDTO.getProductInformation());
        dbVideoCard.setState(videoCardDTO.getState());

        dbVideoCard.setUpdatedBy(videoCardDTO.getUpdatedBy());

        videoCardRepository.save(dbVideoCard);

    }
}
