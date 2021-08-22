package com.app.brc.brandcomputer.components.processor.controller;

import com.app.brc.brandcomputer.components.processor.dto.GenerateProductCodeProcessorDTO;
import com.app.brc.brandcomputer.components.processor.repository.GenerateProductCodeProcessorRepository;
import com.app.brc.brandcomputer.components.processor.service.GenerateProductCodeProcessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-processor", produces = "application/json")
public class GenerateProductCodeProcessorRestController {

    private GenerateProductCodeProcessorService generateProductCodeProcessorService;

    @Autowired
    public GenerateProductCodeProcessorRestController(GenerateProductCodeProcessorService generateProductCodeProcessorService) {
        this.generateProductCodeProcessorService = generateProductCodeProcessorService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeProcessorDTO>> getAllCodes(){
        return ResponseEntity.ok(generateProductCodeProcessorService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeProcessorDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch){
        return ResponseEntity.ok(generateProductCodeProcessorService.search(querySearch));
    }

    @PostMapping
    public ResponseEntity<?> addProductCode(@RequestBody GenerateProductCodeProcessorDTO generateProductCodeProcessorDTO){
        generateProductCodeProcessorService.addProductCode(generateProductCodeProcessorDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeProcessorDTO> updateProductCode(@PathVariable int id,
                                                                             @RequestBody GenerateProductCodeProcessorDTO productCodeProcessorDTO){
        generateProductCodeProcessorService.updateProductCode(id, productCodeProcessorDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeProcessorDTO> deleteProductCode(@PathVariable int id){
        generateProductCodeProcessorService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
