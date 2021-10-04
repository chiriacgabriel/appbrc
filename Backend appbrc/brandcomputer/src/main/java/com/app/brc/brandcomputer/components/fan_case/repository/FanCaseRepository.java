package com.app.brc.brandcomputer.components.fan_case.repository;
import com.app.brc.brandcomputer.components.fan_case.model.FanCase;
import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface FanCaseRepository extends JpaRepository<FanCase, Integer>, JpaSpecificationExecutor<FanCase> {

    String queryMultiMatch = "SELECT f from FanCase f WHERE f.generateProductCode.productCode LIKE %:query% OR " +
            "f.generateProductCode.productName LIKE %:query% OR " +
            "f.serialNumber LIKE %:query% OR " +
            "f.manufacturer LIKE %:query% OR " +
            "f.productInformation LIKE %:query% OR " +
            "f.state LIKE %:query% OR " +
            "f.dimension LIKE %:query%";
    String countQueryMultiMatch = "SELECT COUNT(f) from FanCase f WHERE f.generateProductCode.productCode LIKE %:query% OR " +
            "f.generateProductCode.productName LIKE %:query% OR " +
            "f.serialNumber LIKE %:query% OR " +
            "f.manufacturer LIKE %:query% OR " +
            "f.productInformation LIKE %:query% OR " +
            "f.state LIKE %:query% OR " +
            "f.dimension LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<FanCase> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT dimension from FanCase")
    List<String> findAllDistinctDimensions();

    Page<FanCase> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT fc.generateProductCode FROM FanCase fc WHERE fc.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode from FanCase", countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) from FanCase")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "select distinct f.generateProductCode.productName from FanCase f  where f.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query("SELECT AVG(f.priceIn) FROM FanCase f WHERE f.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(fc.quantity) FROM FanCase fc WHERE fc.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct f.generateProductCode.productCode from FanCase f where f.generateProductCode.productName like %:search% or f.generateProductCode.productCode like %:search%",
            countQuery = "select count(distinct  f) from FanCase f where f.generateProductCode.productName like %:search% or f.generateProductCode.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<FanCase> findAllByState(String state, Pageable pageable);
    List<FanCase> findAllByState(String state);

    @Query(value = "SELECT fc FROM FanCase fc WHERE fc.received = false")
    List<FanCase> findAllUnreceived();

    Page<FanCase> findAllByOrderByIdDesc(Pageable pageable);

    int countAllByCreatedDateBetween(LocalDateTime startDate, LocalDateTime endDate);
}
