package com.app.brc.brandcomputer.components.fan_case.repository;
import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.cpu_cooler.model.GenerateProductCodeCpuCooler;
import com.app.brc.brandcomputer.components.fan_case.mapper.FanCaseMapper;
import com.app.brc.brandcomputer.components.fan_case.model.FanCase;
import com.app.brc.brandcomputer.components.fan_case.model.GenerateProductCodeFanCase;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FanCaseRepository extends JpaRepository<FanCase, Integer>, JpaSpecificationExecutor<FanCase> {

    String queryMultiMatch = "SELECT f from FanCase f WHERE f.generateProductCodeFanCase.productCode LIKE %:query% OR " +
            "f.generateProductCodeFanCase.productName LIKE %:query% OR " +
            "f.serialNumber LIKE %:query% OR " +
            "f.manufacturer LIKE %:query% OR " +
            "f.productInformation LIKE %:query% OR " +
            "f.state LIKE %:query% OR " +
            "f.dimension LIKE %:query%";
    String countQueryMultiMatch = "SELECT COUNT(f) from FanCase f WHERE f.generateProductCodeFanCase.productCode LIKE %:query% OR " +
            "f.generateProductCodeFanCase.productName LIKE %:query% OR " +
            "f.serialNumber LIKE %:query% OR " +
            "f.manufacturer LIKE %:query% OR " +
            "f.productInformation LIKE %:query% OR " +
            "f.state LIKE %:query% OR " +
            "f.dimension LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<FanCase> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT dimension from FanCase")
    List<String> findAllDistinctDimensions();

    Page<FanCase> findAllByGenerateProductCodeFanCase(GenerateProductCodeFanCase productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT fc.generateProductCodeFanCase FROM FanCase fc WHERE fc.generateProductCodeFanCase.productCode =:productCode")
    GenerateProductCodeFanCase findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCodeFanCase.productCode from FanCase", countQuery = "SELECT COUNT(DISTINCT generateProductCodeFanCase.productCode) from FanCase")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "select distinct f.generateProductCodeFanCase.productName from FanCase f  where f.generateProductCodeFanCase.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query("SELECT AVG(f.priceIn) FROM FanCase f WHERE f.generateProductCodeFanCase.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(fc.quantity) FROM FanCase fc WHERE fc.generateProductCodeFanCase.productCode =:productCode")
    long sumAllByGenerateProductCodeFanCase(@Param("productCode") String productCode);

    @Query(value = "select distinct f.generateProductCodeFanCase.productCode from FanCase f where f.generateProductCodeFanCase.productName like %:search% or f.generateProductCodeFanCase.productCode like %:search%",
            countQuery = "select count(distinct  f) from FanCase f where f.generateProductCodeFanCase.productName like %:search% or f.generateProductCodeFanCase.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<FanCase> findAllByState(String state, Pageable pageable);
    List<FanCase> findAllByState(String state);

    @Query(value = "SELECT fc FROM FanCase fc WHERE fc.received = false")
    List<FanCase> findAllUnreceived();

    Page<FanCase> findAllByOrderByIdDesc(Pageable pageable);
}
