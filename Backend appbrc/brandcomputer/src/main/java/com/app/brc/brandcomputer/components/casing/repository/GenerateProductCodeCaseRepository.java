package com.app.brc.brandcomputer.components.casing.repository;


import com.app.brc.brandcomputer.components.casing.model.GenerateProductCodeCase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeCaseRepository extends JpaRepository<GenerateProductCodeCase, Integer> {

    List<GenerateProductCodeCase> findAllByOrderByCreatedDateDesc();

    @Query(value = "select g from GenerateProductCodeCase g where g.productName like %:querySearch% or g.productCode like %:querySearch%")
    List<GenerateProductCodeCase> findAllByProductNameOrProductCode(@Param("querySearch") String querySearch);

    @Query(value = "SELECT DISTINCT productCode FROM GenerateProductCodeCase WHERE productCode =:productCode")
    GenerateProductCodeCase findByProductCode(@Param("productCode") String productCode);

}
