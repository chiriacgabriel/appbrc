package com.app.brc.brandcomputer.accounting.nir.mapper;

import com.app.brc.brandcomputer.accounting.nir.dto.NirDTO;
import com.app.brc.brandcomputer.accounting.nir.model.Nir;
import com.app.brc.brandcomputer.accounting.nir.repository.NirRepository;
import com.app.brc.brandcomputer.components.casing.mapper.CaseMapper;
import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.casing.repository.CaseRepository;
import com.app.brc.brandcomputer.components.cpu_cooler.mapper.CpuCoolerMapper;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.CpuCoolerRepository;
import com.app.brc.brandcomputer.components.fan_case.mapper.FanCaseMapper;
import com.app.brc.brandcomputer.components.fan_case.repository.FanCaseRepository;
import com.app.brc.brandcomputer.components.memory_ram.mapper.MemoryRamMapper;
import com.app.brc.brandcomputer.components.memory_ram.repository.MemoryRamRepository;
import com.app.brc.brandcomputer.components.motherboard.mapper.MotherboardMapper;
import com.app.brc.brandcomputer.components.motherboard.repository.MotherboardRepository;
import com.app.brc.brandcomputer.components.optical_unit.mapper.OpticalUnitMapper;
import com.app.brc.brandcomputer.components.optical_unit.repository.OpticalUnitRepository;
import com.app.brc.brandcomputer.components.powersource.mapper.PowerSourceMapper;
import com.app.brc.brandcomputer.components.powersource.repository.PowerSourceRepository;
import com.app.brc.brandcomputer.components.processor.mapper.ProcessorMapper;
import com.app.brc.brandcomputer.components.processor.repository.ProcessorRepository;
import com.app.brc.brandcomputer.components.sound_card.mapper.SoundCardMapper;
import com.app.brc.brandcomputer.components.sound_card.repository.SoundCardRepository;
import com.app.brc.brandcomputer.components.storage.mapper.StorageMapper;
import com.app.brc.brandcomputer.components.storage.repository.StorageRepository;
import com.app.brc.brandcomputer.components.video_card.mapper.VideoCardMapper;
import com.app.brc.brandcomputer.components.video_card.repository.VideoCardRepository;
import com.app.brc.brandcomputer.computers.mapper.ComputerMapper;
import com.app.brc.brandcomputer.computers.repository.ComputerRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotNull;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NirMapper {
    private NirRepository nirRepository;
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
    private ComputerRepository computerRepository;
    private CaseMapper caseMapper;
    private CpuCoolerMapper cpuCoolerMapper;
    private FanCaseMapper fanCaseMapper;
    private MemoryRamMapper memoryRamMapper;
    private MotherboardMapper motherboardMapper;
    private OpticalUnitMapper opticalUnitMapper;
    private PowerSourceMapper powerSourceMapper;
    private ProcessorMapper processorMapper;
    private SoundCardMapper soundCardMapper;
    private StorageMapper storageMapper;
    private VideoCardMapper videoCardMapper;
    private ComputerMapper computerMapper;

    public NirMapper(NirRepository nirRepository, CaseRepository caseRepository, CpuCoolerRepository cpuCoolerRepository,
                     FanCaseRepository fanCaseRepository, MemoryRamRepository memoryRamRepository,
                     MotherboardRepository motherboardRepository, OpticalUnitRepository opticalUnitRepository,
                     PowerSourceRepository powerSourceRepository, ProcessorRepository processorRepository,
                     SoundCardRepository soundCardRepository, StorageRepository storageRepository,
                     VideoCardRepository videoCardRepository, ComputerRepository computerRepository,
                     CaseMapper caseMapper, CpuCoolerMapper cpuCoolerMapper, FanCaseMapper fanCaseMapper,
                     MemoryRamMapper memoryRamMapper, MotherboardMapper motherboardMapper,
                     OpticalUnitMapper opticalUnitMapper, PowerSourceMapper powerSourceMapper,
                     ProcessorMapper processorMapper, SoundCardMapper soundCardMapper, StorageMapper storageMapper,
                     VideoCardMapper videoCardMapper, ComputerMapper computerMapper) {
        this.nirRepository = nirRepository;
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
        this.computerRepository = computerRepository;
        this.caseMapper = caseMapper;
        this.cpuCoolerMapper = cpuCoolerMapper;
        this.fanCaseMapper = fanCaseMapper;
        this.memoryRamMapper = memoryRamMapper;
        this.motherboardMapper = motherboardMapper;
        this.opticalUnitMapper = opticalUnitMapper;
        this.powerSourceMapper = powerSourceMapper;
        this.processorMapper = processorMapper;
        this.soundCardMapper = soundCardMapper;
        this.storageMapper = storageMapper;
        this.videoCardMapper = videoCardMapper;
        this.computerMapper = computerMapper;
    }

    public Nir map(NirDTO nirDTO) {
        return Nir.builder()
                .companyData(nirDTO.getCompanyData())
                .nirNumber(nirDTO.getNirNumber())
                .date(nirDTO.getDate())
                .administration(nirDTO.getAdministration())
                .provider(nirDTO.getProvider())
                .invoiceNumber(nirDTO.getInvoiceNumber())
                .caseList(nirDTO.getCaseList())
                .cpuCoolerList(nirDTO.getCpuCoolerList())
                .fanCaseList(nirDTO.getFanCaseList())
                .memoryRamList(nirDTO.getMemoryRamList())
                .motherboardList(nirDTO.getMotherboardList())
                .opticalUnitList(nirDTO.getOpticalUnitList())
                .powerSourceList(nirDTO.getPowerSourceList())
                .processorList(nirDTO.getProcessorList())
                .soundCardList(nirDTO.getSoundCardList())
                .storageList(nirDTO.getStorageList())
                .videoCardList(nirDTO.getVideoCardList())
                .computerList(nirDTO.getComputerList())
                .debitAccount(nirDTO.getDebitAccount())
                .totalValue(nirDTO.getTotalValue())
                .vat(nirDTO.getVat())
                .build();
    }

    public NirDTO map(Nir nir) {
        return NirDTO.builder()
                .id(nir.getId())
                .companyData(nir.getCompanyData())
                .nirNumber(nir.getNirNumber())
                .date(nir.getDate())
                .administration(nir.getAdministration())
                .provider(nir.getProvider())
                .invoiceNumber(nir.getInvoiceNumber())
                .caseList(nir.getCaseList())
                .cpuCoolerList(nir.getCpuCoolerList())
                .fanCaseList(nir.getFanCaseList())
                .memoryRamList(nir.getMemoryRamList())
                .motherboardList(nir.getMotherboardList())
                .opticalUnitList(nir.getOpticalUnitList())
                .powerSourceList(nir.getPowerSourceList())
                .processorList(nir.getProcessorList())
                .soundCardList(nir.getSoundCardList())
                .storageList(nir.getStorageList())
                .videoCardList(nir.getVideoCardList())
                .computerList(nir.getComputerList())
                .debitAccount(nir.getDebitAccount())
                .totalValue(nir.getTotalValue())
                .vat(nir.getVat())
                .build();
    }

    public void set(int id, NirDTO nirDTO) {
        Optional<Nir> optional = nirRepository.findById(id);
        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "NIR not found !");
        }
        Nir dbNir = optional.get();
        dbNir.setCompanyData(nirDTO.getCompanyData());
        dbNir.setNirNumber(nirDTO.getNirNumber());
        dbNir.setDate(nirDTO.getDate());
        dbNir.setAdministration(nirDTO.getAdministration());
        dbNir.setProvider(nirDTO.getProvider());
        dbNir.setInvoiceNumber(nirDTO.getInvoiceNumber());
        dbNir.setCaseList(nirDTO.getCaseList());
        dbNir.setCpuCoolerList(nirDTO.getCpuCoolerList());
        dbNir.setFanCaseList(nirDTO.getFanCaseList());
        dbNir.setMemoryRamList(nirDTO.getMemoryRamList());
        dbNir.setMotherboardList(nirDTO.getMotherboardList());
        dbNir.setOpticalUnitList(nirDTO.getOpticalUnitList());
        dbNir.setPowerSourceList(nirDTO.getPowerSourceList());
        dbNir.setProcessorList(nirDTO.getProcessorList());
        dbNir.setSoundCardList(nirDTO.getSoundCardList());
        dbNir.setStorageList(nirDTO.getStorageList());
        dbNir.setVideoCardList(nirDTO.getVideoCardList());
        dbNir.setComputerList(nirDTO.getComputerList());
        dbNir.setDebitAccount(nirDTO.getDebitAccount());
        nirRepository.save(dbNir);
    }

    public List<Object> getAllUnreceived() {
        List<Object> objectList = new ArrayList<>();
        objectList.addAll(caseRepository.findAllUnreceived().stream().map(aCase -> caseMapper.map(aCase)).collect(Collectors.toList()));
        objectList.addAll(cpuCoolerRepository.findAllUnreceived().stream().map(cpuCooler -> cpuCoolerMapper.map(cpuCooler)).collect(Collectors.toList()));
        objectList.addAll(fanCaseRepository.findAllUnreceived().stream().map(fanCase -> fanCaseMapper.map(fanCase)).collect(Collectors.toList()));
        objectList.addAll(memoryRamRepository.findAllUnreceived().stream().map(memoryRam -> memoryRamMapper.map(memoryRam)).collect(Collectors.toList()));
        objectList.addAll(motherboardRepository.findAllUnreceived().stream().map(motherboard -> motherboardMapper.map(motherboard)).collect(Collectors.toList()));
        objectList.addAll(opticalUnitRepository.findAllUnreceived().stream().map(opticalUnit -> opticalUnitMapper.map(opticalUnit)).collect(Collectors.toList()));
        objectList.addAll(powerSourceRepository.findAllUnreceived().stream().map(powerSource -> powerSourceMapper.map(powerSource)).collect(Collectors.toList()));
        objectList.addAll(processorRepository.findAllUnreceived().stream().map(processor -> processorMapper.map(processor)).collect(Collectors.toList()));
        objectList.addAll(soundCardRepository.findAllUnreceived().stream().map(soundCard -> soundCardMapper.map(soundCard)).collect(Collectors.toList()));
        objectList.addAll(storageRepository.findAllUnreceived().stream().map(storage -> storageMapper.map(storage)).collect(Collectors.toList()));
        objectList.addAll(videoCardRepository.findAllUnreceived().stream().map(videoCard -> videoCardMapper.map(videoCard)).collect(Collectors.toList()));
        objectList.addAll(computerRepository.findAllUnreceived().stream().map(computer -> computerMapper.map(computer)).collect(Collectors.toList()));

        return objectList;
    }

    public void setReceived(NirDTO nirDTO) {

        nirDTO.getCaseList().forEach(obj -> setReceived(obj, caseRepository, obj.getId()));
        nirDTO.getCpuCoolerList().forEach(obj -> setReceived(obj, cpuCoolerRepository, obj.getId()));
        nirDTO.getFanCaseList().forEach(obj -> setReceived(obj, fanCaseRepository, obj.getId()));
        nirDTO.getMemoryRamList().forEach(obj -> setReceived(obj, memoryRamRepository, obj.getId()));
        nirDTO.getMotherboardList().forEach(obj -> setReceived(obj, motherboardRepository, obj.getId()));
        nirDTO.getOpticalUnitList().forEach(obj -> setReceived(obj, opticalUnitRepository, obj.getId()));
        nirDTO.getPowerSourceList().forEach(obj -> setReceived(obj, powerSourceRepository, obj.getId()));
        nirDTO.getProcessorList().forEach(obj -> setReceived(obj, processorRepository, obj.getId()));
        nirDTO.getSoundCardList().forEach(obj -> setReceived(obj, soundCardRepository, obj.getId()));
        nirDTO.getStorageList().forEach(obj -> setReceived(obj, storageRepository, obj.getId()));
        nirDTO.getVideoCardList().forEach(obj -> setReceived(obj, videoCardRepository, obj.getId()));
        nirDTO.getComputerList().forEach(obj -> setReceived(obj, computerRepository, obj.getId()));

    }

    //setReceived is a setter from the OBJECT passed
    private <T> void setReceived(T t, JpaRepository jpa, int id) {
        Optional<T> optionalObject = jpa.findById(id);
        try{
            Method setReceived = optionalObject.get().getClass().getDeclaredMethod("setReceived", boolean.class);
            setReceived.invoke(optionalObject.get(), true);
        }catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e){
            e.printStackTrace();
        }
        jpa.save(optionalObject.get());
    }

}
