package com.app.brc.brandcomputer.components.memory_ram.service;

import com.app.brc.brandcomputer.components.memory_ram.dto.MemoryRamDTO;
import com.app.brc.brandcomputer.components.memory_ram.mapper.MemoryRamMapper;
import com.app.brc.brandcomputer.components.memory_ram.repository.MemoryRamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MemoryRamService {

    private MemoryRamRepository memoryRamRepository;
    private MemoryRamMapper memoryRamMapper;

    @Autowired
    public MemoryRamService(MemoryRamRepository memoryRamRepository,
                            MemoryRamMapper memoryRamMapper) {
        this.memoryRamRepository = memoryRamRepository;
        this.memoryRamMapper = memoryRamMapper;
    }

    public Page<MemoryRamDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return memoryRamRepository.multiMatchQuery(query, pageable)
                .map(ramMemory -> memoryRamMapper.map(ramMemory));
    }

    public Page<MemoryRamDTO> getAllRams(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return memoryRamRepository.findAllByOrderByIdDesc(pageable)
                .map(memoryRam -> memoryRamMapper.map(memoryRam)) ;
    }

    public List<String> getAllManufacturers() {
        return memoryRamRepository.findAllDistinctManufacturers();
    }

    public List<String> getAllModules() {
        return memoryRamRepository.findAllDistinctModules();
    }

    public List<String> getAllRamTypes() {
        return memoryRamRepository.findAllDistinctRamTypes();
    }

    public List<String > getAllFrequencies() {
        return memoryRamRepository.findAllDistinctFrequencies();
    }

    public List<String> getAllCapacities() {
        return memoryRamRepository.findAllDistinctCapacities();
    }

    public Page<MemoryRamDTO> getMemoryRamByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return memoryRamRepository.findAllByGenerateProductCode(memoryRamRepository.findByProductCode(productCode), pageable)
                .map(memoryRam -> memoryRamMapper.map(memoryRam));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode= new HashMap<>();
        List<MemoryRamDTO> stockList = new ArrayList<>();

        memoryRamRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            MemoryRamDTO memoryRamDTO = MemoryRamDTO.builder()
                    .generateProductCode(memoryRamRepository.findByProductCode(s))
                    .averagePrice(memoryRamRepository.averagePriceByProductCode(s))
                    .stock(memoryRamRepository.sumAllByGenerateProductCode(s))
                    .build();
            stockList.add(memoryRamDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", memoryRamRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", memoryRamRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStocksByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<MemoryRamDTO> searchStockList = new ArrayList<>();

        memoryRamRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            MemoryRamDTO memoryRamDTO = MemoryRamDTO.builder()
                    .generateProductCode(memoryRamRepository.findByProductCode(s))
                    .averagePrice(memoryRamRepository.averagePriceByProductCode(s))
                    .stock(memoryRamRepository.sumAllByGenerateProductCode(s))
                    .build();
            searchStockList.add(memoryRamDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", memoryRamRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", memoryRamRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<MemoryRamDTO> filterMemoryRam(List<String> manufacturer,
                                              List<String> module,
                                              List<String> ramType,
                                              List<String> frequency,
                                              List<String> capacity,
                                              List<String> state,
                                              int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return memoryRamRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()){
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (module != null && !module.isEmpty()){
                predicates.add(root.get("module").in(module));
            }

            if (ramType != null && !ramType.isEmpty()){
                predicates.add(root.get("ramType").in(ramType));
            }

            if (frequency != null && !frequency.isEmpty()){
                predicates.add(root.get("frequency").in(frequency));
            }

            if(capacity != null && !capacity.isEmpty()){
                predicates.add(root.get("capacity").in(capacity));
            }
            if (state != null && !state.isEmpty()){
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(memoryRam -> memoryRamMapper.map(memoryRam));
    }

    public void addMemoryRam(MemoryRamDTO memoryRamDTO) {
        memoryRamDTO.setCategory("Memory RAM");
        memoryRamDTO.setReceived(false);
        memoryRamRepository.save(memoryRamMapper.map(memoryRamDTO));
    }

    public void updateMemoryRam(MemoryRamDTO memoryRamDTO, int id) {
        memoryRamMapper.set(memoryRamDTO, id);
    }

    public void deleteMemoryRam(int id) {
        memoryRamRepository.deleteById(id);
    }
}
