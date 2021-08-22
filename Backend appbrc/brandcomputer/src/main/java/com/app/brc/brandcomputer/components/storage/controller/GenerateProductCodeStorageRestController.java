package com.app.brc.brandcomputer.components.storage.controller;

import com.app.brc.brandcomputer.components.storage.dto.GenerateProductCodeStorageDTO;
import com.app.brc.brandcomputer.components.storage.service.GenerateProductCodeStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-storage", produces = "application/json")
public class GenerateProductCodeStorageRestController {
    private GenerateProductCodeStorageService generateProductCodeStorageService;

    @Autowired
    public GenerateProductCodeStorageRestController(GenerateProductCodeStorageService generateProductCodeStorageService) {
        this.generateProductCodeStorageService = generateProductCodeStorageService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeStorageDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodeStorageService.getAllCodes());
    }
    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeStorageDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodeStorageService.searchByProductCodeOrProductName(querySearch));
    }
    @PostMapping
    public ResponseEntity<GenerateProductCodeStorageDTO> addProductCode(@RequestBody GenerateProductCodeStorageDTO generateProductCodeStorageDTO) {
        generateProductCodeStorageService.addProductCode(generateProductCodeStorageDTO);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeStorageDTO> updateProductCode(@PathVariable int id,
                                                                           @RequestBody GenerateProductCodeStorageDTO generateProductCodeStorageDTO) {
        generateProductCodeStorageService.updateProductCode(id, generateProductCodeStorageDTO);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeStorageDTO> deleteProductCode(@PathVariable int id) {
        generateProductCodeStorageService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
