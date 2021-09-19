package com.app.brc.brandcomputer.components.product_code.repository;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductCodeRepository extends JpaRepository<ProductCode, Integer> {

    List<ProductCode> findAllByOrderByCreatedDateDesc();

    List<ProductCode> findAllByCategory(String category);

    @Query(value = "SELECT pc from ProductCode AS pc WHERE pc.productCode LIKE %:query% OR pc.productName LIKE %:query% AND pc.category =:category")
    List<ProductCode> findAllByProductNameOrProductCodeOrCategory(@Param("query") String query, @Param("category") String category);

    @Query(value = "SELECT pc FROM ProductCode AS pc WHERE pc.productCode =:productCode")
    ProductCode findByProductCode(@Param("productCode") String productCode);
}
