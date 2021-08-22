package com.app.brc.brandcomputer.components.optical_unit.mapper;

import com.app.brc.brandcomputer.components.optical_unit.dto.OpticalUnitDTO;
import com.app.brc.brandcomputer.components.optical_unit.model.OpticalUnit;
import com.app.brc.brandcomputer.components.optical_unit.repository.OpticalUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class OpticalUnitMapper {

    private OpticalUnitRepository opticalUnitRepository;

    @Autowired
    public OpticalUnitMapper(OpticalUnitRepository opticalUnitRepository) {
        this.opticalUnitRepository = opticalUnitRepository;
    }

    public OpticalUnit map(OpticalUnitDTO opticalUnitDTO) {
        return OpticalUnit.builder()
                .generateProductCodeOpticalUnit(opticalUnitDTO.getGenerateProductCode())
                .serialNumber(opticalUnitDTO.getSerialNumber())
                .manufacturer(opticalUnitDTO.getManufacturer())
                .type(opticalUnitDTO.getType())
                .priceIn(opticalUnitDTO.getPriceIn())
                .productInformation(opticalUnitDTO.getProductInformation())
                .state(opticalUnitDTO.getState())
                .category(opticalUnitDTO.getCategory())
                .quantity(opticalUnitDTO.getQuantity())
                .unitOfMeasurement(opticalUnitDTO.getUnitOfMeasurement())
                .soldAt(opticalUnitDTO.getSoldAt())
                .soldBy(opticalUnitDTO.getSoldBy())
                .sold(opticalUnitDTO.isSold())
                .received(opticalUnitDTO.isReceived())
                .createdDate(opticalUnitDTO.getCreatedDate())
                .createdBy(opticalUnitDTO.getCreatedBy())
                .lastUpdated(opticalUnitDTO.getLastUpdated())
                .updatedBy(opticalUnitDTO.getUpdatedBy())
                .build();
    }

    public OpticalUnitDTO map(OpticalUnit opticalUnit){
        return OpticalUnitDTO.builder()
                .id(opticalUnit.getId())
                .generateProductCode(opticalUnit.getGenerateProductCodeOpticalUnit())
                .serialNumber(opticalUnit.getSerialNumber())
                .manufacturer(opticalUnit.getManufacturer())
                .type(opticalUnit.getType())
                .priceIn(opticalUnit.getPriceIn())
                .productInformation(opticalUnit.getProductInformation())
                .state(opticalUnit.getState())
                .category(opticalUnit.getCategory())
                .quantity(opticalUnit.getQuantity())
                .unitOfMeasurement(opticalUnit.getUnitOfMeasurement())
                .soldAt(opticalUnit.getSoldAt())
                .sold(opticalUnit.isSold())
                .received(opticalUnit.isReceived())
                .selected(false)
                .createdDate(opticalUnit.getCreatedDate())
                .createdBy(opticalUnit.getCreatedBy())
                .lastUpdated(opticalUnit.getLastUpdated())
                .updatedBy(opticalUnit.getUpdatedBy())
                .build();
    }

    public void set(int id, OpticalUnitDTO opticalUnitDTO){
        Optional<OpticalUnit> optional = opticalUnitRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Optical unit not found !");
        }

        OpticalUnit dbOpticalUnit = optional.get();

        dbOpticalUnit.setGenerateProductCodeOpticalUnit(opticalUnitDTO.getGenerateProductCode());
        dbOpticalUnit.setSerialNumber(opticalUnitDTO.getSerialNumber());
        dbOpticalUnit.setManufacturer(opticalUnitDTO.getManufacturer());
        dbOpticalUnit.setType(opticalUnitDTO.getType());
        dbOpticalUnit.setPriceIn(opticalUnitDTO.getPriceIn());
        dbOpticalUnit.setProductInformation(opticalUnitDTO.getProductInformation());
        dbOpticalUnit.setQuantity(opticalUnitDTO.getQuantity());
        dbOpticalUnit.setUnitOfMeasurement(opticalUnitDTO.getUnitOfMeasurement());
        dbOpticalUnit.setState(opticalUnitDTO.getState());
        dbOpticalUnit.setReceived(opticalUnitDTO.isReceived());

        dbOpticalUnit.setUpdatedBy(opticalUnitDTO.getUpdatedBy());

        opticalUnitRepository.save(dbOpticalUnit);
    }
}
