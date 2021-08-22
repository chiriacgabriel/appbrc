package com.app.brc.brandcomputer.computersAssembly.mapper;

import com.app.brc.brandcomputer.computersAssembly.dto.ComputerAssemblyDTO;
import com.app.brc.brandcomputer.computersAssembly.model.ComputerAssembly;
import com.app.brc.brandcomputer.computersAssembly.repository.ComputerAssemblyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ComputerAssemblyMapper {

    private ComputerAssemblyRepository computerAssemblyRepository;

    @Autowired
    public ComputerAssemblyMapper(ComputerAssemblyRepository computerAssemblyRepository) {
        this.computerAssemblyRepository = computerAssemblyRepository;
    }

    public ComputerAssembly map(ComputerAssemblyDTO computerAssemblyDTO) {
        return ComputerAssembly.builder()
                .serialNumber(computerAssemblyDTO.getSerialNumber())
                .manufacturer(computerAssemblyDTO.getManufacturer())
                .type(computerAssemblyDTO.getType())
                .aCase(computerAssemblyDTO.getACase())
                .cpuCoolerList(computerAssemblyDTO.getCpuCoolerList())
                .fanCaseList(computerAssemblyDTO.getFanCaseList())
                .memoryRamList(computerAssemblyDTO.getMemoryRamList())
                .motherboard(computerAssemblyDTO.getMotherboard())
                .opticalUnit(computerAssemblyDTO.getOpticalUnit())
                .powerSourceList(computerAssemblyDTO.getPowerSourceList())
                .processorList(computerAssemblyDTO.getProcessorList())
                .soundCardList(computerAssemblyDTO.getSoundCardList())
                .storageList(computerAssemblyDTO.getStorageList())
                .videoCardList(computerAssemblyDTO.getVideoCardList())
                .build();
    }

    public ComputerAssemblyDTO map(ComputerAssembly computerAssembly) {
        return ComputerAssemblyDTO.builder()
                .id(computerAssembly.getId())
                .serialNumber(computerAssembly.getSerialNumber())
                .manufacturer(computerAssembly.getManufacturer())
                .type(computerAssembly.getType())
                .aCase(computerAssembly.getACase())
                .cpuCoolerList(computerAssembly.getCpuCoolerList())
                .fanCaseList(computerAssembly.getFanCaseList())
                .memoryRamList(computerAssembly.getMemoryRamList())
                .motherboard(computerAssembly.getMotherboard())
                .opticalUnit(computerAssembly.getOpticalUnit())
                .powerSourceList(computerAssembly.getPowerSourceList())
                .processorList(computerAssembly.getProcessorList())
                .soundCardList(computerAssembly.getSoundCardList())
                .storageList(computerAssembly.getStorageList())
                .videoCardList(computerAssembly.getVideoCardList())
                .build();
    }

    public void set(ComputerAssemblyDTO computerAssemblyDTO, int id) {

        Optional<ComputerAssembly> optional = computerAssemblyRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Computer not found !");
        }

        ComputerAssembly dbComputerAssembly = optional.get();

        dbComputerAssembly.setManufacturer(computerAssemblyDTO.getManufacturer());
        dbComputerAssembly.setType(computerAssemblyDTO.getType());
        dbComputerAssembly.setACase(computerAssemblyDTO.getACase());
        dbComputerAssembly.setCpuCoolerList(computerAssemblyDTO.getCpuCoolerList());
        dbComputerAssembly.setFanCaseList(computerAssemblyDTO.getFanCaseList());
        dbComputerAssembly.setMemoryRamList(computerAssemblyDTO.getMemoryRamList());
        dbComputerAssembly.setMotherboard(computerAssemblyDTO.getMotherboard());
        dbComputerAssembly.setOpticalUnit(computerAssemblyDTO.getOpticalUnit());
        dbComputerAssembly.setPowerSourceList(computerAssemblyDTO.getPowerSourceList());
        dbComputerAssembly.setSoundCardList(computerAssemblyDTO.getSoundCardList());
        dbComputerAssembly.setStorageList(computerAssemblyDTO.getStorageList());
        dbComputerAssembly.setVideoCardList(computerAssemblyDTO.getVideoCardList());

        computerAssemblyRepository.save(dbComputerAssembly);
    }
}
