package com.app.brc.brandcomputer.components.optical_unit.controller;

import com.app.brc.brandcomputer.components.optical_unit.dto.GenerateProductCodeOpticalUnitDTO;
import com.app.brc.brandcomputer.components.optical_unit.service.GenerateProductCodeOpticalUnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-optical-unit", produces = "application/json")
public class GenerateProductCodeOpticalUnitRestController {

    private GenerateProductCodeOpticalUnitService generateProductCodeOpticalUnitService;

    @Autowired
    public GenerateProductCodeOpticalUnitRestController(GenerateProductCodeOpticalUnitService generateProductCodeOpticalUnitService) {
        this.generateProductCodeOpticalUnitService = generateProductCodeOpticalUnitService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeOpticalUnitDTO>> getAllCodes(){
        return ResponseEntity.ok(generateProductCodeOpticalUnitService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeOpticalUnitDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch){
        return ResponseEntity.ok(generateProductCodeOpticalUnitService.search(querySearch));
    }

    @PostMapping
    public ResponseEntity<?> addProductCode(@RequestBody GenerateProductCodeOpticalUnitDTO GenerateProductCodeOpticalUnitDTO){
        generateProductCodeOpticalUnitService.addProductCode(GenerateProductCodeOpticalUnitDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeOpticalUnitDTO> updateProductCode(@PathVariable int id,
                                                                               @RequestBody GenerateProductCodeOpticalUnitDTO generateProductCodeOpticalUnitDTO){
        generateProductCodeOpticalUnitService.updateProductCode(id, generateProductCodeOpticalUnitDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeOpticalUnitDTO> deleteProductCode(@PathVariable int id){
        generateProductCodeOpticalUnitService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
