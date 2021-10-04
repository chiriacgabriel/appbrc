package com.app.brc.brandcomputer.reports.service;

import com.app.brc.brandcomputer.components.casing.repository.CaseRepository;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.CpuCoolerRepository;
import com.app.brc.brandcomputer.components.fan_case.repository.FanCaseRepository;
import com.app.brc.brandcomputer.components.memory_ram.repository.MemoryRamRepository;
import com.app.brc.brandcomputer.components.motherboard.repository.MotherboardRepository;
import com.app.brc.brandcomputer.components.optical_unit.repository.OpticalUnitRepository;
import com.app.brc.brandcomputer.components.powersource.repository.PowerSourceRepository;
import com.app.brc.brandcomputer.components.processor.repository.ProcessorRepository;
import com.app.brc.brandcomputer.components.storage.repository.StorageRepository;
import com.app.brc.brandcomputer.components.video_card.repository.VideoCardRepository;
import com.app.brc.brandcomputer.computers.repository.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ReportsService {

    private CaseRepository caseRepository;
    private CpuCoolerRepository cpuCoolerRepository;
    private FanCaseRepository fanCaseRepository;
    private MemoryRamRepository memoryRamRepository;
    private MotherboardRepository motherboardRepository;
    private OpticalUnitRepository opticalUnitRepository;
    private PowerSourceRepository powerSourceRepository;
    private ProcessorRepository processorRepository;
    private StorageRepository storageRepository;
    private VideoCardRepository videoCardRepository;
    private ComputerRepository computerRepository;

    @Autowired
    public ReportsService(CaseRepository caseRepository, CpuCoolerRepository cpuCoolerRepository, FanCaseRepository fanCaseRepository, MemoryRamRepository memoryRamRepository, MotherboardRepository motherboardRepository, OpticalUnitRepository opticalUnitRepository, PowerSourceRepository powerSourceRepository, ProcessorRepository processorRepository, StorageRepository storageRepository, VideoCardRepository videoCardRepository, ComputerRepository computerRepository) {
        this.caseRepository = caseRepository;
        this.cpuCoolerRepository = cpuCoolerRepository;
        this.fanCaseRepository = fanCaseRepository;
        this.memoryRamRepository = memoryRamRepository;
        this.motherboardRepository = motherboardRepository;
        this.opticalUnitRepository = opticalUnitRepository;
        this.powerSourceRepository = powerSourceRepository;
        this.processorRepository = processorRepository;
        this.storageRepository = storageRepository;
        this.videoCardRepository = videoCardRepository;
        this.computerRepository = computerRepository;
    }

    public Integer componentsAdded(String startDate, String endDate) {
        int sum = 0;

        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        LocalDateTime localStartDate = LocalDateTime.parse(startDate + " 00:00:00", dateTimeFormatter);
        LocalDateTime localEndDate = LocalDateTime.parse(endDate + " 23:59:59", dateTimeFormatter);

        List<Integer> resultList = Arrays.asList(
                                    caseRepository.countAllByCreatedDateBetween(localStartDate, localEndDate),
                                    cpuCoolerRepository.countAllByCreatedDateBetween(localStartDate, localEndDate),
                                    fanCaseRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    memoryRamRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    motherboardRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    opticalUnitRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    powerSourceRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    processorRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    storageRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    videoCardRepository.countAllByCreatedDateBetween(localStartDate,localEndDate),
                                    computerRepository.countAllByCreatedDateBetween(localStartDate,localEndDate));

        for (Integer item: resultList) {
            sum += item;
        }

        return sum;

    }

    /*

    @SneakyThrows
    private <T> void setReceived(JpaRepository jpa, int id) {
        Optional<T> optionalObject = jpa.findById(id);

        Method setReceived = optionalObject.get().getClass().getDeclaredMethod("setReceived", boolean.class);
        setReceived.invoke(optionalObject.get(), true);

        jpa.save(optionalObject.get());
    }
    */
}
