package com.app.brc.brandcomputer.components.broken;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.cpu_cooler.model.CpuCooler;
import com.app.brc.brandcomputer.components.fan_case.model.FanCase;
import com.app.brc.brandcomputer.components.memory_ram.model.MemoryRam;
import com.app.brc.brandcomputer.components.motherboard.model.Motherboard;
import com.app.brc.brandcomputer.components.optical_unit.model.OpticalUnit;
import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import com.app.brc.brandcomputer.components.processor.model.Processor;
import com.app.brc.brandcomputer.components.sound_card.model.SoundCard;
import com.app.brc.brandcomputer.components.storage.model.Storage;
import com.app.brc.brandcomputer.components.video_card.model.VideoCard;
import org.springframework.stereotype.Service;

@Service
public class BrokenMapper {

    public BrokenDTO map(Case aCase) {
        return BrokenDTO.builder()
                .id(aCase.getId())
                .generateProductCode(aCase.getGenerateProductCodeCase())
                .serialNumber(aCase.getSerialNumber())
                .manufacturer(aCase.getManufacturer())
                .category(aCase.getCategory())
                .build();
    }

    public BrokenDTO map(CpuCooler cpuCooler) {
        return BrokenDTO.builder()
                .id(cpuCooler.getId())
                .generateProductCode(cpuCooler.getGenerateProductCodeCpuCooler())
                .serialNumber(cpuCooler.getSerialNumber())
                .manufacturer(cpuCooler.getManufacturer())
                .category(cpuCooler.getCategory())
                .build();
    }

    public BrokenDTO map(FanCase fanCase) {
        return BrokenDTO.builder()
                .id(fanCase.getId())
                .generateProductCode(fanCase.getGenerateProductCodeFanCase())
                .serialNumber(fanCase.getSerialNumber())
                .manufacturer(fanCase.getManufacturer())
                .category(fanCase.getCategory())
                .build();
    }

    public BrokenDTO map(MemoryRam memoryRam) {
        return BrokenDTO.builder()
                .id(memoryRam.getId())
                .generateProductCode(memoryRam.getGenerateProductCodeMemoryRam())
                .serialNumber(memoryRam.getManufacturer())
                .manufacturer(memoryRam.getManufacturer())
                .category(memoryRam.getCategory())
                .build();
    }

    public BrokenDTO map(Motherboard motherboard) {
        return BrokenDTO.builder()
                .id(motherboard.getId())
                .generateProductCode(motherboard.getGenerateProductCodeMotherboard())
                .serialNumber(motherboard.getSerialNumber())
                .manufacturer(motherboard.getManufacturer())
                .category(motherboard.getCategory())
                .build();
    }

    public BrokenDTO map(OpticalUnit opticalUnit) {
        return BrokenDTO.builder()
                .id(opticalUnit.getId())
                .generateProductCode(opticalUnit.getGenerateProductCodeOpticalUnit())
                .serialNumber(opticalUnit.getSerialNumber())
                .manufacturer(opticalUnit.getManufacturer())
                .category(opticalUnit.getCategory())
                .build();
    }

    public BrokenDTO map(PowerSource powerSource) {
        return BrokenDTO.builder()
                .id(powerSource.getId())
                .generateProductCode(powerSource.getGenerateProductCodePowerSource())
                .serialNumber(powerSource.getSerialNumber())
                .manufacturer(powerSource.getManufacturer())
                .category(powerSource.getCategory())
                .build();
    }

    public BrokenDTO map(Processor processor) {
        return BrokenDTO.builder()
                .id(processor.getId())
                .generateProductCode(processor.getGenerateProductCodeProcessor())
                .serialNumber(processor.getSerialNumber())
                .manufacturer(processor.getManufacturer())
                .category(processor.getCategory())
                .build();
    }

    public BrokenDTO map(SoundCard soundCard) {
        return BrokenDTO.builder()
                .id(soundCard.getId())
                .generateProductCode(soundCard.getGenerateProductCodeSoundCard())
                .serialNumber(soundCard.getSerialNumber())
                .manufacturer(soundCard.getManufacturer())
                .category(soundCard.getCategory())
                .build();
    }

    public BrokenDTO map(Storage storage) {
        return BrokenDTO.builder()
                .id(storage.getId())
                .generateProductCode(storage.getGenerateProductCodeStorage())
                .serialNumber(storage.getSerialNumber())
                .manufacturer(storage.getManufacturer())
                .category(storage.getCategory())
                .build();
    }

    public BrokenDTO map(VideoCard videoCard) {
        return BrokenDTO.builder()
                .id(videoCard.getId())
                .generateProductCode(videoCard.getGenerateProductCodeVideoCard())
                .serialNumber(videoCard.getSerialNumber())
                .manufacturer(videoCard.getManufacturer())
                .category(videoCard.getCategory())
                .build();
    }
}
