package com.app.brc.brandcomputer.components.cpu_cooler.repository;

import com.app.brc.brandcomputer.components.cpu_cooler.model.GenerateProductCodeCpuCooler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeCpuCoolerRepository extends JpaRepository<GenerateProductCodeCpuCooler, Integer> {

    List<GenerateProductCodeCpuCooler> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g FROM GenerateProductCodeCpuCooler g WHERE " +
            "g.productName LIKE %:querySearch% OR g.productCode LIKE %:querySearch%")
    List<GenerateProductCodeCpuCooler> findAllByProductNameOrProductCode(String querySearch);

}
