package com.app.brc.brandcomputer.computers.validator;

import com.app.brc.brandcomputer.computers.model.Computer;
import com.app.brc.brandcomputer.computers.repository.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ComputerValidator {

    private ComputerRepository computerRepository;

    @Autowired
    public ComputerValidator(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }

    public boolean validateSerialNumber(String serialNumber) {
        return computerRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validate(int id) {
        return computerRepository.existsById(id);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<Computer> optionalComputer = computerRepository.findById(id);
        if (!optionalComputer.get().getSerialNumber().equals(serialNumber)){
            return computerRepository.existsBySerialNumber(serialNumber);
        }
        return false;
    }
}
