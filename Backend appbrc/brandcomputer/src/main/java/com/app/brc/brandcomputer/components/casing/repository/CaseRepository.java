package com.app.brc.brandcomputer.components.casing.repository;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.casing.model.GenerateProductCodeCase;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaseRepository extends JpaRepository<Case, Integer>, JpaSpecificationExecutor<Case> {

    String queryMultiMatch = "SELECT c FROM Case c WHERE c.generateProductCode.productCode LIKE %:query% OR " +
            "c.generateProductCode.productName LIKE %:query% OR " +
            "c.serialNumber LIKE %:query% OR " +
            "c.manufacturer LIKE %:query% OR " +
            "c.productInformation LIKE %:query% OR " +
            "c.state LIKE %:query% OR " +
            "c.caseType LIKE %:query%";
    String countQueryMultiMatch = "SELECT COUNT(c) FROM Case c WHERE c.generateProductCode.productCode LIKE %:query% OR " +
            "c.generateProductCode.productName LIKE %:query% OR " +
            "c.serialNumber LIKE %:query% OR " +
            "c.manufacturer LIKE %:query% OR " +
            "c.productInformation LIKE %:query% OR " +
            "c.state LIKE %:query% OR " +
            "c.caseType LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<Case> multiMatchQuery(String query, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    @Query(value = "SELECT DISTINCT compatibleMotherboard from Case")
    List<String> findAllDistinctCompatibleMotherboard();

    Page<Case> findAllByGenerateProductCode(GenerateProductCodeCase productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT c.generateProductCode FROM Case c WHERE c.generateProductCode.productCode =:productCode")
    GenerateProductCodeCase findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode from Case", countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) from Case")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "select distinct c.generateProductCode.productName from Case c  where c.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(c.quantity) from Case c where c.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCodeCase(@Param("productCode") String productCode);

    @Query("SELECT AVG(c.priceIn) FROM Case c WHERE c.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct c.generateProductCode.productCode from Case c where c.generateProductCode.productName like %:search% or c.generateProductCode.productCode like %:search%",
            countQuery = "select count(distinct  c) from Case c where c.generateProductCode.productName like %:search% or c.generateProductCode.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    Page<Case> findAllByState(String state, Pageable pageable);
    List<Case> findAllByState(String state);

    @Query(value = "SELECT c from Case c WHERE c.received = false")
    List<Case> findAllUnreceived();

    Page<Case> findAllByOrderByIdDesc(Pageable pageable);

}
