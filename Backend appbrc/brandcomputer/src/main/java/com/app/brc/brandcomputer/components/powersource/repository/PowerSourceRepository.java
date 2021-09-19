package com.app.brc.brandcomputer.components.powersource.repository;

import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PowerSourceRepository extends JpaRepository<PowerSource, Integer>, JpaSpecificationExecutor<PowerSource> {

    String queryMultiMatch = "select ps from PowerSource ps where " +
            "ps.generateProductCode.productCode like %:query% or " +
            "ps.generateProductCode.productName like %:query% or " +
            "ps.serialNumber like %:query% or " +
            "ps.manufacturer like %:query% or " +
            "ps.model like %:query% or " +
            "ps.sourceType like %:query% or " +
            "ps.productInformation like %:query% or " +
            "ps.state like %:query%";

    String countQueryMultiMatch = "select count(ps) from PowerSource ps where " +
            "ps.generateProductCode.productCode like %:query% or " +
            "ps.generateProductCode.productName like %:query% or " +
            "ps.serialNumber like %:query% or " +
            "ps.manufacturer like %:query% or " +
            "ps.model like %:query% or " +
            "ps.sourceType like %:query% or " +
            "ps.productInformation like %:query% or " +
            "ps.state like %:query%";

    Boolean existsBySerialNumber(String serialNumber);

    Page<PowerSource> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "select distinct ps.generateProductCode.productName from PowerSource ps where ps.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<PowerSource> multiMatchQuery(@Param("query") String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT ps.generateProductCode FROM PowerSource ps WHERE ps.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct manufacturer from PowerSource ")
    List<String> findAllDistinctManufacturers();

    @Query(value = "select distinct sourceType from PowerSource ")
    List<String> findAllDistinctSourceType();

    @Query(value = "select distinct generateProductCode.productCode from PowerSource ",
            countQuery = "select count(distinct generateProductCode.productCode) from PowerSource ")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "select distinct ps.generateProductCode.productCode from PowerSource ps where ps.generateProductCode.productName like %:search% or ps.generateProductCode.productCode like %:search%",
            countQuery = "select count(distinct  ps) from PowerSource ps where ps.generateProductCode.productName like %:search% or ps.generateProductCode.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    @Query(value = "SELECT SUM(ps.quantity) FROM PowerSource ps WHERE ps.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query("SELECT AVG(ps.priceIn) FROM PowerSource ps WHERE ps.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    Page<PowerSource> findAllByState(String state, Pageable pageable);

    List<PowerSource> findAllByState(String state);

    @Query(value = "SELECT ps FROM PowerSource ps WHERE ps.received = false")
    List<PowerSource> findAllUnreceived();

    Page<PowerSource> findAllByOrderByIdDesc(Pageable pageable);
}
