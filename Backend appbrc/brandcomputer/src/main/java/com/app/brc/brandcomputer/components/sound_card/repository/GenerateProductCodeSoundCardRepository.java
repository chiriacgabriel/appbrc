package com.app.brc.brandcomputer.components.sound_card.repository;

import com.app.brc.brandcomputer.components.sound_card.model.GenerateProductCodeSoundCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenerateProductCodeSoundCardRepository extends JpaRepository<GenerateProductCodeSoundCard, Integer> {

    List<GenerateProductCodeSoundCard> findAllByOrderByCreatedDateDesc();

    @Query(value = "SELECT g FROM GenerateProductCodeSoundCard g WHERE " +
            "g.productName LIKE %:querySearch% OR g.productCode LIKE %:querySearch%")
    List<GenerateProductCodeSoundCard> findAllByProductNameOrProductCode(String querySearch);
}
