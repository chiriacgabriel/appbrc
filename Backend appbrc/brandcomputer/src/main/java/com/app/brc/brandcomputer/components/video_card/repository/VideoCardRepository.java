package com.app.brc.brandcomputer.components.video_card.repository;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.storage.model.Storage;
import com.app.brc.brandcomputer.components.video_card.model.GenerateProductCodeVideoCard;
import com.app.brc.brandcomputer.components.video_card.model.VideoCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoCardRepository extends JpaRepository<VideoCard, Integer>, JpaSpecificationExecutor<VideoCard> {

    boolean existsBySerialNumber(String serialNumber);

    String queryMultiMatch = "SELECT v from VideoCard v WHERE v.generateProductCodeVideoCard.productCode LIKE %:query% OR " +
            "v.generateProductCodeVideoCard.productName LIKE %:query% OR " +
            "v.serialNumber LIKE %:query% OR " +
            "v.manufacturer LIKE %:query% OR " +
            "v.productInformation LIKE %:query% OR " +
            "v.state LIKE %:query% OR " +
            "v.model LIKE %:query% OR " +
            "v.profile LIKE %:query% OR " +
            "v.typeOfMemory LIKE %:query% OR " +
            "v.series LIKE %:query%";
    String countQueryMultiMatch = "SELECT COUNT(v) from VideoCard v WHERE v.generateProductCodeVideoCard.productCode LIKE %:query% OR " +
            "v.generateProductCodeVideoCard.productName LIKE %:query% OR " +
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

    Page<VideoCard> findAllByGenerateProductCodeVideoCard(GenerateProductCodeVideoCard productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT generateProductCodeVideoCard.productCode from VideoCard", countQuery = "SELECT COUNT(DISTINCT generateProductCodeVideoCard.productCode) from VideoCard")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT vc.generateProductCodeVideoCard FROM VideoCard vc WHERE vc.generateProductCodeVideoCard.productCode =:productCode")
    GenerateProductCodeVideoCard findByProductCode(@Param("productCode") String productCode);

    @Query(value = "select DISTINCT v.generateProductCodeVideoCard.productName from VideoCard v  where v.generateProductCodeVideoCard.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(vc.quantity) FROM VideoCard vc WHERE vc.generateProductCodeVideoCard.productCode =:productCode")
    long sumAllByGenerateProductCodeVideoCard(@Param("productCode") String productCode);

    @Query("SELECT AVG(v.priceIn) FROM VideoCard v WHERE v.generateProductCodeVideoCard.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "select distinct v.generateProductCodeVideoCard.productCode from VideoCard v where v.generateProductCodeVideoCard.productName like %:search% or v.generateProductCodeVideoCard.productCode like %:search%",
            countQuery = "select count(distinct v) from VideoCard v where v.generateProductCodeVideoCard.productName like %:search% or v.generateProductCodeVideoCard.productCode like %:search%")
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
}
