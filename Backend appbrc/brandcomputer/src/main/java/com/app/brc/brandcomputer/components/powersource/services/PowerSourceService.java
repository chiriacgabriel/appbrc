package com.app.brc.brandcomputer.components.powersource.services;

import com.app.brc.brandcomputer.components.powersource.dto.PowerSourceDTO;
import com.app.brc.brandcomputer.components.powersource.mapper.PowerSourceMapper;
import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import com.app.brc.brandcomputer.components.powersource.repository.PowerSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.criteria.Predicate;
import java.util.*;

@Service
public class PowerSourceService {

    private PowerSourceMapper powerSourceMapper;
    private PowerSourceRepository powerSourceRepository;

    @Autowired
    public PowerSourceService(PowerSourceMapper powerSourceMapper, PowerSourceRepository powerSourceRepository) {
        this.powerSourceMapper = powerSourceMapper;
        this.powerSourceRepository = powerSourceRepository;
    }

    public Page<PowerSourceDTO> getAllPowerSources(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return powerSourceRepository.findAllByOrderByIdDesc(pageable)
                .map(powerSource -> powerSourceMapper.map(powerSource));
    }

    public Page<PowerSourceDTO> getPowerSourcesByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return powerSourceRepository.findAllByGenerateProductCodePowerSource(powerSourceRepository.findByProductCode(productCode), pageable)
                .map(powerSource -> powerSourceMapper.map(powerSource));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        Map<String, Object> stockByProductCode = new HashMap<>();
        List<PowerSourceDTO> powerSourceDTOList = new ArrayList<>();

        powerSourceRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            PowerSourceDTO powerSourceDTO = PowerSourceDTO.builder()
                    .generateProductCode(powerSourceRepository.findByProductCode(s))
                    .averagePrice(powerSourceRepository.averagePriceByProductCode(s))
                    .stock(powerSourceRepository.sumAllByGenerateProductCodePowerSource(s))
                    .build();
            powerSourceDTOList.add(powerSourceDTO);
        });
        stockByProductCode.put("content", powerSourceDTOList);
        stockByProductCode.put("totalElements", powerSourceRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", powerSourceRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStockByProductCode(String search, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<PowerSourceDTO> powerSourceDTOList = new ArrayList<>();

        powerSourceRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            PowerSourceDTO powerSourceDTO = PowerSourceDTO.builder()
                    .generateProductCode(powerSourceRepository.findByProductCode(s))
                    .averagePrice(powerSourceRepository.averagePriceByProductCode(s))
                    .stock(powerSourceRepository.sumAllByGenerateProductCodePowerSource(s))
                    .build();
            powerSourceDTOList.add(powerSourceDTO);
        });

        searchStockByProductCode.put("content", powerSourceDTOList);
        searchStockByProductCode.put("totalElements", powerSourceRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", powerSourceRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public void addPowerSource(PowerSourceDTO powerSourceDTO) {
        powerSourceDTO.setCategory("Power Source");
        powerSourceDTO.setReceived(false);
        powerSourceRepository.save(powerSourceMapper.map(powerSourceDTO));
    }

    public void updatePowerSource(PowerSourceDTO powerSourceDTO, int id) {
        powerSourceMapper.set(powerSourceDTO, id);

    }

    public void deletePowerSource(int id) {
        powerSourceRepository.deleteById(id);
    }

    public PowerSourceDTO getPowerSourceById(int id) {
        Optional<PowerSource> optionalPowerSource = powerSourceRepository.findById(id);
        if (!optionalPowerSource.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Power source not found !");
        }
        return powerSourceMapper.map(optionalPowerSource.get());
    }

    public List<String> getAllManufacturers() {
        return powerSourceRepository.findAllDistinctManufacturers();
    }

    public List<String> getAllSourceTypes() {
        return powerSourceRepository.findAllDistinctSourceType();
    }

    public Page<PowerSourceDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return powerSourceRepository.multiMatchQuery(query, pageable).map(powerSource -> powerSourceMapper.map(powerSource));
    }

    public Page<PowerSourceDTO> getFilteredList(List<String> manufacturer, String sourceType, List<String> state, String power, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return powerSourceRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (manufacturer != null && !manufacturer.isEmpty()) {
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (sourceType != null && !sourceType.isEmpty()) {
                predicates.add(root.get("sourceType").in(sourceType));
            }

            if (state !=null && !state.isEmpty()) {
                predicates.add(root.get("state").in(state));
            }

            if (power != null && !power.isEmpty() && power.equals("Sub 500")){
                predicates.add(criteriaBuilder.or(
                        criteriaBuilder.between(root.get("power"), 0, 500)
                ));
            }else if (power != null && !power.isEmpty() && power.equals("500 - 800")){
                predicates.add(criteriaBuilder.or(
                        criteriaBuilder.between(root.get("power"), 501, 800)
                ));
            }else if (power != null && !power.isEmpty() && power.equals("801 - 1000")){
                predicates.add(criteriaBuilder.or(
                        criteriaBuilder.between(root.get("power"),801, 1000)
                ));
            }else if (power != null && !power.isEmpty() && power.equals("Peste 1000")){
                predicates.add(criteriaBuilder.or(
                        criteriaBuilder.between(root.get("power"),1001,Integer.MAX_VALUE)
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(powerSource -> powerSourceMapper.map(powerSource));
    }
}
