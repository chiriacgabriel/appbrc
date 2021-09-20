package com.app.brc.brandcomputer.accounting.nir.model;

import com.app.brc.brandcomputer.accounting.companyData.model.CompanyData;
import com.app.brc.brandcomputer.accounting.provider.model.Provider;
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
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "nir")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Nir {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "company_id")
    private CompanyData companyData;

    private String nirNumber;
    private LocalDate date;
    private String administration;

    @OneToOne
    @JoinColumn(name = "provider_id")
    private Provider provider;

    @OneToOne
    @JoinColumn(name = "nir_file_id")
    private NirFile nirFile;

    private String invoiceNumber;

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "case_id")
    )
    List<Case> caseList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "cpuCooler_id")
    )
    List<CpuCooler> cpuCoolerList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "fanCase_id")
    )
    List<FanCase> fanCaseList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "memoryRam_id")
    )
    List<MemoryRam> memoryRamList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "motherboard_id")
    )
    List<Motherboard> motherboardList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "opticalUnit_id")
    )
    List<OpticalUnit> opticalUnitList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "powerSource_id")
    )
    List<PowerSource> powerSourceList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "processor_id")
    )
    List<Processor> processorList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "soundCard_id")
    )
    List<SoundCard> soundCardList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "storage_id")
    )
    List<Storage> storageList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "videoCard_id")
    )
    List<VideoCard> videoCardList = new ArrayList<>();

    @OneToMany
    @JoinTable(
            name = "nir_component",
            joinColumns = @JoinColumn(name = "nir_id"),
            inverseJoinColumns = @JoinColumn(name = "computer_id")
    )
    List<Computer> computerList = new ArrayList<>();

    private String debitAccount;
    private Double totalValue;
    private Double vat;
}
