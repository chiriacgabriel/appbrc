package com.app.brc.brandcomputer.components.fan_case.repository;

import com.app.brc.brandcomputer.components.casing.model.GenerateProductCodeCase;
import com.app.brc.brandcomputer.components.fan_case.model.GenerateProductCodeFanCase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface GenerateProductCodeFanCaseRepository extends JpaRepository<GenerateProductCodeFanCase, Integer> {

    List<GenerateProductCodeFanCase> findAllByOrderByCreatedDateDesc();

    @Query(value = "select g from GenerateProductCodeFanCase g where g.productName like %:querySearch% or g.productCode like %:querySearch%")
    List<GenerateProductCodeFanCase> findAllByProductNameOrProductCode(@Param("querySearch") String querySearch);
}
