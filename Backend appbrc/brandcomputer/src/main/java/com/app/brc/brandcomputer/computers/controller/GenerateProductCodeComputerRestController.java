package com.app.brc.brandcomputer.computers.controller;

import com.app.brc.brandcomputer.computers.dto.GenerateProductCodeComputerDTO;
import com.app.brc.brandcomputer.computers.services.GenerateProductCodeComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-computer", produces = "application/json")
public class GenerateProductCodeComputerRestController {

    private GenerateProductCodeComputerService generateProductCodeComputerService;

    @Autowired
    public GenerateProductCodeComputerRestController(GenerateProductCodeComputerService generateProductCodeComputerService) {
        this.generateProductCodeComputerService = generateProductCodeComputerService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeComputerDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodeComputerService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeComputerDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodeComputerService.searchByProductCodeOrProductName(querySearch));
    }

    @PostMapping
    public ResponseEntity<GenerateProductCodeComputerDTO> addProductCode(@RequestBody GenerateProductCodeComputerDTO generateProductCodeComputerDTO) {
        generateProductCodeComputerService.addProductCode(generateProductCodeComputerDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeComputerDTO> updateProductCode(@PathVariable int id,
                                                                        @RequestBody GenerateProductCodeComputerDTO generateProductCodeComputerDTO) {

        generateProductCodeComputerService.updateProductCode(id, generateProductCodeComputerDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeComputerDTO> deleteProductCode(@PathVariable int id) {
        generateProductCodeComputerService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
