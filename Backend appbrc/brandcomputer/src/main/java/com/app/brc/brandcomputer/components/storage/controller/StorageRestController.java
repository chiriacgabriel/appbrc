package com.app.brc.brandcomputer.components.storage.controller;

import com.app.brc.brandcomputer.components.storage.dto.StorageDTO;
import com.app.brc.brandcomputer.components.storage.service.StorageService;
import com.app.brc.brandcomputer.components.storage.validator.StorageValidator;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/storage", produces = "application/json")
public class StorageRestController {

    private StorageService storageService;
    private StorageValidator storageValidator;

    @Autowired
    public StorageRestController(StorageService storageService, StorageValidator storageValidator) {
        this.storageService = storageService;
        this.storageValidator = storageValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<StorageDTO>> getAllStorages(@PathVariable Optional<String> query,
                                                           @RequestParam int page,
                                                           @RequestParam int size) {
        if (query.isPresent()) {
            return ResponseEntity.ok(storageService.multiMatchQuery(query.get(), page, size));
        } else {
            return ResponseEntity.ok(storageService.getAllStorages(page, size));
        }
    }

    @GetMapping("manufacturers")
    public ResponseEntity<List<String>> getAllManufacturers() {
        return ResponseEntity.ok(storageService.getAllManufacturers());
    }

    @GetMapping("types")
    public ResponseEntity<List<String>> getAllTypes() {
        return ResponseEntity.ok(storageService.getAllTypes());
    }

    @GetMapping("forms")
    public ResponseEntity<List<String>> getAllForms() {
        return ResponseEntity.ok(storageService.getAllForms());
    }

    @GetMapping("capacities")
    public ResponseEntity<List<Integer>> getAllCapacities() {
        return ResponseEntity.ok(storageService.getAllCapacities());
    }

    @GetMapping("rpm")
    public ResponseEntity<List<Integer>> getAllRPMs() {
        return ResponseEntity.ok(storageService.getAllRPMs());
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<StorageDTO>> filterStorage(@RequestParam(required = false) List<String> manufacturer,
                                                          @RequestParam(required = false) List<String> type,
                                                          @RequestParam(required = false) List<String> form,
                                                          @RequestParam(required = false) List<Integer> capacity,
                                                          @RequestParam(required = false) List<Integer> rpm,
                                                          @RequestParam(required = false) List<String> state,
                                                          @RequestParam int page,
                                                          @RequestParam int size) {
        return ResponseEntity.ok(storageService.filterStorage(manufacturer, type, form, capacity, rpm, state, page, size));
    }

    @GetMapping("storageByProductCode/{productCode}")
    public ResponseEntity<Page<StorageDTO>> getStoragesByProductCode(@PathVariable String productCode,
                                                                     @RequestParam int page,
                                                                     @RequestParam int size) {
        System.out.println(storageService.getStoragesByProductCode(productCode, page, size));
        return ResponseEntity.ok(storageService.getStoragesByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size) {
        return ResponseEntity.ok(storageService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStocksByProductCode(@RequestParam String search,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size) {
        return ResponseEntity.ok(storageService.searchStocksByProductCode(search, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addStorage(@RequestBody StorageDTO storageDTO) {
        if (storageValidator.validateSerialNumber(storageDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        storageService.addStorage(storageDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateStorage(@PathVariable int id,
                                           @RequestBody StorageDTO storageDTO) {
        if (!storageValidator.validate(id)) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Storage with serial number: " +
                            storageDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        if (storageValidator.validateSerialNumberWithId(id, storageDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        storageService.updateStorage(storageDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<StorageDTO> deleteStorage(@PathVariable int id) {
        storageService.deleteStorage(id);
        return ResponseEntity.ok().build();
    }
}
