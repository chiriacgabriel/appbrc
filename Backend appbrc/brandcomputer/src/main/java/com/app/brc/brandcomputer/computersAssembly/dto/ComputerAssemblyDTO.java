package com.app.brc.brandcomputer.computersAssembly.dto;

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
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class ComputerAssemblyDTO {

    private int id;
    private String serialNumber;
    private String manufacturer;
    private String type;
    private Case aCase;
    private List<CpuCooler> cpuCoolerList;
    private List<FanCase> fanCaseList;
    private List<MemoryRam> memoryRamList;
    private Motherboard motherboard;
    private OpticalUnit opticalUnit;
    private List<PowerSource> powerSourceList;
    private List<Processor> processorList;
    private List<SoundCard> soundCardList;
    private List<Storage> storageList;
    private List<VideoCard> videoCardList;
}
