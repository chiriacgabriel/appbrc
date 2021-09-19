package com.app.brc.brandcomputer.components.sound_card.repository;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import com.app.brc.brandcomputer.components.sound_card.model.SoundCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SoundCardRepository extends JpaRepository<SoundCard, Integer>, JpaSpecificationExecutor<SoundCard> {

    String queryMultiMatch = "SELECT sc FROM SoundCard sc WHERE sc.generateProductCode.productCode LIKE %:query% OR " +
            "sc.generateProductCode.productName LIKE %:query% OR " +
            "sc.serialNumber LIKE %:query% OR " +
            "sc.manufacturer LIKE %:query% OR " +
            "sc.model LIKE %:query% OR " +
            "sc.productInformation LIKE %:query% OR " +
            "sc.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(sc) FROM SoundCard sc WHERE sc.generateProductCode.productCode LIKE %:query% OR " +
            "sc.generateProductCode.productName LIKE %:query% OR " +
            "sc.serialNumber LIKE %:query% OR " +
            "sc.manufacturer LIKE %:query% OR " +
            "sc.model LIKE %:query% OR " +
            "sc.productInformation LIKE %:query% OR " +
            "sc.state LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<SoundCard> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT model FROM SoundCard")
    List<String> findAllDistinctModels();

    @Query(value = "SELECT DISTINCT manufacturer FROM SoundCard")
    List<String> findAllDistinctManufacturers();

    Page<SoundCard> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT sc.generateProductCode FROM SoundCard sc WHERE sc.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode FROM SoundCard ",
            countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) FROM SoundCard ")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT sc.generateProductCode.productName FROM SoundCard sc WHERE sc.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(sc.priceIn) FROM SoundCard sc WHERE sc.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(sc.quantity) FROM SoundCard sc WHERE sc.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT sc.generateProductCode.productCode FROM SoundCard sc WHERE sc.generateProductCode.productCode LIKE %:search% OR sc.generateProductCode.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT sc) FROM SoundCard sc WHERE sc.generateProductCode.productCode LIKE %:search% OR sc.generateProductCode.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber(String serialNumber);

    Page<SoundCard> findAllByState(String state, Pageable pageable);

    List<SoundCard> findAllByState(String state);

    @Query(value = "SELECT sc FROM SoundCard sc WHERE sc.received = false")
    List<SoundCard> findAllUnreceived();

    Page<SoundCard> findAllByOrderByIdDesc(Pageable pageable);
}

