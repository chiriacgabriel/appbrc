package com.app.brc.brandcomputer.components.memory_ram.mapper;

import com.app.brc.brandcomputer.components.memory_ram.dto.MemoryRamDTO;
import com.app.brc.brandcomputer.components.memory_ram.model.MemoryRam;
import com.app.brc.brandcomputer.components.memory_ram.repository.MemoryRamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class MemoryRamMapper {

    private MemoryRamRepository memoryRepository;

    @Autowired
    public MemoryRamMapper(MemoryRamRepository memoryRepository) {
        this.memoryRepository = memoryRepository;
    }

    public MemoryRam map(MemoryRamDTO memoryRamDTO){
        return MemoryRam.builder()
                .generateProductCodeMemoryRam(memoryRamDTO.getGenerateProductCode())
                .serialNumber(memoryRamDTO.getSerialNumber())
                .manufacturer(memoryRamDTO.getManufacturer())
                .module(memoryRamDTO.getModule())
                .ramType(memoryRamDTO.getRamType())
                .frequency(memoryRamDTO.getFrequency())
                .capacity(memoryRamDTO.getCapacity())
                .priceIn(memoryRamDTO.getPriceIn())
                .productInformation(memoryRamDTO.getProductInformation())
                .state(memoryRamDTO.getState())
                .category(memoryRamDTO.getCategory())
                .quantity(memoryRamDTO.getQuantity())
                .unitOfMeasurement(memoryRamDTO.getUnitOfMeasurement())
                .soldAt(memoryRamDTO.getSoldAt())
                .soldBy(memoryRamDTO.getSoldBy())
                .sold(memoryRamDTO.isSold())
                .received(memoryRamDTO.isReceived())
                .createdDate(memoryRamDTO.getCreatedDate())
                .createdBy(memoryRamDTO.getCreatedBy())
                .lastUpdated(memoryRamDTO.getLastUpdated())
                .updatedBy(memoryRamDTO.getUpdatedBy())
                .build();
    }

    public MemoryRamDTO map(MemoryRam memoryRam){
        return MemoryRamDTO.builder()
                .id(memoryRam.getId())
                .generateProductCode(memoryRam.getGenerateProductCodeMemoryRam())
                .serialNumber(memoryRam.getSerialNumber())
                .manufacturer(memoryRam.getManufacturer())
                .module(memoryRam.getModule())
                .ramType(memoryRam.getRamType())
                .frequency(memoryRam.getFrequency())
                .capacity(memoryRam.getCapacity())
                .priceIn(memoryRam.getPriceIn())
                .productInformation(memoryRam.getProductInformation())
                .state(memoryRam.getState())
                .category(memoryRam.getCategory())
                .quantity(memoryRam.getQuantity())
                .unitOfMeasurement(memoryRam.getUnitOfMeasurement())
                .soldAt(memoryRam.getSoldAt())
                .soldBy(memoryRam.getSoldBy())
                .sold(memoryRam.isSold())
                .received(memoryRam.isReceived())
                .selected(false)
                .createdDate(memoryRam.getCreatedDate())
                .createdBy(memoryRam.getCreatedBy())
                .lastUpdated(memoryRam.getLastUpdated())
                .updatedBy(memoryRam.getUpdatedBy())
                .build();
    }

    public void set(MemoryRamDTO memoryRamDTO, int id){
        Optional<MemoryRam> optional = memoryRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Memory RAM not found !");
        }

        MemoryRam dbMemoryRam = optional.get();

        dbMemoryRam.setGenerateProductCodeMemoryRam(memoryRamDTO.getGenerateProductCode());
        dbMemoryRam.setSerialNumber(memoryRamDTO.getSerialNumber());
        dbMemoryRam.setManufacturer(memoryRamDTO.getManufacturer());
        dbMemoryRam.setModule(memoryRamDTO.getModule());
        dbMemoryRam.setRamType(memoryRamDTO.getRamType());
        dbMemoryRam.setFrequency(memoryRamDTO.getRamType());
        dbMemoryRam.setFrequency(memoryRamDTO.getFrequency());
        dbMemoryRam.setCapacity(memoryRamDTO.getCapacity());
        dbMemoryRam.setQuantity(memoryRamDTO.getQuantity());
        dbMemoryRam.setUnitOfMeasurement(memoryRamDTO.getUnitOfMeasurement());
        dbMemoryRam.setPriceIn(memoryRamDTO.getPriceIn());
        dbMemoryRam.setProductInformation(memoryRamDTO.getProductInformation());
        dbMemoryRam.setState(memoryRamDTO.getState());
        dbMemoryRam.setUpdatedBy(memoryRamDTO.getUpdatedBy());
        dbMemoryRam.setReceived(memoryRamDTO.isReceived());

        memoryRepository.save(dbMemoryRam);
    }
}
