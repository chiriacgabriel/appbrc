package com.app.brc.brandcomputer.computers.services;

import com.app.brc.brandcomputer.computers.dto.ComputerDTO;
import com.app.brc.brandcomputer.computers.mapper.ComputerMapper;
import com.app.brc.brandcomputer.computers.repository.ComputerRepository;
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
public class ComputerService {

    private ComputerRepository computerRepository;
    private ComputerMapper computerMapper;

    @Autowired
    public ComputerService(ComputerRepository computerRepository, ComputerMapper computerMapper) {
        this.computerRepository = computerRepository;
        this.computerMapper = computerMapper;
    }

    public Page<ComputerDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return computerRepository.multiMatchQuery(query, pageable)
                .map(computer -> computerMapper.map(computer));

    }

    public Page<ComputerDTO> getAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return computerRepository.findAllByOrderByIdDesc(pageable)
                .map(computer -> computerMapper.map(computer));
    }


    public Page<ComputerDTO> getByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return computerRepository.findAllByGenerateProductCode(computerRepository.findByProductCode(productCode), pageable)
                .map(computer -> computerMapper.map(computer));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<ComputerDTO> stockList = new ArrayList<>();

        computerRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            ComputerDTO computerDTO = ComputerDTO.builder()
                    .generateProductCode(computerRepository.findByProductCode(s))
                    .averagePrice(computerRepository.averagePriceByProductCode(s))
                    .stock(computerRepository.sumAllByGenerateProductCode(s))
                    .build();
            stockList.add(computerDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", computerRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", computerRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }


    public Map<String, Object> searchStockByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<ComputerDTO> stockList = new ArrayList<>();

        computerRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            ComputerDTO computerDTO = ComputerDTO.builder()
                    .generateProductCode(computerRepository.findByProductCode(s))
                    .averagePrice(computerRepository.averagePriceByProductCode(s))
                    .stock(computerRepository.sumAllByGenerateProductCode(s))
                    .build();
            stockList.add(computerDTO);
        });

        searchStockByProductCode.put("content", stockList);
        searchStockByProductCode.put("totalElements", computerRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", computerRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Map<String, Object> getAllDataForFilter() {
        Map<String, Object> dataMap = new HashMap<>();

        dataMap.put("cpuModel", computerRepository.findAllDistinctCpuModel());
        dataMap.put("memoryCapacity", computerRepository.findAllDistinctMemoryCapacity());
        dataMap.put("storageCapacity", computerRepository.findAllDistinctStorageCapacity());
        dataMap.put("manufacturer", computerRepository.findAllDistinctManufacturer());
        dataMap.put("form", computerRepository.findAllDistinctForm());

        return dataMap;
    }

    public Page<ComputerDTO> getComputersDismantled(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return computerRepository.findAllDismantled(pageable)
                .map(computer -> computerMapper.map(computer));
    }

    public Page<ComputerDTO> filterComputer(List<String> cpuModel,
                                            List<String> memoryCapacity, List<String> storageCapacity,
                                            List<Boolean> opticalUnitExist, List<Boolean> videoCardExist,
                                            List<String> manufacturer, List<String> form, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

       return computerRepository.findAll((root, criteriaQuery, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (cpuModel != null && !cpuModel.isEmpty()){
                predicates.add(root.get("cpuModel").in(cpuModel));
            }

            if (memoryCapacity != null && !memoryCapacity.isEmpty()){
                predicates.add(root.get("memoryCapacity").in(memoryCapacity));
            }

            if (storageCapacity != null && !storageCapacity.isEmpty()){
                predicates.add(root.get("storageCapacity").in(storageCapacity));
            }

            if (opticalUnitExist != null && !opticalUnitExist.isEmpty()){
                predicates.add(root.get("opticalUnitExist").in(opticalUnitExist));
            }

            if (videoCardExist != null && !videoCardExist.isEmpty()){
                predicates.add(root.get("videoCardExist").in(videoCardExist));
            }

            if (manufacturer != null && !manufacturer.isEmpty()){
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (form != null && !form.isEmpty()){
                predicates.add(root.get("form").in(form));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(computer -> computerMapper.map(computer));
    }

    public void add(ComputerDTO computerDTO) {
        computerDTO.setDismantled(false);
        computerDTO.setReceived(false);
        computerDTO.setCategory("Computer");

        computerRepository.save(computerMapper.map(computerDTO));
    }

    public void update(int id, ComputerDTO computerDTO) {
        computerMapper.set(id, computerDTO);
    }

    public void delete(int id) {
        computerRepository.deleteById(id);
    }

}
