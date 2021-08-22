package com.app.brc.brandcomputer.components.broken;

import com.app.brc.brandcomputer.components.casing.repository.CaseRepository;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.CpuCoolerRepository;
import com.app.brc.brandcomputer.components.fan_case.repository.FanCaseRepository;
import com.app.brc.brandcomputer.components.memory_ram.repository.MemoryRamRepository;
import com.app.brc.brandcomputer.components.motherboard.repository.MotherboardRepository;
import com.app.brc.brandcomputer.components.optical_unit.repository.OpticalUnitRepository;
import com.app.brc.brandcomputer.components.powersource.repository.PowerSourceRepository;
import com.app.brc.brandcomputer.components.processor.repository.ProcessorRepository;
import com.app.brc.brandcomputer.components.sound_card.repository.SoundCardRepository;
import com.app.brc.brandcomputer.components.storage.repository.StorageRepository;
import com.app.brc.brandcomputer.components.video_card.repository.VideoCardRepository;
import org.springframework.aop.framework.Advised;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.QueryMethod;
import org.springframework.data.repository.support.Repositories;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.context.WebApplicationContext;

import java.lang.reflect.Method;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Service
public class BrokenService {

    private final String state = "Defect";
    private final Map<String, Object> broken = new HashMap<>();

    private CaseRepository caseRepository;
    private CpuCoolerRepository cpuCoolerRepository;
    private FanCaseRepository fanCaseRepository;
    private MemoryRamRepository memoryRamRepository;
    private MotherboardRepository motherboardRepository;
    private OpticalUnitRepository opticalUnitRepository;
    private PowerSourceRepository powerSourceRepository;
    private ProcessorRepository processorRepository;
    private SoundCardRepository soundCardRepository;
    private StorageRepository storageRepository;
    private VideoCardRepository videoCardRepository;
    private BrokenMapper brokenMapper;

    private Map<String, JpaRepository> services;

    private ConfigurableApplicationContext appContext;

    public BrokenService(CaseRepository caseRepository, CpuCoolerRepository cpuCoolerRepository,
                         FanCaseRepository fanCaseRepository, MemoryRamRepository memoryRamRepository,
                         MotherboardRepository motherboardRepository, OpticalUnitRepository opticalUnitRepository,
                         PowerSourceRepository powerSourceRepository, ProcessorRepository processorRepository,
                         SoundCardRepository soundCardRepository, StorageRepository storageRepository,
                         VideoCardRepository videoCardRepository, BrokenMapper brokenMapper,
                         Map<String, JpaRepository> services, ConfigurableApplicationContext appContext) {
        this.caseRepository = caseRepository;
        this.cpuCoolerRepository = cpuCoolerRepository;
        this.fanCaseRepository = fanCaseRepository;
        this.memoryRamRepository = memoryRamRepository;
        this.motherboardRepository = motherboardRepository;
        this.opticalUnitRepository = opticalUnitRepository;
        this.powerSourceRepository = powerSourceRepository;
        this.processorRepository = processorRepository;
        this.soundCardRepository = soundCardRepository;
        this.storageRepository = storageRepository;
        this.videoCardRepository = videoCardRepository;
        this.brokenMapper = brokenMapper;
        this.services = services;
        this.appContext = appContext;
    }

    public Map<String, Object> all(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        List<Object> allCategories = new ArrayList<>();

        caseRepository.findAllByState(state).forEach(aCase -> allCategories.add(brokenMapper.map(aCase)));
        cpuCoolerRepository.findAllByState(state).forEach(cpuCooler -> allCategories.add(brokenMapper.map(cpuCooler)));
        fanCaseRepository.findAllByState(state).forEach(fanCase -> allCategories.add(brokenMapper.map(fanCase)));
        memoryRamRepository.findAllByState(state).forEach(memoryRam -> allCategories.add(brokenMapper.map(memoryRam)));
        motherboardRepository.findAllByState(state).forEach(motherboard -> allCategories.add(brokenMapper.map(motherboard)));
        opticalUnitRepository.findAllByState(state).forEach(opticalUnit -> allCategories.add(brokenMapper.map(opticalUnit)));
        powerSourceRepository.findAllByState(state).forEach(powerSource -> allCategories.add(brokenMapper.map(powerSource)));
        processorRepository.findAllByState(state).forEach(processor -> allCategories.add(brokenMapper.map(processor)));
        soundCardRepository.findAllByState(state).forEach(soundCard -> allCategories.add(brokenMapper.map(soundCard)));
        storageRepository.findAllByState(state).forEach(storage -> allCategories.add(brokenMapper.map(storage)));
        videoCardRepository.findAllByState(state).forEach(videoCard -> allCategories.add(brokenMapper.map(videoCard)));

        broken.clear();
        broken.put("All", pagination(allCategories, page, size));

        broken.put("Case", caseRepository.findAllByState(state, pageable).map(aCase -> brokenMapper.map(aCase)));
        broken.put("CpuCooler", cpuCoolerRepository.findAllByState(state, pageable).map(cpuCooler -> brokenMapper.map(cpuCooler)));
        broken.put("FanCase", fanCaseRepository.findAllByState(state, pageable).map(fanCase -> brokenMapper.map(fanCase)));
        broken.put("MemoryRAM", memoryRamRepository.findAllByState(state, pageable).map(memoryRam -> brokenMapper.map(memoryRam)));
        broken.put("Motherboard", motherboardRepository.findAllByState(state, pageable).map(motherboard -> brokenMapper.map(motherboard)));
        broken.put("OpticalUnit", opticalUnitRepository.findAllByState(state, pageable).map(opticalUnit -> brokenMapper.map(opticalUnit)));
        broken.put("PowerSource", powerSourceRepository.findAllByState(state, pageable).map(powerSource -> brokenMapper.map(powerSource)));
        broken.put("Processor", processorRepository.findAllByState(state, pageable).map(processor -> brokenMapper.map(processor)));
        broken.put("SoundCard", soundCardRepository.findAllByState(state, pageable).map(soundCard -> brokenMapper.map(soundCard)));
        broken.put("Storage", storageRepository.findAllByState(state, pageable).map(storage -> brokenMapper.map(storage)));
        broken.put("VideoCard", videoCardRepository.findAllByState(state, pageable).map(videoCard -> brokenMapper.map(videoCard)));

        return broken;
    }

    private static Map<String, Object> pagination(List<Object> objectList, int page, int size){
        Map<String, Object> t = new HashMap<>();

        t.put("totalElements", objectList.size());

        objectList.stream()
            .skip(page * size)
            .limit(size)
            .collect(toList());

        t.put("content", objectList);

        return t;
    }


}
