package com.app.brc.brandcomputer.components.optical_unit.service;

import com.app.brc.brandcomputer.components.optical_unit.dto.OpticalUnitDTO;
import com.app.brc.brandcomputer.components.optical_unit.mapper.OpticalUnitMapper;
import com.app.brc.brandcomputer.components.optical_unit.repository.OpticalUnitRepository;
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
public class OpticalUnitService {

    private OpticalUnitRepository opticalUnitRepository;
    private OpticalUnitMapper opticalUnitMapper;

    @Autowired
    public OpticalUnitService(OpticalUnitRepository opticalUnitRepository, OpticalUnitMapper opticalUnitMapper) {
        this.opticalUnitRepository = opticalUnitRepository;
        this.opticalUnitMapper = opticalUnitMapper;
    }

    public Page<OpticalUnitDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return opticalUnitRepository.multiMatchQuery(query, pageable)
                .map(opticalUnit -> opticalUnitMapper.map(opticalUnit));
    }

    public Page<OpticalUnitDTO> getAllOpticalUnits(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return opticalUnitRepository.findAllByOrderByIdDesc(pageable)
                .map(opticalUnit -> opticalUnitMapper.map(opticalUnit));
    }

    public List<String> getAllTypes() {
        return opticalUnitRepository.findAllDistinctTypes();
    }

    public List<String> getAllManufacturers() {
        return opticalUnitRepository.findAllDistinctManufacturers();
    }

    public Page<OpticalUnitDTO> getOpticalUnitsByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return opticalUnitRepository.findAllByGenerateProductCodeOpticalUnit(opticalUnitRepository.findByProductCode(productCode),pageable)
                .map(opticalUnit -> opticalUnitMapper.map(opticalUnit));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<OpticalUnitDTO> stockList = new ArrayList<>();

        opticalUnitRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            OpticalUnitDTO opticalUnitDTO = OpticalUnitDTO.builder()
                    .generateProductCode(opticalUnitRepository.findByProductCode(s))
                    .averagePrice(opticalUnitRepository.averagePriceByProductCode(s))
                    .stock(opticalUnitRepository.sumAllByGenerateProductCodeOpticalUnit(s))
                    .build();
            stockList.add(opticalUnitDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", opticalUnitRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", opticalUnitRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStocksByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<OpticalUnitDTO> searchStockList = new ArrayList<>();

        opticalUnitRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            OpticalUnitDTO opticalUnitDTO = OpticalUnitDTO.builder()
                    .generateProductCode(opticalUnitRepository.findByProductCode(s))
                    .averagePrice(opticalUnitRepository.averagePriceByProductCode(s))
                    .stock(opticalUnitRepository.sumAllByGenerateProductCodeOpticalUnit(s))
                    .build();
            searchStockList.add(opticalUnitDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", opticalUnitRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", opticalUnitRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<OpticalUnitDTO> filterOpticalUnit(List<String> manufacturer, List<String> type, List<String> state, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return opticalUnitRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()){
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (type != null && !type.isEmpty()){
                predicates.add(root.get("type").in(type));
            }

            if (state !=null && !state.isEmpty()){
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(opticalUnit -> opticalUnitMapper.map(opticalUnit));
    }

    public void addOpticalUnit(OpticalUnitDTO opticalUnitDTO) {
        opticalUnitDTO.setCategory("Optical Unit");
        opticalUnitDTO.setReceived(false);
        opticalUnitRepository.save(opticalUnitMapper.map(opticalUnitDTO));
    }

    public void updateOpticalUnit(OpticalUnitDTO opticalUnitDTO, int id) {
        opticalUnitMapper.set(id, opticalUnitDTO);
    }

    public void deleteOpticalUnit(int id) {
        opticalUnitRepository.deleteById(id);
    }
}
