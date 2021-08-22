package com.app.brc.brandcomputer.components.storage.validator;

import com.app.brc.brandcomputer.components.storage.model.Storage;
import com.app.brc.brandcomputer.components.storage.repository.StorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StorageValidator {

    private StorageRepository storageRepository;

    @Autowired
    public StorageValidator(StorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    public boolean validate(int id) {
        return storageRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return storageRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<Storage> optional = storageRepository.findById(id);

        if (!optional.get().getSerialNumber().equals(serialNumber)){
            return storageRepository.existsBySerialNumber(serialNumber);
        }

        return false;
    }
}
