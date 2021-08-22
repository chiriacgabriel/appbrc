package com.app.brc.brandcomputer.accounting.provider.validator;

import com.app.brc.brandcomputer.accounting.provider.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProviderValidator {

    private ProviderRepository providerRepository;

    @Autowired
    public ProviderValidator(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    public boolean validateCIF(String cif) {
        return providerRepository.existsByCIF(cif);
    }
}
