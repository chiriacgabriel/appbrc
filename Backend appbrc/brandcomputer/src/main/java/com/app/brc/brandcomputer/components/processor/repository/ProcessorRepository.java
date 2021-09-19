package com.app.brc.brandcomputer.components.processor.repository;

import com.app.brc.brandcomputer.components.processor.model.Processor;
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
public interface ProcessorRepository extends JpaRepository<Processor, Integer>, JpaSpecificationExecutor<Processor> {

    String queryMultiMatch = "SELECT p FROM Processor p WHERE p.generateProductCode.productCode LIKE %:query% OR " +
            "p.generateProductCode.productName LIKE %:query% OR " +
            "p.serialNumber LIKE %:query% OR " +
            "p.manufacturer LIKE %:query% OR " +
            "p.socket LIKE %:query% OR " +
            "p.model LIKE %:query% OR " +
            "p.productInformation LIKE %:query% OR " +
            "p.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(p) FROM Processor p WHERE p.generateProductCode.productCode LIKE %:query% OR " +
            "p.generateProductCode.productName LIKE %:query% OR " +
            "p.serialNumber LIKE %:query% OR " +
            "p.manufacturer LIKE %:query% OR " +
            "p.socket LIKE %:query% OR " +
            "p.model LIKE %:query% OR " +
            "p.productInformation LIKE %:query% OR " +
            "p.state LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<Processor> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT manufacturer FROM Processor")
    List<String> findAllDistinctManufacturers();

    @Query(value = "SELECT DISTINCT socket FROM Processor")
    List<String> findAllDistinctSockets();

    @Query(value = "SELECT DISTINCT model FROM Processor")
    List<String> findAllDistinctModels();

    @Query(value = "SELECT DISTINCT numberOfCpuCores FROM Processor")
    List<Integer> findAllDistinctNumbersOfCpuCores();

    @Query(value = "SELECT DISTINCT numberOfThreads FROM Processor")
    List<Integer> findAllDistinctNumbersOfThreads();

    @Query(value = "SELECT DISTINCT baseClock FROM Processor")
    List<Integer> findAllDistinctBaseClocks();

    @Query(value = "SELECT DISTINCT maxBoostClock FROM Processor")
    List<Integer> findAllDistinctMaxBoostClocks();

    @Query(value = "SELECT DISTINCT maxMemoryFrequency FROM Processor")
    List<Integer> findAllDistinctMaxMemoryFrequencies();

    @Query(value = "SELECT DISTINCT lithography from Processor")
    List<Integer> findAllDistinctLithography();

    @Query(value = "SELECT DISTINCT typeOfMemoryRAM FROM Processor")
    List<String> findAllDistinctTypesOfMemory();

    Page<Processor> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode FROM Processor",
            countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) FROM Processor")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT p.generateProductCode FROM Processor p WHERE p.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT p.generateProductCode.productName FROM Processor p WHERE p.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(p.priceIn) FROM Processor p WHERE p.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(p.quantity) FROM Processor p WHERE p.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT p.generateProductCode.productCode FROM Processor p WHERE p.generateProductCode.productCode LIKE %:search% OR p.generateProductCode.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT p) FROM Processor p WHERE p.generateProductCode.productCode LIKE %:search% OR p.generateProductCode.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<Processor> findAllByState(String state, Pageable pageable);

    List<Processor> findAllByState(String state);

    @Query(value = "SELECT p FROM Processor p WHERE p.received = false")
    List<Processor> findAllUnreceived();

    Page<Processor> findAllByOrderByIdDesc(Pageable pageable);

}
