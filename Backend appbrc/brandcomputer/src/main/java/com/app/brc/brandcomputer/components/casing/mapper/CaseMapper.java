package com.app.brc.brandcomputer.components.casing.mapper;

import com.app.brc.brandcomputer.components.casing.dto.CaseDTO;
import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.casing.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CaseMapper {

    private CaseRepository caseRepository;

    @Autowired
    public CaseMapper(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }

    public Case map(CaseDTO caseDTO){
        return Case.builder()
                .generateProductCodeCase(caseDTO.getGenerateProductCode())
                .serialNumber(caseDTO.getSerialNumber())
                .manufacturer(caseDTO.getManufacturer())
                .caseType(caseDTO.getCaseType())
                .compatibleMotherboard(caseDTO.getCompatibleMotherboard())
                .powerSourceIncluded(caseDTO.isPowerSourceIncluded())
                .sourcePower(caseDTO.getSourcePower())
                .priceIn(caseDTO.getPriceIn())
                .productInformation(caseDTO.getProductInformation())
                .state(caseDTO.getState())
                .category(caseDTO.getCategory())
                .quantity(caseDTO.getQuantity())
                .unitOfMeasurement(caseDTO.getUnitOfMeasurement())
                .soldAt(caseDTO.getSoldAt())
                .soldBy(caseDTO.getSoldBy())
                .sold(caseDTO.isSold())
                .received(caseDTO.isReceived())
                .createdDate(caseDTO.getCreatedDate())
                .createdBy(caseDTO.getCreatedBy())
                .lastUpdated(caseDTO.getLastUpdated())
                .updatedBy(caseDTO.getUpdatedBy())
                .build();
    }

    public CaseDTO map(Case aCase){
        return CaseDTO.builder()
                .id(aCase.getId())
                .generateProductCode(aCase.getGenerateProductCodeCase())
                .serialNumber(aCase.getSerialNumber())
                .manufacturer(aCase.getManufacturer())
                .caseType(aCase.getCaseType())
                .compatibleMotherboard(aCase.getCompatibleMotherboard())
                .powerSourceIncluded(aCase.isPowerSourceIncluded())
                .sourcePower(aCase.getSourcePower())
                .priceIn(aCase.getPriceIn())
                .productInformation(aCase.getProductInformation())
                .state(aCase.getState())
                .category(aCase.getCategory())
                .quantity(aCase.getQuantity())
                .unitOfMeasurement(aCase.getUnitOfMeasurement())
                .soldAt(aCase.getSoldAt())
                .soldBy(aCase.getSoldBy())
                .sold(aCase.isSold())
                .received(aCase.isReceived())
                .selected(false)
                .createdDate(aCase.getCreatedDate())
                .createdBy(aCase.getCreatedBy())
                .lastUpdated(aCase.getLastUpdated())
                .updatedBy(aCase.getUpdatedBy())
                .build();
    }

    public void set(CaseDTO caseDTO, int id) {
        Optional<Case> caseOptional = caseRepository.findById(id);

        if (!caseOptional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Case not found !");
        }

        Case dbCase = caseOptional.get();

        dbCase.setGenerateProductCodeCase(caseDTO.getGenerateProductCode());
        dbCase.setManufacturer(caseDTO.getManufacturer());
        dbCase.setCaseType(caseDTO.getCaseType());
        dbCase.setCompatibleMotherboard(caseDTO.getCompatibleMotherboard());
        dbCase.setPowerSourceIncluded(caseDTO.isPowerSourceIncluded());
        dbCase.setSourcePower(caseDTO.getSourcePower());
        dbCase.setPriceIn(caseDTO.getPriceIn());
        dbCase.setProductInformation(caseDTO.getProductInformation());
        dbCase.setQuantity(caseDTO.getQuantity());
        dbCase.setUnitOfMeasurement(caseDTO.getUnitOfMeasurement());
        dbCase.setState(caseDTO.getState());
        dbCase.setReceived(caseDTO.isReceived());
        dbCase.setUpdatedBy(caseDTO.getUpdatedBy());
        caseRepository.save(dbCase);
    }
}
