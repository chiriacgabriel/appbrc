package com.app.brc.brandcomputer.components.video_card.repository;

import com.app.brc.brandcomputer.components.video_card.model.GenerateProductCodeVideoCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeVideoCardRepository extends JpaRepository<GenerateProductCodeVideoCard, Integer> {

    List<GenerateProductCodeVideoCard> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g from GenerateProductCodeVideoCard g where g.productName like %:querySearch% or g.productCode like %:querySearch%")
    List<GenerateProductCodeVideoCard> findAllByProductNameOrProductCode(@Param("querySearch") String querySearch);
}
