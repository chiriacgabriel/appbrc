package com.app.brc.brandcomputer.components.casing.controller;

import com.app.brc.brandcomputer.components.casing.dto.GenerateProductCodeCaseDTO;
import com.app.brc.brandcomputer.components.casing.services.GenerateProductCodeCaseService;
import com.app.brc.brandcomputer.components.motherboard.dto.GenerateProductCodeMotherboardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-case", produces = "application/json")
public class GenerateProductCodeCaseRestController {

    private GenerateProductCodeCaseService generateProductCodeCaseService;

    @Autowired
    public GenerateProductCodeCaseRestController(GenerateProductCodeCaseService generateProductCodeCaseService) {
        this.generateProductCodeCaseService = generateProductCodeCaseService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeCaseDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodeCaseService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeCaseDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodeCaseService.searchByProductCodeOrProductName(querySearch));
    }

    @PostMapping
    public ResponseEntity<GenerateProductCodeCaseDTO> addProductCode(@RequestBody GenerateProductCodeCaseDTO generateProductCodeCaseDTO) {
        generateProductCodeCaseService.addProductCode(generateProductCodeCaseDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeCaseDTO> updateProductCode(@PathVariable int id,
                                                                               @RequestBody GenerateProductCodeCaseDTO generateProductCodeCaseDTO) {

        generateProductCodeCaseService.updateProductCode(id, generateProductCodeCaseDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeCaseDTO> deleteProductCode(@PathVariable int id) {
        generateProductCodeCaseService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }

}
