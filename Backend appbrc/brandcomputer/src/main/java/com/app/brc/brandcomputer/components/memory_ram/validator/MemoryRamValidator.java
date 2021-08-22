package com.app.brc.brandcomputer.components.memory_ram.validator;

import com.app.brc.brandcomputer.components.memory_ram.model.MemoryRam;
import com.app.brc.brandcomputer.components.memory_ram.repository.MemoryRamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemoryRamValidator {

    private MemoryRamRepository memoryRamRepository;

    @Autowired
    public MemoryRamValidator(MemoryRamRepository memoryRamRepository) {
        this.memoryRamRepository = memoryRamRepository;
    }

    public boolean validate(int id) {
        return memoryRamRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return memoryRamRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<MemoryRam> optional = memoryRamRepository.findById(id);

        if (!optional.get().getSerialNumber().equals(serialNumber)) {
            return memoryRamRepository.existsBySerialNumber(serialNumber);
        }

        return false;
    }
}
