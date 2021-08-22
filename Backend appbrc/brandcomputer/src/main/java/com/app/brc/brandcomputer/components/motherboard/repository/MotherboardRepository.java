package com.app.brc.brandcomputer.components.motherboard.repository;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.memory_ram.model.MemoryRam;
import com.app.brc.brandcomputer.components.motherboard.mapper.MotherboardMapper;
import com.app.brc.brandcomputer.components.motherboard.model.GenerateProductCodeMotherboard;
import com.app.brc.brandcomputer.components.motherboard.model.Motherboard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface MotherboardRepository extends JpaRepository<Motherboard, Integer>, JpaSpecificationExecutor<Motherboard> {

    String queryMultiMatch = "SELECT m FROM Motherboard m WHERE m.generateProductCodeMotherboard.productCode LIKE %:query% OR " +
            "m.generateProductCodeMotherboard.productName LIKE %:query% OR " +
            "m.serialNumber LIKE %:query% OR " +
            "m.manufacturer LIKE %:query% OR " +
            "m.model LIKE %:query% OR " +
            "m.formFactor LIKE %:query% OR " +
            "m.socket LIKE %:query% OR " +
            "m.chipset LIKE %:query% OR " +
            "m.productInformation LIKE %:query% OR " +
            "m.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(m) FROM Motherboard m WHERE m.generateProductCodeMotherboard.productCode LIKE %:query% OR " +
            "m.generateProductCodeMotherboard.productName LIKE %:query% OR " +
            "m.serialNumber LIKE %:query% OR " +
            "m.manufacturer LIKE %:query% OR " +
            "m.model LIKE %:query% OR " +
            "m.formFactor LIKE %:query% OR " +
            "m.socket LIKE %:query% OR " +
            "m.chipset LIKE %:query% OR " +
            "m.productInformation LIKE %:query% OR " +
            "m.state LIKE %:query%";
    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<Motherboard> multiMatchQuery(String query, Pageable pageable);

    Boolean existsBySerialNumber(String serialNumber);

    @Query(value = "SELECT DISTINCT manufacturer from Motherboard")
    List<String> findAllDistinctManufacturers();

    @Query(value = "SELECT DISTINCT socket from Motherboard")
    List<String> findAllDistinctSockets();

    @Query(value = "SELECT DISTINCT generateProductCodeMotherboard.productCode from Motherboard", countQuery = "SELECT COUNT(DISTINCT generateProductCodeMotherboard.productCode) from Motherboard ")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT m.generateProductCodeMotherboard FROM Motherboard m WHERE m.generateProductCodeMotherboard.productCode =:productCode")
    GenerateProductCodeMotherboard findByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct m.generateProductCodeMotherboard.productName from Motherboard m  where m.generateProductCodeMotherboard.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(m.quantity) FROM Motherboard m WHERE m.generateProductCodeMotherboard.productCode =:productCode")
    long sumAllByGenerateProductCodeMotherboard(@Param("productCode") String productCode);

    @Query("SELECT AVG(m.priceIn) FROM Motherboard m WHERE m.generateProductCodeMotherboard.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct m.generateProductCodeMotherboard.productCode from Motherboard m where m.generateProductCodeMotherboard.productName like %:search% or m.generateProductCodeMotherboard.productCode like %:search%",
            countQuery = "select count(distinct  m) from Motherboard m where m.generateProductCodeMotherboard.productName like %:search% or m.generateProductCodeMotherboard.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    Page<Motherboard> findAllByGenerateProductCodeMotherboard(GenerateProductCodeMotherboard productCode, Pageable pageable);

    Page<Motherboard> findAllByState(String state, Pageable pageable);
    List<Motherboard> findAllByState(String state);

    @Query(value = "SELECT m FROM Motherboard m WHERE m.received = false")
    List<Motherboard> findAllUnreceived();

    Page<Motherboard> findAllByOrderByIdDesc(Pageable pageable);
}
