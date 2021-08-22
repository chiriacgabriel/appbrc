package com.app.brc.brandcomputer.accounting.nir.validator;

import com.app.brc.brandcomputer.accounting.nir.repository.NirRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NirValidator {
    private NirRepository nirRepository;

    @Autowired
    public NirValidator(NirRepository nirRepository) {
        this.nirRepository = nirRepository;
    }

    public boolean validateNirNumber(String nirNumber) {
        return nirRepository.existsByNirNumber(nirNumber);
    }
}
