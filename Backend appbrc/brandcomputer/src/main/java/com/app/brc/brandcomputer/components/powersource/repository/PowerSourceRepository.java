package com.app.brc.brandcomputer.components.powersource.repository;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.optical_unit.model.OpticalUnit;
import com.app.brc.brandcomputer.components.powersource.model.GenerateProductCodePowerSource;
import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
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

    Boolean existsBySerialNumber(String serialNumber);

    Page<PowerSource> findAllByGenerateProductCodePowerSource(GenerateProductCodePowerSource productCode, Pageable pageable);

    @Query(value = "select distinct ps.generateProductCodePowerSource.productName from PowerSource ps where ps.generateProductCodePowerSource.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    String queryMultiMatch = "select ps from PowerSource ps where " +
            "ps.generateProductCodePowerSource.productCode like %:query% or " +
            "ps.generateProductCodePowerSource.productName like %:query% or " +
            "ps.serialNumber like %:query% or " +
            "ps.manufacturer like %:query% or " +
            "ps.model like %:query% or " +
            "ps.sourceType like %:query% or " +
            "ps.productInformation like %:query% or " +
            "ps.state like %:query%";

    String countQueryMultiMatch = "select count(ps) from PowerSource ps where " +
            "ps.generateProductCodePowerSource.productCode like %:query% or " +
            "ps.generateProductCodePowerSource.productName like %:query% or " +
            "ps.serialNumber like %:query% or " +
            "ps.manufacturer like %:query% or " +
            "ps.model like %:query% or " +
            "ps.sourceType like %:query% or " +
            "ps.productInformation like %:query% or " +
            "ps.state like %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<PowerSource> multiMatchQuery(@Param("query") String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT ps.generateProductCodePowerSource FROM PowerSource ps WHERE ps.generateProductCodePowerSource.productCode =:productCode")
    GenerateProductCodePowerSource findByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct manufacturer from PowerSource ")
    List<String> findAllDistinctManufacturers();

    @Query(value = "select distinct sourceType from PowerSource ")
    List<String> findAllDistinctSourceType();

    @Query(value = "select distinct generateProductCodePowerSource.productCode from PowerSource ",
            countQuery = "select count(distinct generateProductCodePowerSource.productCode) from PowerSource ")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "select distinct ps.generateProductCodePowerSource.productCode from PowerSource ps where ps.generateProductCodePowerSource.productName like %:search% or ps.generateProductCodePowerSource.productCode like %:search%",
            countQuery = "select count(distinct  ps) from PowerSource ps where ps.generateProductCodePowerSource.productName like %:search% or ps.generateProductCodePowerSource.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    @Query(value = "SELECT SUM(ps.quantity) FROM PowerSource ps WHERE ps.generateProductCodePowerSource.productCode =:productCode")
    long sumAllByGenerateProductCodePowerSource(@Param("productCode") String productCode);

    @Query("SELECT AVG(ps.priceIn) FROM PowerSource ps WHERE ps.generateProductCodePowerSource.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    Page<PowerSource> findAllByState(String state, Pageable pageable);
    List<PowerSource> findAllByState(String state);

    @Query(value = "SELECT ps FROM PowerSource ps WHERE ps.received = false")
    List<PowerSource> findAllUnreceived();

    Page<PowerSource> findAllByOrderByIdDesc(Pageable pageable);
}
