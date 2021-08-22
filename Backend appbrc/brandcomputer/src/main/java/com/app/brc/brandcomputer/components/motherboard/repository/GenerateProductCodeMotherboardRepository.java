package com.app.brc.brandcomputer.components.motherboard.repository;

import com.app.brc.brandcomputer.components.motherboard.model.GenerateProductCodeMotherboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeMotherboardRepository extends JpaRepository<GenerateProductCodeMotherboard, Integer> {

    List<GenerateProductCodeMotherboard> findAllByOrderByCreatedDateDesc();

    @Query(value = "select g from GenerateProductCodeMotherboard g where g.productName like %:querySearch% or g.productCode like %:querySearch%")
    List<GenerateProductCodeMotherboard> findAllByProductNameOrProductCode(@Param("querySearch") String querySearch);
}
