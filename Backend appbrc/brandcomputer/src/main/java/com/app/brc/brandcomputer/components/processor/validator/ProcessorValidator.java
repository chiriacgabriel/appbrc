package com.app.brc.brandcomputer.components.processor.validator;

import com.app.brc.brandcomputer.components.processor.model.Processor;
import com.app.brc.brandcomputer.components.processor.repository.ProcessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProcessorValidator {

    private ProcessorRepository processorRepository;

    @Autowired
    public ProcessorValidator(ProcessorRepository processorRepository) {
        this.processorRepository = processorRepository;
    }

    public boolean validate(int id) {
        return processorRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return processorRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<Processor> optional = processorRepository.findById(id);

        if (!optional.get().getSerialNumber().equals(serialNumber)) {
            return processorRepository.existsBySerialNumber(serialNumber);
        }

        return false;
    }

}
