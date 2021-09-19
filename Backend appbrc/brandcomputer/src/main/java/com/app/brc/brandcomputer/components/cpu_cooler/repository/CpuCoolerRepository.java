package com.app.brc.brandcomputer.components.cpu_cooler.repository;

import com.app.brc.brandcomputer.components.cpu_cooler.model.CpuCooler;
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
public interface CpuCoolerRepository extends JpaRepository<CpuCooler, Integer>, JpaSpecificationExecutor<CpuCooler> {

    String queryMultiMatch = "SELECT cc FROM CpuCooler cc WHERE cc.generateProductCode.productCode LIKE %:query% OR " +
            "cc.generateProductCode.productName LIKE %:query% OR " +
            "cc.serialNumber LIKE %:query% OR " +
            "cc.manufacturer LIKE %:query% OR " +
            "cc.socket LIKE %:query% OR " +
            "cc.productInformation LIKE %:query% OR " +
            "cc.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(cc) FROM CpuCooler cc WHERE cc.generateProductCode.productCode LIKE %:query% OR " +
            "cc.generateProductCode.productName LIKE %:query% OR " +
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

    Page<CpuCooler> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT cc.generateProductCode FROM CpuCooler cc WHERE cc.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode FROM CpuCooler",
            countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) FROM CpuCooler")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT cc.generateProductCode.productName FROM CpuCooler cc WHERE cc.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(cc.priceIn) FROM CpuCooler cc WHERE cc.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(c.quantity) from CpuCooler c where c.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT cc.generateProductCode.productCode FROM CpuCooler cc WHERE cc.generateProductCode.productCode LIKE %:search% OR cc.generateProductCode.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT cc) FROM CpuCooler cc WHERE cc.generateProductCode.productCode LIKE %:search% OR cc.generateProductCode.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<CpuCooler> findAllByState(String state, Pageable pageable);
    List<CpuCooler> findAllByState(String state);

    @Query(value = "SELECT c FROM CpuCooler c WHERE c.received = false")
    List<CpuCooler> findAllUnreceived();

    Page<CpuCooler> findAllByOrderByIdDesc(Pageable pageable);

}
