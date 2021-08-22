package com.app.brc.brandcomputer.components.optical_unit.validator;

import com.app.brc.brandcomputer.components.optical_unit.model.OpticalUnit;
import com.app.brc.brandcomputer.components.optical_unit.repository.OpticalUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OpticalUnitValidator {

    private OpticalUnitRepository opticalUnitRepository;

    @Autowired
    public OpticalUnitValidator(OpticalUnitRepository opticalUnitRepository) {
        this.opticalUnitRepository = opticalUnitRepository;
    }

    public boolean validate(int id) {
        return opticalUnitRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return opticalUnitRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<OpticalUnit> optionalOpticalUnit = opticalUnitRepository.findById(id);

        if (!optionalOpticalUnit.get().getSerialNumber().equals(serialNumber)){
            return opticalUnitRepository.existsBySerialNumber(serialNumber);
        }

        return false;
    }
}
