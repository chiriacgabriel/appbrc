package com.app.brc.brandcomputer.components.processor.service;

import com.app.brc.brandcomputer.components.processor.dto.ProcessorDTO;
import com.app.brc.brandcomputer.components.processor.mapper.ProcessorMapper;
import com.app.brc.brandcomputer.components.processor.repository.ProcessorRepository;
import com.app.brc.brandcomputer.components.processor.validator.ProcessorValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.*;

@Service
public class ProcessorService {

    private ProcessorRepository processorRepository;
    private ProcessorMapper processorMapper;
    private ProcessorValidator processorValidator;

    @Autowired
    public ProcessorService(ProcessorRepository processorRepository, ProcessorMapper processorMapper, ProcessorValidator processorValidator) {
        this.processorRepository = processorRepository;
        this.processorMapper = processorMapper;
        this.processorValidator = processorValidator;
    }

    public Page<ProcessorDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return processorRepository.multiMatchQuery(query, pageable)
                .map(processor -> processorMapper.map(processor));
    }

    public Page<ProcessorDTO> getAllProcessors(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return processorRepository.findAllByOrderByIdDesc(pageable)
                .map(processor -> processorMapper.map(processor));
    }

    public List<String> getAllManufacturers() {
        return processorRepository.findAllDistinctManufacturers();
    }

    public List<String> getAllSockets() {
        return processorRepository.findAllDistinctSockets();
    }

    public List<String> getAllModels() {
        return processorRepository.findAllDistinctModels();
    }

    public List<Integer> getAllBaseClocks() {
        return processorRepository.findAllDistinctBaseClocks();
    }

    public List<Integer> getAllMaxBoostClocks() {
        return processorRepository.findAllDistinctMaxBoostClocks();
    }

    public List<Integer> getAllMaxMemoryFrequencies() {
        return processorRepository.findAllDistinctMaxMemoryFrequencies();
    }

    public List<Integer> getAllLithography() {
        return processorRepository.findAllDistinctLithography();
    }

    public List<Integer> getAllNumbersOfCpuCores() {
        return processorRepository.findAllDistinctNumbersOfCpuCores();
    }

    public List<Integer> getAllNumbersOfThreads() {
        return processorRepository.findAllDistinctNumbersOfThreads();
    }

    public List<String> getAllTypesOfMemoryRam() {
        return processorRepository.findAllDistinctTypesOfMemory();
    }

    public Page<ProcessorDTO> getProcessorsByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return processorRepository.findAllByGenerateProductCode(processorRepository.findByProductCode(productCode), pageable)
                .map(processor -> processorMapper.map(processor));
    }


    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<ProcessorDTO> stockList = new ArrayList<>();

        processorRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            ProcessorDTO processorDTO = ProcessorDTO.builder()
                    .generateProductCode(processorRepository.findByProductCode(s))
                    .averagePrice(processorRepository.averagePriceByProductCode(s))
                    .stock(processorRepository.sumAllByGenerateProductCode(s))
                    .build();
            stockList.add(processorDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", processorRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", processorRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStocksByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<ProcessorDTO> searchStockList = new ArrayList<>();

        processorRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            ProcessorDTO processorDTO = ProcessorDTO.builder()
                    .generateProductCode(processorRepository.findByProductCode(s))
                    .averagePrice(processorRepository.averagePriceByProductCode(s))
                    .stock(processorRepository.sumAllByGenerateProductCode(s))
                    .build();
            searchStockList.add(processorDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", processorRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", processorRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<ProcessorDTO> filterProcessor(List<String> manufacturer, List<String> socket, List<String> model,
                                              List<Integer> baseClock, List<Integer> maxBoostClock, List<Integer> maxMemoryFrequency, List<String> typeOfMemoryRam,
                                              List<Integer> numberOfCpuCores, List<Integer> numberOfThreads, List<Integer> lithography, List<String> state, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return processorRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()){
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (socket != null && !socket.isEmpty()){
                predicates.add(root.get("socket").in(socket));
            }

            if (model != null && !model.isEmpty()){
                predicates.add(root.get("model").in(model));
            }

            if (baseClock != null && !baseClock.isEmpty()){
                predicates.add(root.get("baseClock").in(baseClock));
            }

            if (maxBoostClock != null && !maxBoostClock.isEmpty()){
                predicates.add(root.get("maxBoostClock").in(maxBoostClock));
            }

            if (maxMemoryFrequency != null && !maxMemoryFrequency.isEmpty()){
                predicates.add(root.get("maxMemoryFrequency").in(maxMemoryFrequency));
            }

            if (typeOfMemoryRam != null && !typeOfMemoryRam.isEmpty()){
                predicates.add(root.get("typeOfMemoryRAM").in(typeOfMemoryRam));
            }

            if (numberOfCpuCores != null && !numberOfCpuCores.isEmpty()){
                predicates.add(root.get("numberOfCpuCores").in(numberOfCpuCores));
            }

            if (numberOfThreads != null && !numberOfThreads.isEmpty()){
                predicates.add(root.get("numberOfThreads").in(numberOfThreads));
            }

            if (lithography != null && !lithography.isEmpty()){
                predicates.add(root.get("lithography").in(lithography));
            }

            if (state != null && !state.isEmpty()){
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(processor -> processorMapper.map(processor));
    }

    public void addProcessor(ProcessorDTO processorDTO) {
        processorDTO.setCategory("Processor");
        processorDTO.setReceived(false);

        do {
            processorDTO.setSerialNumber("CPU_" + processorDTO.getSocket() + new Random().nextInt(1_000_000));
        } while (processorValidator.validateSerialNumber(processorDTO.getSerialNumber()));
        processorRepository.save(processorMapper.map(processorDTO));
    }

    public void updateProcessor(ProcessorDTO processorDTO, int id) {
        processorMapper.set(id, processorDTO);
    }

    public void deleteProcessor(int id) {
        processorRepository.deleteById(id);
    }



}
