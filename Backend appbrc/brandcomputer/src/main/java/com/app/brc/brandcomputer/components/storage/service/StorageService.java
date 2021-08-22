package com.app.brc.brandcomputer.components.storage.service;

import com.app.brc.brandcomputer.components.storage.dto.StorageDTO;
import com.app.brc.brandcomputer.components.storage.mapper.StorageMapper;
import com.app.brc.brandcomputer.components.storage.repository.StorageRepository;
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
public class StorageService {

    private final StorageRepository storageRepository;
    private final StorageMapper storageMapper;

    @Autowired
    public StorageService(StorageRepository storageRepository, StorageMapper storageMapper) {
        this.storageRepository = storageRepository;
        this.storageMapper = storageMapper;
    }

    public Page<StorageDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return storageRepository.multiMatchQuery(query, pageable)
                .map(storage -> storageMapper.map(storage));
    }

    public Page<StorageDTO> getAllStorages(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return storageRepository.findAllByOrderByIdDesc(pageable)
                .map(storage -> storageMapper.map(storage));
    }

    public List<String> getAllManufacturers() {
        return storageRepository.findAllDistinctManufacturers();
    }

    public List<String> getAllTypes() {
        return storageRepository.findAllDistinctTypes();
    }

    public List<String> getAllForms() {
        return storageRepository.findAllDistinctForms();
    }

    public List<Integer> getAllCapacities() {
        return storageRepository.findAllCapacities();
    }

    public List<Integer> getAllRPMs() {
        return storageRepository.findAllRPMs();
    }

    public Page<StorageDTO> filterStorage(List<String> manufacturer, List<String> type, List<String> form,
                                          List<Integer> capacity, List<Integer> rpm, List<String> state,
                                          int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return storageRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()) {
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (type != null && !type.isEmpty()) {
                predicates.add(root.get("type").in(type));
            }

            if (form != null && !form.isEmpty()) {
                predicates.add(root.get("form").in(form));
            }

            if (capacity != null && !capacity.isEmpty()) {
                predicates.add(root.get("capacity").in(capacity));
            }
            if (rpm != null && !rpm.isEmpty()) {
                predicates.add(root.get("rpm").in(rpm));
            }

            if (state != null && !state.isEmpty()) {
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(storage -> storageMapper.map(storage));
    }

    public Page<StorageDTO> getStoragesByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return storageRepository.findAllByGenerateProductCodeStorage(storageRepository.findByProductCode(productCode), pageable)
                .map(storage -> storageMapper.map(storage));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<StorageDTO> stockList = new ArrayList<>();

        storageRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            StorageDTO storageDTO = StorageDTO.builder()
                    .generateProductCode(storageRepository.findByProductCode(s))
                    .averagePrice(storageRepository.averagePriceByProductCode(s))
                    .stock(storageRepository.sumAllByGenerateProductCodeStorage(s))
                    .build();
            stockList.add(storageDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", storageRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", storageRepository.findAllDistinctProductCodes(pageable).getTotalPages());
        return stockByProductCode;
    }

    public Map<String, Object> searchStocksByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<StorageDTO> searchStockList = new ArrayList<>();

        storageRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            StorageDTO storageDTO = StorageDTO.builder()
                    .generateProductCode(storageRepository.findByProductCode(s))
                    .averagePrice(storageRepository.averagePriceByProductCode(s))
                    .stock(storageRepository.sumAllByGenerateProductCodeStorage(s))
                    .build();
            searchStockList.add(storageDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", storageRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", storageRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public void addStorage(StorageDTO storageDTO) {
        storageDTO.setCategory("Storage");
        storageDTO.setReceived(false);
        storageRepository.save(storageMapper.map(storageDTO));
    }

    public void updateStorage(StorageDTO storageDTO, int id) {
        storageMapper.set(id, storageDTO);
    }

    public void deleteStorage(int id) {
        storageRepository.deleteById(id);
    }
}
