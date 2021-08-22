package com.app.brc.brandcomputer.components.video_card.controller;

import com.app.brc.brandcomputer.components.video_card.dto.GenerateProductCodeVideoCardDTO;
import com.app.brc.brandcomputer.components.video_card.services.GenerateProductCodeVideoCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-video-card", produces = "application/json")
public class GenerateProductCodeVideoCardRestController {

    private GenerateProductCodeVideoCardService generateProductCodeVideoCardService;

    @Autowired
    public GenerateProductCodeVideoCardRestController(GenerateProductCodeVideoCardService generateProductCodeVideoCardService) {
        this.generateProductCodeVideoCardService = generateProductCodeVideoCardService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeVideoCardDTO>> getAllCodes() {
        return ResponseEntity.ok(generateProductCodeVideoCardService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeVideoCardDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch) {
        return ResponseEntity.ok(generateProductCodeVideoCardService.searchByProductCodeOrProductName(querySearch));
    }

    @PostMapping
    public ResponseEntity<GenerateProductCodeVideoCardDTO> addProductCode(@RequestBody GenerateProductCodeVideoCardDTO generateProductCodeVideoCardDTO) {
        generateProductCodeVideoCardService.addProductCode(generateProductCodeVideoCardDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeVideoCardDTO> updateProductCode(@PathVariable int id,
                                                                           @RequestBody GenerateProductCodeVideoCardDTO generateProductCodeVideoCardDTO) {

        generateProductCodeVideoCardService.updateProductCode(id, generateProductCodeVideoCardDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeVideoCardDTO> deleteProductCode(@PathVariable int id) {
        generateProductCodeVideoCardService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
