package com.app.brc.brandcomputer.computers.repository;

import com.app.brc.brandcomputer.computers.model.GenerateProductCodeComputer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeComputerRepository extends JpaRepository<GenerateProductCodeComputer, Integer> {

    @Query(value = "select g from GenerateProductCodeComputer g where g.productName like %:querySearch% or g.productCode like %:querySearch%")
    List<GenerateProductCodeComputer> findAllByProductNameOrProductCode(@Param("querySearch") String querySearch);

}
