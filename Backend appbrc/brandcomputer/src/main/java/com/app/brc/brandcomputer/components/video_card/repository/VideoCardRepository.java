package com.app.brc.brandcomputer.components.video_card.repository;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import com.app.brc.brandcomputer.components.video_card.model.VideoCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface VideoCardRepository extends JpaRepository<VideoCard, Integer>, JpaSpecificationExecutor<VideoCard> {

    boolean existsBySerialNumber(String serialNumber);

    String queryMultiMatch = "SELECT v from VideoCard v WHERE v.generateProductCode.productCode LIKE %:query% OR " +
            "v.generateProductCode.productName LIKE %:query% OR " +
            "v.serialNumber LIKE %:query% OR " +
            "v.manufacturer LIKE %:query% OR " +
            "v.productInformation LIKE %:query% OR " +
            "v.state LIKE %:query% OR " +
            "v.model LIKE %:query% OR " +
            "v.profile LIKE %:query% OR " +
            "v.typeOfMemory LIKE %:query% OR " +
            "v.series LIKE %:query%";
    String countQueryMultiMatch = "SELECT COUNT(v) from VideoCard v WHERE v.generateProductCode.productCode LIKE %:query% OR " +
            "v.generateProductCode.productName LIKE %:query% OR " +
            "v.serialNumber LIKE %:query% OR " +
            "v.manufacturer LIKE %:query% OR " +
            "v.productInformation LIKE %:query% OR " +
            "v.state LIKE %:query% OR " +
            "v.model LIKE %:query% OR " +
            "v.profile LIKE %:query% OR " +
            "v.typeOfMemory LIKE %:query% OR " +
            "v.series LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<VideoCard> multiMatchQuery(String query, Pageable pageable);

    Page<VideoCard> findAllByGenerateProductCode(ProductCode productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT generateProductCode.productCode from VideoCard", countQuery = "SELECT COUNT(DISTINCT generateProductCode.productCode) from VideoCard")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT vc.generateProductCode FROM VideoCard vc WHERE vc.generateProductCode.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);

    @Query(value = "select DISTINCT v.generateProductCode.productName from VideoCard v  where v.generateProductCode.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(vc.quantity) FROM VideoCard vc WHERE vc.generateProductCode.productCode =:productCode")
    long sumAllByGenerateProductCode(@Param("productCode") String productCode);

    @Query("SELECT AVG(v.priceIn) FROM VideoCard v WHERE v.generateProductCode.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct v.generateProductCode.productCode from VideoCard v where v.generateProductCode.productName like %:search% or v.generateProductCode.productCode like %:search%",
            countQuery = "select count(distinct v) from VideoCard v where v.generateProductCode.productName like %:search% or v.generateProductCode.productCode like %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    @Query(value = "SELECT DISTINCT manufacturer from VideoCard")
    List<String> findAllDistinctManufacturers();

    @Query(value = "SELECT DISTINCT model from VideoCard")
    List<String> findAllDistinctModels();

    @Query(value = "SELECT DISTINCT memory from VideoCard")
    List<Integer> findAllDistinctMemory();

    @Query(value = "SELECT DISTINCT profile from VideoCard")
    List<String> findAllDistinctProfile();

    @Query(value = "SELECT DISTINCT typeOfMemory from VideoCard")
    List<String> findAllDistinctTypeOfMemory();

    @Query(value = "SELECT DISTINCT numberOfBits from VideoCard")
    List<Integer> findAllDistinctNumberOfBits();

    @Query(value = "SELECT DISTINCT series from VideoCard")
    List<String> findAllDistinctSeries();

    @Query(value = "SELECT DISTINCT state from VideoCard")
    List<String> findAllDistinctState();

    Page<VideoCard> findAllByState(String state, Pageable pageable);

    List<VideoCard> findAllByState(String state);

    @Query(value = "SELECT vc FROM VideoCard vc WHERE vc.received = false")
    List<VideoCard> findAllUnreceived();

    Page<VideoCard> findAllByOrderByIdDesc(Pageable pageable);

    int countAllByCreatedDateBetween(LocalDateTime startDate, LocalDateTime endDate);
}
