package com.app.brc.brandcomputer.accounting.provider.repository;

import com.app.brc.brandcomputer.accounting.provider.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Integer> {

    boolean existsByCIF(String cif);
}
