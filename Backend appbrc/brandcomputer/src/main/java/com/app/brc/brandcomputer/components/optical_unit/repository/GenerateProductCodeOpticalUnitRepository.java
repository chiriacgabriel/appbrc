package com.app.brc.brandcomputer.components.optical_unit.repository;

import com.app.brc.brandcomputer.components.optical_unit.model.GenerateProductCodeOpticalUnit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeOpticalUnitRepository extends JpaRepository<GenerateProductCodeOpticalUnit, Integer> {

    List<GenerateProductCodeOpticalUnit> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g FROM GenerateProductCodeOpticalUnit g WHERE " +
            "g.productName LIKE %:querySearch% OR g.productCode LIKE %:querySearch%")
    List<GenerateProductCodeOpticalUnit> findAllByProductNameOrProductCode(String querySearch);

}
