package com.app.brc.brandcomputer.components.cpu_cooler.repository;

import com.app.brc.brandcomputer.components.cpu_cooler.model.CpuCooler;
import com.app.brc.brandcomputer.components.cpu_cooler.model.GenerateProductCodeCpuCooler;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CpuCoolerRepository extends JpaRepository<CpuCooler, Integer>, JpaSpecificationExecutor<CpuCooler> {

    String queryMultiMatch = "SELECT cc FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode LIKE %:query% OR " +
            "cc.generateProductCodeCpuCooler.productName LIKE %:query% OR " +
            "cc.serialNumber LIKE %:query% OR " +
            "cc.manufacturer LIKE %:query% OR " +
            "cc.socket LIKE %:query% OR " +
            "cc.productInformation LIKE %:query% OR " +
            "cc.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(cc) FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode LIKE %:query% OR " +
            "cc.generateProductCodeCpuCooler.productName LIKE %:query% OR " +
            "cc.serialNumber LIKE %:query% OR " +
            "cc.manufacturer LIKE %:query% OR " +
            "cc.socket LIKE %:query% OR " +
            "cc.productInformation LIKE %:query% OR " +
            "cc.state LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<CpuCooler> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT socket FROM CpuCooler")
    List<String> findAllDistinctSockets();

    @Query(value = "SELECT DISTINCT manufacturer FROM CpuCooler")
    List<String> findAllDistinctManufacturers();

    Page<CpuCooler> findAllByGenerateProductCodeCpuCooler(GenerateProductCodeCpuCooler productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT cc.generateProductCodeCpuCooler FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode =:productCode")
    GenerateProductCodeCpuCooler findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCodeCpuCooler.productCode FROM CpuCooler",
            countQuery = "SELECT COUNT(DISTINCT generateProductCodeCpuCooler.productCode) FROM CpuCooler")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT cc.generateProductCodeCpuCooler.productName FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(cc.priceIn) FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(c.quantity) from CpuCooler c where c.generateProductCodeCpuCooler.productCode =:productCode")
    long sumAllByGenerateProductCodeCpuCooler(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT cc.generateProductCodeCpuCooler.productCode FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode LIKE %:search% OR cc.generateProductCodeCpuCooler.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT cc) FROM CpuCooler cc WHERE cc.generateProductCodeCpuCooler.productCode LIKE %:search% OR cc.generateProductCodeCpuCooler.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<CpuCooler> findAllByState(String state, Pageable pageable);
    List<CpuCooler> findAllByState(String state);

    @Query(value = "SELECT c FROM CpuCooler c WHERE c.received = false")
    List<CpuCooler> findAllUnreceived();

    Page<CpuCooler> findAllByOrderByIdDesc(Pageable pageable);

}
