package com.app.brc.brandcomputer.components.fan_case.validator;

import com.app.brc.brandcomputer.components.fan_case.dto.FanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.repository.FanCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FanCaseValidator {

    private FanCaseRepository fanCaseRepository;

    @Autowired
    public FanCaseValidator(FanCaseRepository fanCaseRepository) {
        this.fanCaseRepository = fanCaseRepository;
    }

    public boolean validateSerialNumber(FanCaseDTO fanCaseDTO) {
        return fanCaseRepository.existsBySerialNumber(fanCaseDTO.getSerialNumber());
    }

    public boolean validate(int id) {
        return fanCaseRepository.existsById(id);
    }
}
