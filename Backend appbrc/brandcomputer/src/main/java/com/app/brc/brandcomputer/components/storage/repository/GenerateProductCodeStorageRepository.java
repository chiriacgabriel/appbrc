package com.app.brc.brandcomputer.components.storage.repository;

import com.app.brc.brandcomputer.components.storage.model.GenerateProductCodeStorage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeStorageRepository extends JpaRepository<GenerateProductCodeStorage, Integer> {

    List<GenerateProductCodeStorage> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g FROM GenerateProductCodeStorage g WHERE " +
            "g.productName LIKE %:querySearch% OR g.productCode LIKE %:querySearch%")
    List<GenerateProductCodeStorage> findAllByProductNameOrProductCode(String querySearch);
}
