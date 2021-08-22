package com.app.brc.brandcomputer.components.storage.repository;

import com.app.brc.brandcomputer.components.casing.model.Case;
import com.app.brc.brandcomputer.components.sound_card.model.SoundCard;
import com.app.brc.brandcomputer.components.storage.model.GenerateProductCodeStorage;
import com.app.brc.brandcomputer.components.storage.model.Storage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StorageRepository extends JpaRepository<Storage, Integer>, JpaSpecificationExecutor<Storage> {

    String queryMultiMatch = "SELECT s FROM Storage s WHERE s.generateProductCodeStorage.productCode LIKE %:query% OR " +
            "s.generateProductCodeStorage.productName LIKE %:query% OR " +
            "s.serialNumber LIKE %:query% OR " +
            "s.manufacturer LIKE %:query% OR " +
            "s.model LIKE %:query% OR " +
            "s.type LIKE %:query% OR " +
            "s.form LIKE %:query% OR " +
            "s.productInformation LIKE %:query% OR " +
            "s.state LIKE %:query%";

    String countQueryMultiMatch = "SELECT COUNT(s) FROM Storage s WHERE s.generateProductCodeStorage.productCode LIKE %:query% OR " +
            "s.generateProductCodeStorage.productName LIKE %:query% OR " +
            "s.serialNumber LIKE %:query% OR " +
            "s.manufacturer LIKE %:query% OR " +
            "s.model LIKE %:query% OR " +
            "s.type LIKE %:query% OR " +
            "s.form LIKE %:query% OR " +
            "s.productInformation LIKE %:query% OR " +
            "s.state LIKE %:query%";

    @Query(value = queryMultiMatch, countQuery = countQueryMultiMatch)
    Page<Storage> multiMatchQuery(String query, Pageable pageable);

    @Query(value = "SELECT DISTINCT manufacturer FROM Storage")
    List<String> findAllDistinctManufacturers();

    @Query(value = "SELECT DISTINCT type FROM Storage")
    List<String> findAllDistinctTypes();

    @Query(value = "SELECT DISTINCT form FROM Storage")
    List<String> findAllDistinctForms();

    @Query(value = "SELECT DISTINCT capacity FROM Storage")
    List<Integer> findAllCapacities();

    @Query(value = "SELECT DISTINCT rpm FROM Storage")
    List<Integer> findAllRPMs();

    Page<Storage> findAllByGenerateProductCodeStorage(GenerateProductCodeStorage productCode, Pageable pageable);

    @Query(value = "SELECT DISTINCT generateProductCodeStorage.productCode FROM Storage",
            countQuery = "SELECT COUNT(DISTINCT generateProductCodeStorage.productCode) FROM Storage")
    Page<String> findAllDistinctProductCodes(Pageable pageable);

    @Query(value = "SELECT DISTINCT s.generateProductCodeStorage FROM Storage s WHERE s.generateProductCodeStorage.productCode =:productCode")
    GenerateProductCodeStorage findByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT s.generateProductCodeStorage.productName FROM Storage s WHERE s.generateProductCodeStorage.productCode =:productCode")
    String findDistinctProductNameByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT AVG(s.priceIn) FROM Storage s WHERE s.generateProductCodeStorage.productCode =:productCode")
    Double averagePriceByProductCode(@Param("productCode") String productCode);

    @Query(value = "SELECT SUM(s.quantity) FROM Storage s WHERE s.generateProductCodeStorage.productCode =:productCode")
    long sumAllByGenerateProductCodeStorage(@Param("productCode") String productCode);

    @Query(value = "SELECT DISTINCT s.generateProductCodeStorage.productCode FROM Storage s WHERE s.generateProductCodeStorage.productCode LIKE %:search% OR s.generateProductCodeStorage.productName LIKE %:search%",
            countQuery = "SELECT COUNT(DISTINCT s) FROM Storage s WHERE s.generateProductCodeStorage.productCode LIKE %:search% OR s.generateProductCodeStorage.productName LIKE %:search%")
    Page<String> findAllDistinctByProductNameOrProductCode(@Param("search") String search, Pageable pageable);

    boolean existsBySerialNumber (String serialNumber);

    Page<Storage> findAllByState(String state, Pageable pageable);
    List<Storage> findAllByState(String state);

    @Query(value = "SELECT st FROM Storage st WHERE st.received = false")
    List<Storage> findAllUnreceived();

    Page<Storage> findAllByOrderByIdDesc(Pageable pageable);
}
