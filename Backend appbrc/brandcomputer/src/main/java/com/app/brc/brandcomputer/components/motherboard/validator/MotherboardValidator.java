package com.app.brc.brandcomputer.components.motherboard.validator;

import com.app.brc.brandcomputer.components.motherboard.model.Motherboard;
import com.app.brc.brandcomputer.components.motherboard.repository.MotherboardRepository;
import com.app.brc.brandcomputer.components.powersource.model.PowerSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MotherboardValidator {

    private MotherboardRepository motherboardRepository;

    @Autowired
    public MotherboardValidator(MotherboardRepository motherboardRepository) {
        this.motherboardRepository = motherboardRepository;
    }

    public boolean validate(int id) {
        return motherboardRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return motherboardRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {

        Optional<Motherboard> optionalMotherboard = motherboardRepository.findById(id);
        if (!optionalMotherboard.get().getSerialNumber().equals(serialNumber)) {
            return motherboardRepository.existsBySerialNumber(serialNumber);
        }
        return false;
    }
}
