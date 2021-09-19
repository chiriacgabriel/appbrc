package com.app.brc.brandcomputer.components.powersource.mapper;

import com.app.brc.brandcomputer.components.powersource.dto.PowerSourceDTO;
import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import com.app.brc.brandcomputer.components.powersource.repository.PowerSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class PowerSourceMapper {

    private PowerSourceRepository powerSourceRepository;

    @Autowired
    public PowerSourceMapper(PowerSourceRepository powerSourceRepository) {
        this.powerSourceRepository = powerSourceRepository;
    }

    public PowerSource map(PowerSourceDTO powerSourceDTO){
        return PowerSource.builder()
                .generateProductCode(powerSourceDTO.getGenerateProductCode())
                .serialNumber(powerSourceDTO.getSerialNumber())
                .manufacturer(powerSourceDTO.getManufacturer())
                .model(powerSourceDTO.getModel())
                .power(powerSourceDTO.getPower())
                .sourceType(powerSourceDTO.getSourceType())
                .priceIn(powerSourceDTO.getPriceIn())
                .productInformation(powerSourceDTO.getProductInformation())
                .state(powerSourceDTO.getState())
                .category(powerSourceDTO.getCategory())
                .quantity(powerSourceDTO.getQuantity())
                .unitOfMeasurement(powerSourceDTO.getUnitOfMeasurement())
                .soldAt(powerSourceDTO.getSoldAt())
                .soldBy(powerSourceDTO.getSoldBy())
                .sold(powerSourceDTO.isSold())
                .received(powerSourceDTO.isReceived())
                .createdDate(powerSourceDTO.getCreatedDate())
                .createdBy(powerSourceDTO.getCreatedBy())
                .lastUpdated(powerSourceDTO.getLastUpdated())
                .updatedBy(powerSourceDTO.getUpdatedBy())
                .build();
    }

    public PowerSourceDTO map(PowerSource powerSource){
        return PowerSourceDTO.builder()
                .id(powerSource.getId())
                .generateProductCode(powerSource.getGenerateProductCode())
                .serialNumber(powerSource.getSerialNumber())
                .manufacturer(powerSource.getManufacturer())
                .model(powerSource.getModel())
                .power(powerSource.getPower())
                .sourceType(powerSource.getSourceType())
                .priceIn(powerSource.getPriceIn())
                .productInformation(powerSource.getProductInformation())
                .state(powerSource.getState())
                .category(powerSource.getCategory())
                .quantity(powerSource.getQuantity())
                .unitOfMeasurement(powerSource.getUnitOfMeasurement())
                .soldAt(powerSource.getSoldAt())
                .soldBy(powerSource.getSoldBy())
                .sold(powerSource.isSold())
                .received(powerSource.isReceived())
                .selected(false)
                .createdDate(powerSource.getCreatedDate())
                .createdBy(powerSource.getCreatedBy())
                .lastUpdated(powerSource.getLastUpdated())
                .updatedBy(powerSource.getUpdatedBy())
                .build();
    }

    public void set(PowerSourceDTO powerSourceDTO, int id) {
        Optional<PowerSource> optionalPowerSource = powerSourceRepository.findById(id);

        if (!optionalPowerSource.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Power source not found");
        }

        PowerSource dbPowerSource = optionalPowerSource.get();

        dbPowerSource.setGenerateProductCode(powerSourceDTO.getGenerateProductCode());
        dbPowerSource.setSerialNumber(powerSourceDTO.getSerialNumber());
        dbPowerSource.setManufacturer(powerSourceDTO.getManufacturer());
        dbPowerSource.setModel(powerSourceDTO.getModel());
        dbPowerSource.setPower(powerSourceDTO.getPower());
        dbPowerSource.setSourceType(powerSourceDTO.getSourceType());
        dbPowerSource.setPriceIn(powerSourceDTO.getPriceIn());
        dbPowerSource.setProductInformation(powerSourceDTO.getProductInformation());
        dbPowerSource.setState(powerSourceDTO.getState());
        dbPowerSource.setQuantity(powerSourceDTO.getQuantity());
        dbPowerSource.setUnitOfMeasurement(powerSourceDTO.getUnitOfMeasurement());
        dbPowerSource.setUpdatedBy(powerSourceDTO.getUpdatedBy());
        dbPowerSource.setReceived(powerSourceDTO.isReceived());
        powerSourceRepository.save(dbPowerSource);
    }

}
