package com.app.brc.brandcomputer.accounting.companyData.repository;

import com.app.brc.brandcomputer.accounting.companyData.model.CompanyData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyDataRepository extends JpaRepository<CompanyData, Integer> {

    boolean existsByCIF(String cif);

    @Query(value = "SELECT c FROM CompanyData c")
    CompanyData getCompany();
}
