package com.app.brc.brandcomputer.components.storage.mapper;

import com.app.brc.brandcomputer.components.storage.dto.StorageDTO;
import com.app.brc.brandcomputer.components.storage.model.Storage;
import com.app.brc.brandcomputer.components.storage.repository.StorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class StorageMapper {

    private StorageRepository storageRepository;

    @Autowired
    public StorageMapper(StorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    public Storage map(StorageDTO storageDTO){
        return Storage.builder()
                .generateProductCode(storageDTO.getGenerateProductCode())
                .serialNumber(storageDTO.getSerialNumber())
                .manufacturer(storageDTO.getManufacturer())
                .model(storageDTO.getModel())
                .type(storageDTO.getType())
                .form(storageDTO.getForm())
                .capacity(storageDTO.getCapacity())
                .rpm(storageDTO.getRpm())
                .priceIn(storageDTO.getPriceIn())
                .productInformation(storageDTO.getProductInformation())
                .state(storageDTO.getState())
                .category(storageDTO.getCategory())
                .quantity(storageDTO.getQuantity())
                .unitOfMeasurement(storageDTO.getUnitOfMeasurement())
                .soldAt(storageDTO.getSoldAt())
                .soldBy(storageDTO.getSoldBy())
                .sold(storageDTO.isSold())
                .received(storageDTO.isReceived())
                .createdDate(storageDTO.getCreatedDate())
                .createdBy(storageDTO.getCreatedBy())
                .lastUpdated(storageDTO.getLastUpdated())
                .updatedBy(storageDTO.getUpdatedBy())
                .build();
    }

    public StorageDTO map(Storage storage){
        return StorageDTO.builder()
                .id(storage.getId())
                .generateProductCode(storage.getGenerateProductCode())
                .serialNumber(storage.getSerialNumber())
                .manufacturer(storage.getManufacturer())
                .model(storage.getModel())
                .type(storage.getType())
                .form(storage.getForm())
                .capacity(storage.getCapacity())
                .rpm(storage.getRpm())
                .priceIn(storage.getPriceIn())
                .productInformation(storage.getProductInformation())
                .state(storage.getState())
                .category(storage.getCategory())
                .quantity(storage.getQuantity())
                .unitOfMeasurement(storage.getUnitOfMeasurement())
                .soldAt(storage.getSoldAt())
                .soldBy(storage.getSoldBy())
                .sold(storage.isSold())
                .received(storage.isReceived())
                .selected(false)
                .createdDate(storage.getCreatedDate())
                .createdBy(storage.getCreatedBy())
                .lastUpdated(storage.getLastUpdated())
                .updatedBy(storage.getUpdatedBy())
                .build();
    }

    public void set(int id, StorageDTO storageDTO){
        Optional<Storage> optional = storageRepository.findById(id);

        if (!optional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Storage not found !");
        }

        Storage dbStorage = optional.get();

        dbStorage.setGenerateProductCode(storageDTO.getGenerateProductCode());
        dbStorage.setSerialNumber(storageDTO.getSerialNumber());
        dbStorage.setManufacturer(storageDTO.getManufacturer());

        dbStorage.setModel(storageDTO.getModel());
        dbStorage.setType(storageDTO.getType());
        dbStorage.setForm(storageDTO.getForm());
        dbStorage.setCapacity(storageDTO.getCapacity());
        dbStorage.setRpm(storageDTO.getRpm());

        dbStorage.setPriceIn(storageDTO.getPriceIn());
        dbStorage.setQuantity(storageDTO.getQuantity());
        dbStorage.setUnitOfMeasurement(storageDTO.getUnitOfMeasurement());
        dbStorage.setProductInformation(storageDTO.getProductInformation());
        dbStorage.setState(storageDTO.getState());

        dbStorage.setUpdatedBy(storageDTO.getUpdatedBy());
        dbStorage.setReceived(storageDTO.isReceived());

        storageRepository.save(dbStorage);
    }
}
