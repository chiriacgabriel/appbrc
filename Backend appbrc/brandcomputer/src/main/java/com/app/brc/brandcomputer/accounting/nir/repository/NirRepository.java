package com.app.brc.brandcomputer.accounting.nir.repository;

import com.app.brc.brandcomputer.accounting.nir.model.Nir;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public interface NirRepository extends JpaRepository<Nir, Integer> {

    boolean existsByNirNumber(String nirNumber);
}
