package com.app.brc.brandcomputer.components.powersource.repository;

import com.app.brc.brandcomputer.components.powersource.model.GenerateProductCodePowerSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodePowerSourceRepository extends JpaRepository<GenerateProductCodePowerSource, Integer> {

    List<GenerateProductCodePowerSource> findAllByOrderByCreatedDateDesc();

    @Query(value = "select g from GenerateProductCodePowerSource g where g.productName like %:querySearch% or g.productCode like %:querySearch%")
    List<GenerateProductCodePowerSource> findAllByProductNameOrProductCode(@Param("querySearch") String querySearch);

}
