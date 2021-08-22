package com.app.brc.brandcomputer.components.powersource.controller;

import com.app.brc.brandcomputer.components.powersource.dto.GenerateProductCodePowerSourceDTO;
import com.app.brc.brandcomputer.components.powersource.services.GenerateProductCodePowerSourceService;
import com.app.brc.brandcomputer.components.powersource.validator.GenerateProductCodePowerSourceValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-power-source", produces = "application/json")
public class GenerateProductCodePowerSourceRestController {

    private GenerateProductCodePowerSourceService generateProductCodePowerSourceService;
    private GenerateProductCodePowerSourceValidator generateProductCodePowerSourceValidator;

    @Autowired
    public GenerateProductCodePowerSourceRestController(GenerateProductCodePowerSourceService generateProductCodePowerSourceService,
                                                        GenerateProductCodePowerSourceValidator generateProductCodePowerSourceValidator) {
        this.generateProductCodePowerSourceService = generateProductCodePowerSourceService;
        this.generateProductCodePowerSourceValidator = generateProductCodePowerSourceValidator;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodePowerSourceDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodePowerSourceService.getAllCodes());
    }


    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodePowerSourceDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodePowerSourceService.searchByProductCodeOrProductName(querySearch));
    }

    @PostMapping
    public ResponseEntity<GenerateProductCodePowerSourceDTO> addProductCode(@RequestBody GenerateProductCodePowerSourceDTO generateProductCodePowerSourceDTO) {

        generateProductCodePowerSourceService.addProductCode(generateProductCodePowerSourceDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodePowerSourceDTO> updateProductCode(@PathVariable int id,
                                                                               @RequestBody GenerateProductCodePowerSourceDTO generateProductCodePowerSourceDTO) {

        generateProductCodePowerSourceService.updateProductCode(id, generateProductCodePowerSourceDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodePowerSourceDTO> deleteProductCode(@PathVariable int id) {

        generateProductCodePowerSourceService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
