package com.app.brc.brandcomputer.components.casing.services;

import com.app.brc.brandcomputer.components.casing.dto.CaseDTO;
import com.app.brc.brandcomputer.components.casing.mapper.CaseMapper;
import com.app.brc.brandcomputer.components.casing.repository.CaseRepository;
import com.app.brc.brandcomputer.components.casing.validator.CaseValidator;
import net.sf.jasperreports.engine.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.*;

@Service
public class CaseService {

    private CaseRepository caseRepository;
    private CaseMapper caseMapper;
    private CaseValidator caseValidator;

    @Autowired
    public CaseService(CaseRepository caseRepository, CaseMapper caseMapper, CaseValidator caseValidator) {
        this.caseMapper = caseMapper;
        this.caseRepository = caseRepository;
        this.caseValidator = caseValidator;
    }

    public Page<CaseDTO> getAllCases(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return caseRepository.findAllByOrderByIdDesc(pageable)
                .map(aCase -> caseMapper.map(aCase));
    }

    public List<String> getAllCompatibleMotherboards() {
        return caseRepository.findAllDistinctCompatibleMotherboard();
    }

    public Page<CaseDTO> getCasesByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return caseRepository.findAllByGenerateProductCodeCase(caseRepository.findByProductCode(productCode), pageable)
                .map(aCase -> caseMapper.map(aCase));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<CaseDTO> stockList = new ArrayList<>();

        caseRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            CaseDTO caseDTO = CaseDTO.builder()
                    .generateProductCode(caseRepository.findByProductCode(s))
                    .averagePrice(caseRepository.averagePriceByProductCode(s))
                    .stock(caseRepository.sumAllByGenerateProductCodeCase(s))
                    .build();
            stockList.add(caseDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", caseRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", caseRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;

    }

    public Map<String, Object> searchStockByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<CaseDTO> searchStockList = new ArrayList<>();

        caseRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            CaseDTO caseDTO = CaseDTO.builder()
                    .generateProductCode(caseRepository.findByProductCode(s))
                    .averagePrice(caseRepository.averagePriceByProductCode(s))
                    .stock(caseRepository.sumAllByGenerateProductCodeCase(s))
                    .build();
            searchStockList.add(caseDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", caseRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", caseRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<CaseDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return caseRepository.multiMatchQuery(query, pageable)
                .map(aCase -> caseMapper.map(aCase));
    }

    public Page<CaseDTO> filterCase(List<String> caseType, List<String> compatibleMotherboard,
                                    List<String> state, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        return caseRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (caseType != null && !caseType.isEmpty()) {
                predicates.add(root.get("caseType").in(caseType));
            }

            if (compatibleMotherboard != null && !compatibleMotherboard.isEmpty()) {
                predicates.add(root.get("compatibleMotherboard").in(compatibleMotherboard));
            }

            if (state != null && !state.isEmpty()) {
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(aCase -> caseMapper.map(aCase));
    }

    public void addCase(CaseDTO caseDTO) {
        caseDTO.setCategory("Case");
        caseDTO.setReceived(false);

        do {
            caseDTO.setSerialNumber("CASE" + new Random().nextInt(1_000_000));
        } while (caseValidator.validateSerialNumber(caseDTO));

        caseRepository.save(caseMapper.map(caseDTO));

    }

    public void updateCase(CaseDTO caseDTO, int id) {
        caseMapper.set(caseDTO, id);
    }

    public void deleteCase(int id) {
        caseRepository.deleteById(id);
    }

//    private void testingJasperReports(){
//        JasperReport report = JasperCompileManager.compileReport();
//
//        Map<String, Object> parameters = new HashMap<>();
//        parameters.put();
//
//        JRDataSource dataSource = new JREmptyDataSource(); //your dbconnection
//        JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, dataSource);
//    }

}
