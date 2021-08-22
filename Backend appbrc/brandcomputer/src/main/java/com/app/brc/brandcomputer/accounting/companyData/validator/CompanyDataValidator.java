package com.app.brc.brandcomputer.accounting.companyData.validator;

import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyDataValidator {

    private CompanyDataRepository companyDataRepository;

    @Autowired
    public CompanyDataValidator(CompanyDataRepository companyDataRepository) {
        this.companyDataRepository = companyDataRepository;
    }

    public boolean validateCIF(String cif) {
        return companyDataRepository.existsByCIF(cif);
    }
}
