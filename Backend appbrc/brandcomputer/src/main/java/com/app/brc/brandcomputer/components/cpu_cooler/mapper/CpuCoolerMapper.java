package com.app.brc.brandcomputer.components.cpu_cooler.mapper;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.CpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.model.CpuCooler;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.CpuCoolerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CpuCoolerMapper {

    private CpuCoolerRepository cpuCoolerRepository;

    @Autowired
    public CpuCoolerMapper(CpuCoolerRepository cpuCoolerRepository) {
        this.cpuCoolerRepository = cpuCoolerRepository;
    }

    public CpuCooler map(CpuCoolerDTO cpuCoolerDTO){
        return CpuCooler.builder()
                .generateProductCodeCpuCooler(cpuCoolerDTO.getGenerateProductCode())
                .serialNumber(cpuCoolerDTO.getSerialNumber())
                .manufacturer(cpuCoolerDTO.getManufacturer())
                .socket(cpuCoolerDTO.getSocket())
                .priceIn(cpuCoolerDTO.getPriceIn())
                .productInformation(cpuCoolerDTO.getProductInformation())
                .state(cpuCoolerDTO.getState())
                .category(cpuCoolerDTO.getCategory())
                .quantity(cpuCoolerDTO.getQuantity())
                .unitOfMeasurement(cpuCoolerDTO.getUnitOfMeasurement())
                .soldAt(cpuCoolerDTO.getSoldAt())
                .soldBy(cpuCoolerDTO.getSoldBy())
                .sold(cpuCoolerDTO.isSold())
                .received(cpuCoolerDTO.isReceived())
                .createdDate(cpuCoolerDTO.getCreatedDate())
                .createdBy(cpuCoolerDTO.getCreatedBy())
                .lastUpdated(cpuCoolerDTO.getLastUpdated())
                .updatedBy(cpuCoolerDTO.getUpdatedBy())
                .build();
    }

    public CpuCoolerDTO map(CpuCooler cpuCooler){
        return CpuCoolerDTO.builder()
                .id(cpuCooler.getId())
                .generateProductCode(cpuCooler.getGenerateProductCodeCpuCooler())
                .serialNumber(cpuCooler.getSerialNumber())
                .manufacturer(cpuCooler.getManufacturer())
                .socket(cpuCooler.getSocket())
                .priceIn(cpuCooler.getPriceIn())
                .productInformation(cpuCooler.getProductInformation())
                .state(cpuCooler.getState())
                .category(cpuCooler.getCategory())
                .quantity(cpuCooler.getQuantity())
                .unitOfMeasurement(cpuCooler.getUnitOfMeasurement())
                .soldAt(cpuCooler.getSoldAt())
                .soldBy(cpuCooler.getSoldBy())
                .sold(cpuCooler.isSold())
                .received(cpuCooler.isReceived())
                .selected(false)
                .createdDate(cpuCooler.getCreatedDate())
                .createdBy(cpuCooler.getCreatedBy())
                .lastUpdated(cpuCooler.getLastUpdated())
                .updatedBy(cpuCooler.getUpdatedBy())
                .build();
    }

    public void set(CpuCoolerDTO cpuCoolerDTO, int id){
        Optional<CpuCooler> optionalCpuCoolerDTO = cpuCoolerRepository.findById(id);

        if (!optionalCpuCoolerDTO.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cpu Cooler not found !");
        }

        CpuCooler dbCpuCooler = optionalCpuCoolerDTO.get();

        dbCpuCooler.setGenerateProductCodeCpuCooler(cpuCoolerDTO.getGenerateProductCode());
        dbCpuCooler.setManufacturer(cpuCoolerDTO.getManufacturer());
        dbCpuCooler.setSocket(cpuCoolerDTO.getSocket());
        dbCpuCooler.setPriceIn(cpuCoolerDTO.getPriceIn());
        dbCpuCooler.setProductInformation(cpuCoolerDTO.getProductInformation());
        dbCpuCooler.setState(cpuCoolerDTO.getState());
        dbCpuCooler.setQuantity(cpuCoolerDTO.getQuantity());
        dbCpuCooler.setUnitOfMeasurement(cpuCoolerDTO.getUnitOfMeasurement());
        dbCpuCooler.setReceived(cpuCoolerDTO.isReceived());

        dbCpuCooler.setUpdatedBy(cpuCoolerDTO.getUpdatedBy());

        cpuCoolerRepository.save(dbCpuCooler);
    }

}
