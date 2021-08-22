package com.app.brc.brandcomputer.components.motherboard.services;

import com.app.brc.brandcomputer.components.motherboard.dto.MotherboardDTO;
import com.app.brc.brandcomputer.components.motherboard.mapper.MotherboardMapper;
import com.app.brc.brandcomputer.components.motherboard.repository.MotherboardRepository;
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
public class MotherboardService {

    private MotherboardRepository motherboardRepository;
    private MotherboardMapper motherboardMapper;

    @Autowired
    public MotherboardService(MotherboardRepository motherboardRepository, MotherboardMapper motherboardMapper) {
        this.motherboardRepository = motherboardRepository;
        this.motherboardMapper = motherboardMapper;
    }

    public Page<MotherboardDTO> getAllMotherboards(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return motherboardRepository.findAllByOrderByIdDesc(pageable)
                .map(motherboard -> motherboardMapper.map(motherboard));
    }

    public Page<MotherboardDTO> multiMatchQuery(String query, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        return motherboardRepository.multiMatchQuery(query, pageable)
                .map(motherboard -> motherboardMapper.map(motherboard));
    }

    public void addMotherboard(MotherboardDTO motherboardDTO) {
        motherboardDTO.setCategory("Motherboard");
        motherboardDTO.setReceived(false);
        motherboardRepository.save(motherboardMapper.map(motherboardDTO));
    }

    public void updateMotherboard(MotherboardDTO motherboardDTO, int id) {
        motherboardMapper.set(motherboardDTO, id);
    }

    public void deleteMotherboard(int id) {
        motherboardRepository.deleteById(id);
    }


    public List<String> getAllManufacturers() {
        return motherboardRepository.findAllDistinctManufacturers();
    }

    public List<String> getAllCpuSocket() {
        return motherboardRepository.findAllDistinctSockets();
    }

    public Page<MotherboardDTO> filterMotherboard(List<String> manufacturer, List<String> socket, String chipset, List<String> state, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return motherboardRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (manufacturer != null && !manufacturer.isEmpty()) {
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (socket != null && !socket.isEmpty()) {
                predicates.add(root.get("socket").in(socket));
            }

            if (chipset != null && !chipset.isEmpty()) {
                predicates.add(root.get("chipset").in(chipset));
            }

            if (state != null && !state.isEmpty()) {
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(motherboard -> motherboardMapper.map(motherboard));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<MotherboardDTO> stockList = new ArrayList<>();

        motherboardRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            MotherboardDTO motherboardDTO = MotherboardDTO.builder()
                    .generateProductCode(motherboardRepository.findByProductCode(s))
                    .averagePrice(motherboardRepository.averagePriceByProductCode(s))
                    .stock(motherboardRepository.sumAllByGenerateProductCodeMotherboard(s))
                    .build();
            stockList.add(motherboardDTO);

        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", motherboardRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", motherboardRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;

    }

    public Map<String, Object> searchStockByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<MotherboardDTO> searchStockList = new ArrayList<>();

        motherboardRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            MotherboardDTO motherboardDTO = MotherboardDTO.builder()
                    .generateProductCode(motherboardRepository.findByProductCode(s))
                    .averagePrice(motherboardRepository.averagePriceByProductCode(s))
                    .stock(motherboardRepository.sumAllByGenerateProductCodeMotherboard(s))
                    .build();
            searchStockList.add(motherboardDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", motherboardRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", motherboardRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<MotherboardDTO> getMotherboardsByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return motherboardRepository.findAllByGenerateProductCodeMotherboard(motherboardRepository.findByProductCode(productCode), pageable)
                .map(motherboard -> motherboardMapper.map(motherboard));
    }
}
