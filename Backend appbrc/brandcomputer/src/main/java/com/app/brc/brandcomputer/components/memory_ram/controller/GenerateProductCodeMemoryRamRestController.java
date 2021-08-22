package com.app.brc.brandcomputer.components.memory_ram.controller;

import com.app.brc.brandcomputer.components.memory_ram.dto.GenerateProductCodeMemoryRamDTO;
import com.app.brc.brandcomputer.components.memory_ram.service.GenerateProductCodeMemoryRamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-memory-ram", produces = "application/json")
public class GenerateProductCodeMemoryRamRestController {

    private GenerateProductCodeMemoryRamService generateProductCodeMemoryRamService;

    @Autowired
    public GenerateProductCodeMemoryRamRestController(GenerateProductCodeMemoryRamService generateProductCodeMemoryRamService) {
        this.generateProductCodeMemoryRamService = generateProductCodeMemoryRamService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeMemoryRamDTO>> getAllCodes(){
        return ResponseEntity.ok(generateProductCodeMemoryRamService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeMemoryRamDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch){
        return ResponseEntity.ok(generateProductCodeMemoryRamService.search(querySearch));
    }

    @PostMapping
    public ResponseEntity<?> addProductCode(@RequestBody GenerateProductCodeMemoryRamDTO GenerateProductCodeMemoryRamDTO){
        generateProductCodeMemoryRamService.addProductCode(GenerateProductCodeMemoryRamDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeMemoryRamDTO> updateProductCode(@PathVariable int id,
                                                                             @RequestBody GenerateProductCodeMemoryRamDTO productCodeSoundCardDTO){
        generateProductCodeMemoryRamService.updateProductCode(id, productCodeSoundCardDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeMemoryRamDTO> deleteProductCode(@PathVariable int id){
        generateProductCodeMemoryRamService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
