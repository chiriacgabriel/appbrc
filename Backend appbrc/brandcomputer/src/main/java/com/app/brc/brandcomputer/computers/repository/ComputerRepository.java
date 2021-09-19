package com.app.brc.brandcomputer.computers.repository;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import com.app.brc.brandcomputer.computers.model.Computer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComputerRepository extends JpaRepository<Computer, Integer>, JpaSpecificationExecutor<Computer> {

    String queryMultiMatch = "SELECT c FROM Computer c WHERE c.generateProductCode.productCode LIKE %:query% OR " +
            "c.generateProductCode.productName LIKE %:query% OR " +
            "c.serialNumber LIKE %:query% OR " +
            "c.manufacturer LIKE %:query% OR " +
            "c.productInformation LIKE %:query% OR " +
            "c.state LIKE %:query% OR " +
            "c.model LIKE %:query% OR " +
            "c.cpuModel LIKE %:query% OR " +
            "c.opticalUnit LIKE %:query% OR " +
            "c.videoCard LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(c) FROM Computer c WHERE c.generateProductCode.productCode LIKE %:query% OR " +
            "c.generateProductCode.productName LIKE %:query% OR " +
            "c.serialNumber LIKE %:query% OR " +
            "c.manufacturer LIKE %:query% OR " +
            "c.productInformation LIKE %:query% OR " +
            "c.state LIKE %:query% OR " +
            "c.model LIKE %:query% OR " +
            "c.cpuModel LIKE %:query% OR " +
            "c.opticalUnit LIKE %:query% OR " +
            "c.videoCard LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<Computer> multiMatchQuery(String query, Pageable pageable);

    Page<Computer> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT c.generateProductCode FROM Computer c WHERE c.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode FROM Computer",
            countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) FROM Computer")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT AVG(c.priceIn) FROM Computer c WHERE c.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(c.quantity) FROM Computer c WHERE c.generateProductCode.productCode =:productCode")
    Integer sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT c.generateProductCode.productCode FROM Computer c WHERE c.generateProductCode.productName LIKE %:search% OR c.generateProductCode.productCode LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT c) FROM Computer c WHERE c.generateProductCode.productName LIKE %:search% OR c.generateProductCode.productCode LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    @Query(value = "SELECT DISTINCT cpuModel FROM Computer")
    List<String> findAllDistinctCpuModel();

    @Query(value = "SELECT DISTINCT memoryCapacity FROM Computer")
    List<String> findAllDistinctMemoryCapacity();

    @Query(value = "SELECT DISTINCT storageCapacity FROM Computer")
    List<String> findAllDistinctStorageCapacity();

    @Query(value = "SELECT DISTINCT opticalUnitExist FROM Computer")
    List<String> findAllDistinctOpticalUnitExist();

    @Query(value = "SELECT DISTINCT videoCardExist FROM Computer")
    List<String> findAllDistinctVideoCardExist();

    @Query(value = "SELECT DISTINCT manufacturer FROM Computer")
    List<String> findAllDistinctManufacturer();

    @Query(value = "SELECT DISTINCT form FROM Computer")
    List<String> findAllDistinctForm();

    @Query(value = "SELECT c from Computer c where c.dismantled = true")
    Page<Computer> findAllDismantled(Pageable pageable);

    @Query(value = "SELECT c FROM Computer c WHERE c.received = false")
    List<Computer> findAllUnreceived();

    Page<Computer> findAllByOrderByIdDesc(Pageable pageable);
}

