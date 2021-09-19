package com.app.brc.brandcomputer.components.motherboard.mapper;

import com.app.brc.brandcomputer.components.motherboard.dto.MotherboardDTO;
import com.app.brc.brandcomputer.components.motherboard.model.Motherboard;
import com.app.brc.brandcomputer.components.motherboard.repository.MotherboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class MotherboardMapper {

    private MotherboardRepository motherboardRepository;

    @Autowired
    public MotherboardMapper(MotherboardRepository motherboardRepository) {
        this.motherboardRepository = motherboardRepository;
    }

    public Motherboard map(MotherboardDTO motherboardDTO){
        return Motherboard.builder()
                .generateProductCode(motherboardDTO.getGenerateProductCode())
                .serialNumber(motherboardDTO.getSerialNumber())
                .manufacturer(motherboardDTO.getManufacturer())
                .model(motherboardDTO.getModel())
                .formFactor(motherboardDTO.getFormFactor())
                .socket(motherboardDTO.getSocket())
                .numberOfSockets(motherboardDTO.getNumberOfSockets())
                .chipset(motherboardDTO.getChipset())
                .numberOfSlotMemoryRAM(motherboardDTO.getNumberOfSlotMemoryRAM())
                .maxMemoryRAM(motherboardDTO.getMaxMemoryRAM())
                .priceIn(motherboardDTO.getPriceIn())
                .productInformation(motherboardDTO.getProductInformation())
                .state(motherboardDTO.getState())
                .category(motherboardDTO.getCategory())
                .quantity(motherboardDTO.getQuantity())
                .unitOfMeasurement(motherboardDTO.getUnitOfMeasurement())
                .soldAt(motherboardDTO.getSoldAt())
                .soldBy(motherboardDTO.getSoldBy())
                .sold(motherboardDTO.isSold())
                .received(motherboardDTO.isReceived())
                .createdDate(motherboardDTO.getCreatedDate())
                .createdBy(motherboardDTO.getCreatedBy())
                .lastUpdated(motherboardDTO.getLastUpdated())
                .updatedBy(motherboardDTO.getUpdatedBy())
                .build();
    }

    public MotherboardDTO map(Motherboard motherboard){
        return MotherboardDTO.builder()
                .id(motherboard.getId())
                .generateProductCode(motherboard.getGenerateProductCode())
                .serialNumber(motherboard.getSerialNumber())
                .manufacturer(motherboard.getManufacturer())
                .model(motherboard.getModel())
                .formFactor(motherboard.getFormFactor())
                .socket(motherboard.getSocket())
                .numberOfSockets(motherboard.getNumberOfSockets())
                .chipset(motherboard.getChipset())
                .numberOfSlotMemoryRAM(motherboard.getNumberOfSlotMemoryRAM())
                .maxMemoryRAM(motherboard.getMaxMemoryRAM())
                .priceIn(motherboard.getPriceIn())
                .productInformation(motherboard.getProductInformation())
                .state(motherboard.getState())
                .category(motherboard.getCategory())
                .quantity(motherboard.getQuantity())
                .unitOfMeasurement(motherboard.getUnitOfMeasurement())
                .soldAt(motherboard.getSoldAt())
                .soldBy(motherboard.getSoldBy())
                .sold(motherboard.isSold())
                .received(motherboard.isReceived())
                .selected(false)
                .createdDate(motherboard.getCreatedDate())
                .createdBy(motherboard.getCreatedBy())
                .lastUpdated(motherboard.getLastUpdated())
                .updatedBy(motherboard.getUpdatedBy())
                .build();
    }

    public void set(MotherboardDTO motherboardDTO, int id){
        Optional<Motherboard> optionalMotherboard = motherboardRepository.findById(id);

        if (!optionalMotherboard.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Motherboard not found !");
        }

        Motherboard dbMotherboard = optionalMotherboard.get();

        dbMotherboard.setGenerateProductCode(motherboardDTO.getGenerateProductCode());
        dbMotherboard.setSerialNumber(motherboardDTO.getSerialNumber());
        dbMotherboard.setManufacturer(motherboardDTO.getManufacturer());
        dbMotherboard.setModel(motherboardDTO.getModel());
        dbMotherboard.setFormFactor(motherboardDTO.getFormFactor());
        dbMotherboard.setSocket(motherboardDTO.getSocket());
        dbMotherboard.setNumberOfSockets(motherboardDTO.getNumberOfSockets());
        dbMotherboard.setChipset(motherboardDTO.getChipset());
        dbMotherboard.setNumberOfSlotMemoryRAM(motherboardDTO.getNumberOfSlotMemoryRAM());
        dbMotherboard.setMaxMemoryRAM(motherboardDTO.getMaxMemoryRAM());
        dbMotherboard.setQuantity(motherboardDTO.getQuantity());
        dbMotherboard.setUnitOfMeasurement(motherboardDTO.getUnitOfMeasurement());
        dbMotherboard.setPriceIn(motherboardDTO.getPriceIn());
        dbMotherboard.setProductInformation(motherboardDTO.getProductInformation());
        dbMotherboard.setState(motherboardDTO.getState());
        dbMotherboard.setUpdatedBy(motherboardDTO.getUpdatedBy());

        motherboardRepository.save(dbMotherboard);
    }
}
