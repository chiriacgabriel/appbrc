package com.app.brc.brandcomputer.components.casing.validator;

import com.app.brc.brandcomputer.components.casing.dto.CaseDTO;
import com.app.brc.brandcomputer.components.casing.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CaseValidator {

    private CaseRepository caseRepository;

    @Autowired
    public CaseValidator(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }

    public boolean validate(int id) {
        return caseRepository.existsById(id);
    }

    public boolean validateSerialNumber(CaseDTO caseDTO) {
        return caseRepository.existsBySerialNumber(caseDTO.getSerialNumber());
    }
}
