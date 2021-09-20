package com.app.brc.brandcomputer.computersAssembly.model;


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

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
@Table(name = "computers_assembly")
public class ComputerAssembly {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String serialNumber;
    private String manufacturer;
    private String type;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id")
    private Case aCase;

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<CpuCooler> cpuCoolerList = new ArrayList<>();

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<FanCase> fanCaseList = new ArrayList<>();

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<MemoryRam> memoryRamList = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "motherboard_id")
    private Motherboard motherboard;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "optical_unit_id")
    private OpticalUnit opticalUnit;

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<PowerSource> powerSourceList = new ArrayList<>();

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<Processor> processorList = new ArrayList<>();

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<SoundCard> soundCardList = new ArrayList<>();

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<Storage> storageList = new ArrayList<>();

    @OneToMany(mappedBy = "computerAssembly", cascade = CascadeType.ALL)
    private List<VideoCard> videoCardList = new ArrayList<>();

}
