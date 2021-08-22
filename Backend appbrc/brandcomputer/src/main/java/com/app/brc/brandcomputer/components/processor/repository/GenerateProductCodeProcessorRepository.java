package com.app.brc.brandcomputer.components.processor.repository;

import com.app.brc.brandcomputer.components.processor.model.GenerateProductCodeProcessor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeProcessorRepository extends JpaRepository<GenerateProductCodeProcessor, Integer> {

    List<GenerateProductCodeProcessor> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g FROM GenerateProductCodeProcessor g WHERE " +
            "g.productName LIKE %:querySearch% OR g.productCode LIKE %:querySearch%")
    List<GenerateProductCodeProcessor> findAllByProductNameOrProductCode(String querySearch);

}
