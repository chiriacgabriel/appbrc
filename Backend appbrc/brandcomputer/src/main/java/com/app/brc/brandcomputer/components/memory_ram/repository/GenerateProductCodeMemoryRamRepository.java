package com.app.brc.brandcomputer.components.memory_ram.repository;

import com.app.brc.brandcomputer.components.memory_ram.model.GenerateProductCodeMemoryRam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeMemoryRamRepository extends JpaRepository<GenerateProductCodeMemoryRam, Integer> {

    List<GenerateProductCodeMemoryRam> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g FROM GenerateProductCodeMemoryRam g WHERE " +
            "g.productName LIKE %:querySearch% OR g.productCode LIKE %:querySearch%")
    List<GenerateProductCodeMemoryRam> findAllByProductNameOrProductCode(String querySearch);
}
