package com.app.brc.brandcomputer.computersAssembly.validator;

import com.app.brc.brandcomputer.computersAssembly.repository.ComputerAssemblyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComputerAssemblyValidator {

    private ComputerAssemblyRepository computerAssemblyRepository;

    @Autowired
    public ComputerAssemblyValidator(ComputerAssemblyRepository computerAssemblyRepository) {
        this.computerAssemblyRepository = computerAssemblyRepository;
    }

    public boolean validateSerialNumber(String serialNumber) {
        return computerAssemblyRepository.existsBySerialNumber(serialNumber);
    }
}
