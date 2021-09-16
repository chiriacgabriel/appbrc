package com.app.brc.brandcomputer.components.product_code;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCodeRepository extends JpaRepository<ProductCode, Integer> {
}
