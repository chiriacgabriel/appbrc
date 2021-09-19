package com.app.brc.brandcomputer.components.optical_unit.repository;

import com.app.brc.brandcomputer.components.optical_unit.model.OpticalUnit;
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
public interface OpticalUnitRepository extends JpaRepository<OpticalUnit, Integer>, JpaSpecificationExecutor<OpticalUnit> {

    String queryMultiMatch = "SELECT ou FROM OpticalUnit ou WHERE ou.generateProductCode.productCode LIKE %:query% OR " +
            "ou.generateProductCode.productName LIKE %:query% OR " +
            "ou.serialNumber LIKE %:query% OR " +
            "ou.manufacturer LIKE %:query% OR " +
            "ou.type LIKE %:query% OR " +
            "ou.productInformation LIKE %:query% OR " +
            "ou.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(ou) FROM OpticalUnit ou WHERE ou.generateProductCode.productCode LIKE %:query% OR " +
            "ou.generateProductCode.productName LIKE %:query% OR " +
            "ou.serialNumber LIKE %:query% OR " +
            "ou.manufacturer LIKE %:query% OR " +
            "ou.type LIKE %:query% OR " +
            "ou.productInformation LIKE %:query% OR " +
            "ou.state LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<OpticalUnit> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT ou.type FROM OpticalUnit ou")
        //type is a reserved word and need to use this method of declaration
    List<String> findAllDistinctTypes();

    @Query(value = "SELECT DISTINCT manufacturer FROM OpticalUnit ")
    List<String> findAllDistinctManufacturers();

    Page<OpticalUnit> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode FROM OpticalUnit ",
            countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) FROM OpticalUnit ")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT ou.generateProductCode FROM OpticalUnit ou WHERE ou.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT ou.generateProductCode.productName FROM OpticalUnit ou WHERE ou.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(ou.priceIn) FROM OpticalUnit ou WHERE ou.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(ou.quantity) FROM OpticalUnit ou WHERE ou.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT ou.generateProductCode.productCode FROM OpticalUnit ou WHERE ou.generateProductCode.productCode LIKE %:search% OR ou.generateProductCode.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT ou) FROM OpticalUnit ou WHERE ou.generateProductCode.productCode LIKE %:search% OR ou.generateProductCode.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<OpticalUnit> findAllByState(String state, Pageable pageable);

    List<OpticalUnit> findAllByState(String state);

    @Query(value = "SELECT ou FROM OpticalUnit ou WHERE ou.received = false")
    List<OpticalUnit> findAllUnreceived();

    Page<OpticalUnit> findAllByOrderByIdDesc(Pageable pageable);


}
