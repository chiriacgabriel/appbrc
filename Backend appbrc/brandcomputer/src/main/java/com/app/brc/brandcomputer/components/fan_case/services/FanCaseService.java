package com.app.brc.brandcomputer.components.fan_case.services;

import com.app.brc.brandcomputer.components.fan_case.dto.FanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.mapper.FanCaseMapper;
import com.app.brc.brandcomputer.components.fan_case.repository.FanCaseRepository;
import com.app.brc.brandcomputer.components.fan_case.validator.FanCaseValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.*;

@Service
public class FanCaseService {

    private FanCaseRepository fanCaseRepository;
    private FanCaseMapper fanCaseMapper;
    private FanCaseValidator fanCaseValidator;

    @Autowired
    public FanCaseService(FanCaseRepository fanCaseRepository, FanCaseMapper fanCaseMapper, FanCaseValidator fanCaseValidator) {
        this.fanCaseValidator = fanCaseValidator;
        this.fanCaseRepository = fanCaseRepository;
        this.fanCaseMapper = fanCaseMapper;
    }

    public Page<FanCaseDTO> getAllFanCases(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return fanCaseRepository.findAllByOrderByIdDesc(pageable)
                .map(fanCase -> fanCaseMapper.map(fanCase));
    }

    public Page<FanCaseDTO> multiMatchQuery(String query, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        return fanCaseRepository.multiMatchQuery(query, pageable)
                .map(fanCase -> fanCaseMapper.map(fanCase));
    }


    public List<String> getAllDimensions() {
        return fanCaseRepository.findAllDistinctDimensions();
    }

    public Page<FanCaseDTO> getFanCasesByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return fanCaseRepository.findAllByGenerateProductCodeFanCase(fanCaseRepository.findByProductCode(productCode), pageable)
                .map(fanCase -> fanCaseMapper.map(fanCase));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<FanCaseDTO> stockList = new ArrayList<>();

        fanCaseRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            FanCaseDTO fanCaseDTO = FanCaseDTO.builder()
                    .generateProductCode(fanCaseRepository.findByProductCode(s))
                    .averagePrice(fanCaseRepository.averagePriceByProductCode(s))
                    .stock(fanCaseRepository.sumAllByGenerateProductCodeFanCase(s))
                    .build();
            stockList.add(fanCaseDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", fanCaseRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", fanCaseRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStockByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<FanCaseDTO> searchStockList = new ArrayList<>();

        fanCaseRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            FanCaseDTO fanCaseDTO = FanCaseDTO.builder()
                    .generateProductCode(fanCaseRepository.findByProductCode(s))
                    .averagePrice(fanCaseRepository.averagePriceByProductCode(s))
                    .stock(fanCaseRepository.sumAllByGenerateProductCodeFanCase(s))
                    .build();
            searchStockList.add(fanCaseDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", fanCaseRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", fanCaseRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<FanCaseDTO> filterFanCases(List<String> dimension, List<String> state, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        return fanCaseRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (dimension != null && !dimension.isEmpty()) {
                predicates.add(root.get("dimension").in(dimension));
            }

            if (state != null && !state.isEmpty()) {
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(fanCase -> fanCaseMapper.map(fanCase));
    }

    public void addFanCase(FanCaseDTO fanCaseDTO) {
        fanCaseDTO.setCategory("Fan Case");
        fanCaseDTO.setReceived(false);

        do {
            fanCaseDTO.setSerialNumber("FAN_CASE" + new Random().nextInt(1_000_000));
        } while (fanCaseValidator.validateSerialNumber(fanCaseDTO));

        fanCaseRepository.save(fanCaseMapper.map(fanCaseDTO));
    }

    public void updateFanCase(FanCaseDTO fanCaseDTO, int id) {
        fanCaseMapper.set(fanCaseDTO, id);
    }

    public void deleteFanCase(int id) {
        fanCaseRepository.deleteById(id);
    }
}
