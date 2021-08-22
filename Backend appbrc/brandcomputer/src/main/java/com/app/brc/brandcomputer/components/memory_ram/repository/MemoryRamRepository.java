package com.app.brc.brandcomputer.components.memory_ram.repository;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.fan_case.model.FanCase;
import com.app.brc.brandcomputer.components.fan_case.model.GenerateProductCodeFanCase;
import com.app.brc.brandcomputer.components.memory_ram.model.GenerateProductCodeMemoryRam;
import com.app.brc.brandcomputer.components.memory_ram.model.MemoryRam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemoryRamRepository extends JpaRepository<MemoryRam, Integer> , JpaSpecificationExecutor<MemoryRam> {

    String queryMultiMatch = "SELECT mr FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode LIKE %:query% OR " +
            "mr.generateProductCodeMemoryRam.productName LIKE %:query% OR " +
            "mr.serialNumber LIKE %:query% OR " +
            "mr.manufacturer LIKE %:query% OR " +
            "mr.module LIKE %:query% OR " +
            "mr.ramType LIKE %:query% OR " +
            "mr.frequency LIKE %:query% OR " +
            "mr.capacity LIKE %:query% OR " +
            "mr.productInformation LIKE %:query% OR " +
            "mr.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(mr) FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode LIKE %:query% OR " +
            "mr.generateProductCodeMemoryRam.productName LIKE %:query% OR " +
            "mr.serialNumber LIKE %:query% OR " +
            "mr.manufacturer LIKE %:query% OR " +
            "mr.module LIKE %:query% OR " +
            "mr.ramType LIKE %:query% OR " +
            "mr.frequency LIKE %:query% OR " +
            "mr.capacity LIKE %:query% OR " +
            "mr.productInformation LIKE %:query% OR " +
            "mr.state LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<MemoryRam> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT manufacturer FROM MemoryRam")
    List<String> findAllDistinctManufacturers();

    @Query(value = "SELECT DISTINCT module FROM MemoryRam")
    List<String> findAllDistinctModules();

    @Query(value = "SELECT DISTINCT ramType FROM MemoryRam")
    List<String> findAllDistinctRamTypes();

    @Query(value = "SELECT DISTINCT frequency FROM MemoryRam")
    List<String> findAllDistinctFrequencies();

    @Query(value = "SELECT DISTINCT capacity FROM MemoryRam")
    List<String> findAllDistinctCapacities();

    Page<MemoryRam> findAllByGenerateProductCodeMemoryRam(GenerateProductCodeMemoryRam productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT generateProductCodeMemoryRam.productCode FROM MemoryRam",
            countQuery = "SELECT COUNT(DISTINCT generateProductCodeMemoryRam.productCode) FROM MemoryRam")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT mr.generateProductCodeMemoryRam FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode =:productCode")
    GenerateProductCodeMemoryRam findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT mr.generateProductCodeMemoryRam.productName FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(mr.priceIn) FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(mr.quantity) FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode =:productCode")
    long sumAllByGenerateProductCodeMemoryRam(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT mr.generateProductCodeMemoryRam.productCode FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode LIKE %:search% OR mr.generateProductCodeMemoryRam.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT mr) FROM MemoryRam mr WHERE mr.generateProductCodeMemoryRam.productCode LIKE %:search% OR mr.generateProductCodeMemoryRam.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<MemoryRam> findAllByState(String state, Pageable pageable);
    List<MemoryRam> findAllByState(String state);

    @Query(value = "SELECT mr FROM MemoryRam mr WHERE mr.received = false")
    List<MemoryRam> findAllUnreceived();

    Page<MemoryRam> findAllByOrderByIdDesc(Pageable pageable);

}
