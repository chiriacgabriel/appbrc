package com.app.brc.brandcomputer.components.sound_card.controller;

import com.app.brc.brandcomputer.components.sound_card.dto.GenerateProductCodeSoundCardDTO;
import com.app.brc.brandcomputer.components.sound_card.service.GenerateProductCodeSoundCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-sound-card", produces = "application/json")
public class GenerateProductCodeSoundCardRestRepository {

    private GenerateProductCodeSoundCardService generateProductCodeSoundCardService;

    @Autowired
    public GenerateProductCodeSoundCardRestRepository(GenerateProductCodeSoundCardService generateProductCodeSoundCardService) {
        this.generateProductCodeSoundCardService = generateProductCodeSoundCardService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeSoundCardDTO>> getAllCodes(){
        return ResponseEntity.ok(generateProductCodeSoundCardService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeSoundCardDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch){
        return ResponseEntity.ok(generateProductCodeSoundCardService.search(querySearch));
    }

    @PostMapping
    public ResponseEntity<?> addProductCode(@RequestBody GenerateProductCodeSoundCardDTO generateProductCodeSoundCardDTO){
        generateProductCodeSoundCardService.addProductCode(generateProductCodeSoundCardDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeSoundCardDTO> updateProductCode(@PathVariable int id,
                                                                             @RequestBody GenerateProductCodeSoundCardDTO productCodeSoundCardDTO){
        generateProductCodeSoundCardService.updateProductCode(id, productCodeSoundCardDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeSoundCardDTO> deleteProductCode(@PathVariable int id){
        generateProductCodeSoundCardService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
