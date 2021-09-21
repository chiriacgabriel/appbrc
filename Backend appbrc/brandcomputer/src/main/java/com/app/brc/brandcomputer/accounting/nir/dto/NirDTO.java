package com.app.brc.brandcomputer.accounting.nir.dto;

import com.app.brc.brandcomputer.accounting.companyData.model.CompanyData;
import com.app.brc.brandcomputer.accounting.nir.model.NirFile;
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
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class NirDTO {

    private int id;
    private CompanyData companyData;

    private String nirNumber;
    private LocalDate date;
    private String administration;
    private Provider provider;
    private NirFile nirFile;
    private String invoiceNumber;
    private List<Case> caseList;
    private List<CpuCooler> cpuCoolerList;
    private List<FanCase> fanCaseList;
    private List<MemoryRam> memoryRamList;
    private List<Motherboard> motherboardList;
    private List<OpticalUnit> opticalUnitList;
    private List<PowerSource> powerSourceList;
    private List<Processor> processorList;
    private List<SoundCard> soundCardList;
    private List<Storage> storageList;
    private List<VideoCard> videoCardList;
    private List<Computer> computerList;
    private String debitAccount;
    private Double totalValue;
    private Double vat;

    private String nameOfEmployee;

}
