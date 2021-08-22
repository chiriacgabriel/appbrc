package com.app.brc.brandcomputer.components.processor.mapper;

import com.app.brc.brandcomputer.components.processor.dto.ProcessorDTO;
import com.app.brc.brandcomputer.components.processor.model.Processor;
import com.app.brc.brandcomputer.components.processor.repository.ProcessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ProcessorMapper {

    private ProcessorRepository processorRepository;

    @Autowired
    public ProcessorMapper(ProcessorRepository processorRepository) {
        this.processorRepository = processorRepository;
    }

    public Processor map(ProcessorDTO processorDTO){
        return Processor.builder()
                .generateProductCodeProcessor(processorDTO.getGenerateProductCode())
                .serialNumber(processorDTO.getSerialNumber())
                .manufacturer(processorDTO.getManufacturer())
                .socket(processorDTO.getSocket())
                .model(processorDTO.getModel())
                .baseClock(processorDTO.getBaseClock())
                .maxBoostClock(processorDTO.getMaxBoostClock())
                .typeOfMemoryRAM(processorDTO.getTypeOfMemoryRAM())
                .maxMemoryFrequency(processorDTO.getMaxMemoryFrequency())
                .numberOfCpuCores(processorDTO.getNumberOfCpuCores())
                .numberOfThreads(processorDTO.getNumberOfThreads())
                .cache(processorDTO.getCache())
                .coolerIncluded(processorDTO.isCoolerIncluded())
                .priceIn(processorDTO.getPriceIn())
                .lithography(processorDTO.getLithography())
                .thermalDesignPower(processorDTO.getThermalDesignPower())
                .productInformation(processorDTO.getProductInformation())
                .state(processorDTO.getState())
                .category(processorDTO.getCategory())
                .quantity(processorDTO.getQuantity())
                .unitOfMeasurement(processorDTO.getUnitOfMeasurement())
                .soldAt(processorDTO.getSoldAt())
                .soldBy(processorDTO.getSoldBy())
                .sold(processorDTO.isSold())
                .received(processorDTO.isReceived())
                .createdDate(processorDTO.getCreatedDate())
                .createdBy(processorDTO.getCreatedBy())
                .lastUpdated(processorDTO.getLastUpdated())
                .updatedBy(processorDTO.getUpdatedBy())
                .build();
    }

    public ProcessorDTO map(Processor processor){
        return ProcessorDTO.builder()
                .id(processor.getId())
                .generateProductCode(processor.getGenerateProductCodeProcessor())
                .serialNumber(processor.getSerialNumber())
                .manufacturer(processor.getManufacturer())
                .socket(processor.getSocket())
                .model(processor.getModel())
                .baseClock(processor.getBaseClock())
                .maxBoostClock(processor.getMaxBoostClock())
                .typeOfMemoryRAM(processor.getTypeOfMemoryRAM())
                .maxMemoryFrequency(processor.getMaxMemoryFrequency())
                .numberOfCpuCores(processor.getNumberOfCpuCores())
                .numberOfThreads(processor.getNumberOfThreads())
                .cache(processor.getCache())
                .coolerIncluded(processor.isCoolerIncluded())
                .lithography(processor.getLithography())
                .thermalDesignPower(processor.getThermalDesignPower())
                .priceIn(processor.getPriceIn())
                .productInformation(processor.getProductInformation())
                .state(processor.getState())
                .category(processor.getCategory())
                .quantity(processor.getQuantity())
                .unitOfMeasurement(processor.getUnitOfMeasurement())
                .soldAt(processor.getSoldAt())
                .soldBy(processor.getSoldBy())
                .sold(processor.isSold())
                .received(processor.isReceived())
                .selected(false)
                .createdDate(processor.getCreatedDate())
                .createdBy(processor.getCreatedBy())
                .lastUpdated(processor.getLastUpdated())
                .updatedBy(processor.getUpdatedBy())
                .build();
    }

    public void set(int id, ProcessorDTO processorDTO){

        Optional<Processor> optional = processorRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Processor not found !");
        }

        Processor dbProcessor = optional.get();

        dbProcessor.setGenerateProductCodeProcessor(processorDTO.getGenerateProductCode());
        dbProcessor.setManufacturer(processorDTO.getManufacturer());

        dbProcessor.setSocket(processorDTO.getSocket());
        dbProcessor.setModel(processorDTO.getModel());
        dbProcessor.setBaseClock(processorDTO.getBaseClock());
        dbProcessor.setMaxBoostClock(processorDTO.getMaxBoostClock());
        dbProcessor.setTypeOfMemoryRAM(processorDTO.getTypeOfMemoryRAM());
        dbProcessor.setMaxMemoryFrequency(processorDTO.getMaxMemoryFrequency());
        dbProcessor.setNumberOfCpuCores(processorDTO.getNumberOfCpuCores());
        dbProcessor.setNumberOfThreads(processorDTO.getNumberOfThreads());
        dbProcessor.setCache(processorDTO.getCache());
        dbProcessor.setCoolerIncluded(processorDTO.isCoolerIncluded());
        dbProcessor.setLithography(processorDTO.getLithography());
        dbProcessor.setThermalDesignPower(processorDTO.getThermalDesignPower());
        dbProcessor.setQuantity(processorDTO.getQuantity());
        dbProcessor.setUnitOfMeasurement(processorDTO.getUnitOfMeasurement());

        dbProcessor.setPriceIn(processorDTO.getPriceIn());
        dbProcessor.setProductInformation(processorDTO.getProductInformation());
        dbProcessor.setState(processorDTO.getState());
        dbProcessor.setUpdatedBy(processorDTO.getUpdatedBy());
        dbProcessor.setReceived(processorDTO.isReceived());

        processorRepository.save(dbProcessor);
    }
}
