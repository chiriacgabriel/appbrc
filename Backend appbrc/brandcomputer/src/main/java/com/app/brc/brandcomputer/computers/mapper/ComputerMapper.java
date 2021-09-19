package com.app.brc.brandcomputer.computers.mapper;

import com.app.brc.brandcomputer.computers.dto.ComputerDTO;
import com.app.brc.brandcomputer.computers.model.Computer;
import com.app.brc.brandcomputer.computers.repository.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ComputerMapper {

    private ComputerRepository computerRepository;

    @Autowired
    public ComputerMapper(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }

    public Computer map(ComputerDTO computerDTO){
        return Computer.builder()
                .generateProductCode(computerDTO.getGenerateProductCode())
                .serialNumber(computerDTO.getSerialNumber())
                .manufacturer(computerDTO.getManufacturer())
                .model(computerDTO.getModel())
                .form(computerDTO.getForm())
                .cpuType(computerDTO.getCpuType())
                .cpuModel(computerDTO.getCpuModel())
                .memoryType(computerDTO.getMemoryType())
                .memoryCapacity(computerDTO.getMemoryCapacity())
                .numberOfDIMM(computerDTO.getNumberOfDIMM())
                .memoryFrequency(computerDTO.getMemoryFrequency())
                .storageExist(computerDTO.isStorageExist())
                .storageType(computerDTO.getStorageType())
                .storageCapacity(computerDTO.getStorageCapacity())
                .opticalUnitExist(computerDTO.isOpticalUnitExist())
                .opticalUnit(computerDTO.getOpticalUnit())
                .videoCardExist(computerDTO.isVideoCardExist())
                .videoCard(computerDTO.getVideoCard())
                .soundCardExist(computerDTO.isSoundCardExist())
                .soundCard(computerDTO.getSoundCard())
                .networkCardExist(computerDTO.isNetworkCardExist())
                .networkCard(computerDTO.getNetworkCard())
                .category(computerDTO.getCategory())
                .state(computerDTO.getState())
                .productInformation(computerDTO.getProductInformation())
                .priceIn(computerDTO.getPriceIn())
                .dismantled(computerDTO.isDismantled())
                .received(computerDTO.isReceived())
                .quantity(computerDTO.getQuantity())
                .unitOfMeasurement(computerDTO.getUnitOfMeasurement())
                .soldAt(computerDTO.getSoldAt())
                .soldBy(computerDTO.getSoldBy())
                .sold(computerDTO.isSold())
                .createdDate(computerDTO.getCreatedDate())
                .createdBy(computerDTO.getCreatedBy())
                .lastUpdated(computerDTO.getLastUpdated())
                .updatedBy(computerDTO.getUpdatedBy())
                .build();
    }

    public ComputerDTO map(Computer computer){
        return ComputerDTO.builder()
                .id(computer.getId())
                .generateProductCode(computer.getGenerateProductCode())
                .serialNumber(computer.getSerialNumber())
                .manufacturer(computer.getManufacturer())
                .model(computer.getModel())
                .form(computer.getForm())
                .cpuType(computer.getCpuType())
                .cpuModel(computer.getCpuModel())
                .memoryType(computer.getMemoryType())
                .memoryCapacity(computer.getMemoryCapacity())
                .numberOfDIMM(computer.getNumberOfDIMM())
                .memoryFrequency(computer.getMemoryFrequency())
                .storageExist(computer.isStorageExist())
                .storageType(computer.getStorageType())
                .storageCapacity(computer.getStorageCapacity())
                .opticalUnitExist(computer.isOpticalUnitExist())
                .opticalUnit(computer.getOpticalUnit())
                .videoCardExist(computer.isVideoCardExist())
                .videoCard(computer.getVideoCard())
                .soundCardExist(computer.isSoundCardExist())
                .soundCard(computer.getSoundCard())
                .networkCardExist(computer.isNetworkCardExist())
                .networkCard(computer.getNetworkCard())
                .category(computer.getCategory())
                .state(computer.getState())
                .productInformation(computer.getProductInformation())
                .priceIn(computer.getPriceIn())
                .dismantled(computer.isDismantled())
                .received(computer.isReceived())
                .selected(false)
                .quantity(computer.getQuantity())
                .unitOfMeasurement(computer.getUnitOfMeasurement())
                .soldAt(computer.getSoldAt())
                .soldBy(computer.getSoldBy())
                .sold(computer.isSold())
                .createdDate(computer.getCreatedDate())
                .createdBy(computer.getCreatedBy())
                .lastUpdated(computer.getLastUpdated())
                .updatedBy(computer.getUpdatedBy())
                .build();
    }

    public void set(int id, ComputerDTO computerDTO){
        Optional<Computer> optionalComputer = computerRepository.findById(id);

        if (!optionalComputer.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Computer not found !");
        }

        Computer dbComputer = optionalComputer.get();

        dbComputer.setGenerateProductCode(computerDTO.getGenerateProductCode());
        dbComputer.setSerialNumber(computerDTO.getSerialNumber());
        dbComputer.setManufacturer(computerDTO.getManufacturer());
        dbComputer.setModel(computerDTO.getModel());
        dbComputer.setForm(computerDTO.getForm());
        dbComputer.setCpuType(computerDTO.getCpuType());
        dbComputer.setCpuModel(computerDTO.getCpuModel());
        dbComputer.setMemoryType(computerDTO.getMemoryType());
        dbComputer.setMemoryCapacity(computerDTO.getMemoryCapacity());
        dbComputer.setNumberOfDIMM(computerDTO.getNumberOfDIMM());
        dbComputer.setMemoryFrequency(computerDTO.getMemoryFrequency());
        dbComputer.setStorageExist(computerDTO.isStorageExist());
        dbComputer.setStorageType(computerDTO.getStorageType());
        dbComputer.setStorageCapacity(computerDTO.getStorageCapacity());
        dbComputer.setOpticalUnitExist(computerDTO.isOpticalUnitExist());
        dbComputer.setOpticalUnit(computerDTO.getOpticalUnit());
        dbComputer.setVideoCardExist(computerDTO.isVideoCardExist());
        dbComputer.setVideoCard(computerDTO.getVideoCard());
        dbComputer.setSoundCardExist(computerDTO.isSoundCardExist());
        dbComputer.setSoundCard(computerDTO.getSoundCard());
        dbComputer.setNetworkCardExist(computerDTO.isNetworkCardExist());
        dbComputer.setNetworkCard(computerDTO.getNetworkCard());
        dbComputer.setState(computerDTO.getState());
        dbComputer.setProductInformation(computerDTO.getProductInformation());
        dbComputer.setPriceIn(computerDTO.getPriceIn());
        dbComputer.setDismantled(computerDTO.isDismantled());
        dbComputer.setReceived(computerDTO.isReceived());
        dbComputer.setUpdatedBy(computerDTO.getUpdatedBy());
        dbComputer.setQuantity(computerDTO.getQuantity());
        dbComputer.setUnitOfMeasurement(computerDTO.getUnitOfMeasurement());

        computerRepository.save(dbComputer);
    }
}
