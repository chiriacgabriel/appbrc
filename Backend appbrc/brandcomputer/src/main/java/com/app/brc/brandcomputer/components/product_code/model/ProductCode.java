package com.app.brc.brandcomputer.components.product_code.model;


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
import com.app.brc.brandcomputer.computers.model.Computer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "productCode")
public class ProductCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private String category;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<Case> caseList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<CpuCooler> cpuCoolerList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<FanCase> fanCaseList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<MemoryRam> memoryRamList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<Motherboard> motherboardList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<OpticalUnit> opticalUnitList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<PowerSource> powerSourceList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<Processor> processorList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<SoundCard> soundCardList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<Storage> storageList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<VideoCard> videoCardList = new ArrayList<>();

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<Computer> computerList = new ArrayList<>();
}
