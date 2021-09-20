package com.app.brc.brandcomputer.accounting.nir.repository;

import com.app.brc.brandcomputer.accounting.nir.model.NirFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NirFileRepository extends JpaRepository<NirFile, Integer> {

    NirFile findByNirNumber(String nirNumber);

}
