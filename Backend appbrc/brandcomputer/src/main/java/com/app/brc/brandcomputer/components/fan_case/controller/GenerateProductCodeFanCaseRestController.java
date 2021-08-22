package com.app.brc.brandcomputer.components.fan_case.controller;


import com.app.brc.brandcomputer.components.fan_case.dto.GenerateProductCodeFanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.services.GenerateProductCodeFanCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-fan-case", produces = "application/json")
public class GenerateProductCodeFanCaseRestController {

    private GenerateProductCodeFanCaseService generateProductCodeFanCaseService;

    @Autowired
    public GenerateProductCodeFanCaseRestController(GenerateProductCodeFanCaseService generateProductCodeFanCaseService) {
        this.generateProductCodeFanCaseService = generateProductCodeFanCaseService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeFanCaseDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodeFanCaseService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeFanCaseDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodeFanCaseService.searchByProductCodeOrProductName(querySearch));
    }

    @PostMapping
    public ResponseEntity<GenerateProductCodeFanCaseDTO> addProductCode(@RequestBody GenerateProductCodeFanCaseDTO generateProductCodeFanCaseDTO) {
        generateProductCodeFanCaseService.addProductCode(generateProductCodeFanCaseDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeFanCaseDTO> updateProductCode(@PathVariable int id,
                                                                        @RequestBody GenerateProductCodeFanCaseDTO generateProductCodeFanCaseDTO) {

        generateProductCodeFanCaseService.updateProductCode(id, generateProductCodeFanCaseDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeFanCaseDTO> deleteProductCode(@PathVariable int id) {
        generateProductCodeFanCaseService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
