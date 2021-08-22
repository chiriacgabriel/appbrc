package com.app.brc.brandcomputer.components.powersource.validator;
import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import com.app.brc.brandcomputer.components.powersource.repository.PowerSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PowerSourceValidator {

    private PowerSourceRepository powerSourceRepository;

    @Autowired
    public PowerSourceValidator(PowerSourceRepository powerSourceRepository) {
        this.powerSourceRepository = powerSourceRepository;
    }

    public boolean validate(int id) {
        return powerSourceRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return powerSourceRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {

        Optional<PowerSource> optionalPowerSource = powerSourceRepository.findById(id);
        if (!optionalPowerSource.get().getSerialNumber().equals(serialNumber)) {
            return powerSourceRepository.existsBySerialNumber(serialNumber);
        }
        return false;
    }


}
