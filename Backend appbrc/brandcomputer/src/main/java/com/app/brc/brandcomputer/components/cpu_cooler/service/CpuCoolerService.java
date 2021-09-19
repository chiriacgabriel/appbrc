package com.app.brc.brandcomputer.components.cpu_cooler.service;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.CpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.mapper.CpuCoolerMapper;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.CpuCoolerRepository;
import com.app.brc.brandcomputer.components.cpu_cooler.validator.CpuCoolerValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.*;

@Service
public class CpuCoolerService {

    private CpuCoolerRepository cpuCoolerRepository;
    private CpuCoolerMapper cpuCoolerMapper;
    private CpuCoolerValidator cpuCoolerValidator;

    @Autowired
    public CpuCoolerService(CpuCoolerRepository cpuCoolerRepository, CpuCoolerMapper cpuCoolerMapper,
                            CpuCoolerValidator cpuCoolerValidator) {
        this.cpuCoolerRepository = cpuCoolerRepository;
        this.cpuCoolerMapper = cpuCoolerMapper;
        this.cpuCoolerValidator = cpuCoolerValidator;
    }

    public Page<CpuCoolerDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return cpuCoolerRepository.multiMatchQuery(query, pageable)
                .map(cpuCooler -> cpuCoolerMapper.map(cpuCooler));
    }

    public Page<CpuCoolerDTO> getAllCpuCoolers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return cpuCoolerRepository.findAllByOrderByIdDesc(pageable)
                .map(cpuCooler -> cpuCoolerMapper.map(cpuCooler));
    }

    public List<String> getAllSockets() {
        return cpuCoolerRepository.findAllDistinctSockets();
    }

    public List<String> getAllManufacturers() {
        return cpuCoolerRepository.findAllDistinctManufacturers();
    }

    public Page<CpuCoolerDTO> getCpuCoolersByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return cpuCoolerRepository.findAllByGenerateProductCode(cpuCoolerRepository.findByProductCode(productCode), pageable)
                .map(cpuCooler -> cpuCoolerMapper.map(cpuCooler));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode= new HashMap<>();
        List<CpuCoolerDTO> stockList = new ArrayList<>();

        cpuCoolerRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            CpuCoolerDTO cpuCoolerDTO = CpuCoolerDTO.builder()
                    .generateProductCode(cpuCoolerRepository.findByProductCode(s))
                    .averagePrice(cpuCoolerRepository.averagePriceByProductCode(s))
                    .stock(cpuCoolerRepository.sumAllByGenerateProductCode(s))
                    .build();
            stockList.add(cpuCoolerDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", cpuCoolerRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", cpuCoolerRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStocksByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<CpuCoolerDTO> searchStockList = new ArrayList<>();

        cpuCoolerRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            CpuCoolerDTO cpuCoolerDTO = CpuCoolerDTO.builder()
                    .generateProductCode(cpuCoolerRepository.findByProductCode(s))
                    .averagePrice(cpuCoolerRepository.averagePriceByProductCode(s))
                    .stock(cpuCoolerRepository.sumAllByGenerateProductCode(s))
                    .build();
            searchStockList.add(cpuCoolerDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", cpuCoolerRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", cpuCoolerRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<CpuCoolerDTO> filterCpuCooler(List<String> manufacturer, List<String> socket, List<String> state, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return cpuCoolerRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()){
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (socket != null && !socket.isEmpty()){
                predicates.add(root.get("socket").in(socket));
            }

            if (state != null && !state.isEmpty()){
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(cpuCooler -> cpuCoolerMapper.map(cpuCooler));
    }

    public void addCpuCooler(CpuCoolerDTO cpuCoolerDTO) {
        cpuCoolerDTO.setCategory("CPU Cooler");
        cpuCoolerDTO.setReceived(false);

        do{
            cpuCoolerDTO.setSerialNumber("CPU_COOLER" + new Random().nextInt(1_000_000));
        }while (cpuCoolerValidator.validateSerialNumber(cpuCoolerDTO));

        cpuCoolerRepository.save(cpuCoolerMapper.map(cpuCoolerDTO));
    }

    public void updateCpuCooler(CpuCoolerDTO cpuCoolerDTO, int id) {
        cpuCoolerMapper.set(cpuCoolerDTO, id);
    }

    public void deleteCase(int id) {
        cpuCoolerRepository.deleteById(id);
    }
}
