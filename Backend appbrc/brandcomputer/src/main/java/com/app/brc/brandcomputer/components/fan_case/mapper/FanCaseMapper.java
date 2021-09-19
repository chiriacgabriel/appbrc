package com.app.brc.brandcomputer.components.fan_case.mapper;

import com.app.brc.brandcomputer.components.fan_case.dto.FanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.model.FanCase;
import com.app.brc.brandcomputer.components.fan_case.repository.FanCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class FanCaseMapper {

    private FanCaseRepository fanCaseRepository;

    @Autowired
    public FanCaseMapper(FanCaseRepository fanCaseRepository) {
        this.fanCaseRepository = fanCaseRepository;
    }

    public FanCase map(FanCaseDTO fanCaseDTO) {
        return FanCase.builder()
                .generateProductCode(fanCaseDTO.getGenerateProductCode())
                .serialNumber(fanCaseDTO.getSerialNumber())
                .manufacturer(fanCaseDTO.getManufacturer())
                .dimension(fanCaseDTO.getDimension())
                .priceIn(fanCaseDTO.getPriceIn())
                .productInformation(fanCaseDTO.getProductInformation())
                .state(fanCaseDTO.getState())
                .category(fanCaseDTO.getCategory())
                .quantity(fanCaseDTO.getQuantity())
                .unitOfMeasurement(fanCaseDTO.getUnitOfMeasurement())
                .soldAt(fanCaseDTO.getSoldAt())
                .soldBy(fanCaseDTO.getSoldBy())
                .sold(fanCaseDTO.isSold())
                .received(fanCaseDTO.isReceived())
                .createdDate(fanCaseDTO.getCreatedDate())
                .createdBy(fanCaseDTO.getCreatedBy())
                .lastUpdated(fanCaseDTO.getLastUpdated())
                .updatedBy(fanCaseDTO.getUpdatedBy())
                .build();
    }

    public FanCaseDTO map(FanCase fanCase) {
        return FanCaseDTO.builder()
                .id(fanCase.getId())
                .generateProductCode(fanCase.getGenerateProductCode())
                .serialNumber(fanCase.getSerialNumber())
                .manufacturer(fanCase.getManufacturer())
                .dimension(fanCase.getDimension())
                .priceIn(fanCase.getPriceIn())
                .productInformation(fanCase.getProductInformation())
                .state(fanCase.getState())
                .category(fanCase.getCategory())
                .quantity(fanCase.getQuantity())
                .unitOfMeasurement(fanCase.getUnitOfMeasurement())
                .soldAt(fanCase.getSoldAt())
                .soldBy(fanCase.getSoldBy())
                .sold(fanCase.isSold())
                .received(fanCase.isReceived())
                .selected(false)
                .createdDate(fanCase.getCreatedDate())
                .createdBy(fanCase.getCreatedBy())
                .lastUpdated(fanCase.getLastUpdated())
                .updatedBy(fanCase.getUpdatedBy())
                .build();
    }

    public void set(FanCaseDTO fanCaseDTO, int id) {
        Optional<FanCase> optionalFanCase = fanCaseRepository.findById(id);

        if (!optionalFanCase.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Fan Case not found");
        }

        FanCase dbFanCase = optionalFanCase.get();

        dbFanCase.setGenerateProductCode(fanCaseDTO.getGenerateProductCode());
        dbFanCase.setManufacturer(fanCaseDTO.getManufacturer());
        dbFanCase.setDimension(fanCaseDTO.getDimension());
        dbFanCase.setPriceIn(fanCaseDTO.getPriceIn());
        dbFanCase.setQuantity(fanCaseDTO.getQuantity());
        dbFanCase.setUnitOfMeasurement(fanCaseDTO.getUnitOfMeasurement());
        dbFanCase.setProductInformation(fanCaseDTO.getProductInformation());
        dbFanCase.setState(fanCaseDTO.getState());
        dbFanCase.setUpdatedBy(fanCaseDTO.getUpdatedBy());

        fanCaseRepository.save(dbFanCase);

    }

}
