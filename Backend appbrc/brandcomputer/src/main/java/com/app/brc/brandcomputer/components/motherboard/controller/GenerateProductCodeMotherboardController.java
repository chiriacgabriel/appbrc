package com.app.brc.brandcomputer.components.motherboard.controller;

import com.app.brc.brandcomputer.components.motherboard.dto.GenerateProductCodeMotherboardDTO;
import com.app.brc.brandcomputer.components.motherboard.services.GenerateProductCodeMotherboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-motherboard", produces = "application/json")
public class GenerateProductCodeMotherboardController {

    private GenerateProductCodeMotherboardService generateProductCodeMotherboardService;

    @Autowired
    public GenerateProductCodeMotherboardController(GenerateProductCodeMotherboardService generateProductCodeMotherboardService) {
        this.generateProductCodeMotherboardService = generateProductCodeMotherboardService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeMotherboardDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodeMotherboardService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeMotherboardDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodeMotherboardService.searchByProductCodeOrProductName(querySearch));
    }

    @PostMapping
    public ResponseEntity<GenerateProductCodeMotherboardDTO> addProductCode(@RequestBody GenerateProductCodeMotherboardDTO generateProductCodeMotherboardDTO) {
        generateProductCodeMotherboardService.addProductCode(generateProductCodeMotherboardDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeMotherboardDTO> updateProductCode(@PathVariable int id,
                                                                               @RequestBody GenerateProductCodeMotherboardDTO generateProductCodeMotherboardDTO) {

        generateProductCodeMotherboardService.updateProductCode(id, generateProductCodeMotherboardDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeMotherboardDTO> deleteProductCode(@PathVariable int id) {
        generateProductCodeMotherboardService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }



}
