package com.app.brc.brandcomputer.components.cpu_cooler.controller;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.GenerateProductCodeCpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.service.GenerateProductCodeCpuCoolerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/generate-product-code-cpu-cooler", produces = "application/json")
public class GenerateProductCodeCpuCoolerRestController {

    private GenerateProductCodeCpuCoolerService generateProductCodeCpuCoolerService;

    @Autowired
    public GenerateProductCodeCpuCoolerRestController(GenerateProductCodeCpuCoolerService generateProductCodeCpuCoolerService) {
        this.generateProductCodeCpuCoolerService = generateProductCodeCpuCoolerService;
    }

    @GetMapping
    public ResponseEntity<List<GenerateProductCodeCpuCoolerDTO>> getAllCodes(){
        return ResponseEntity.ok(generateProductCodeCpuCoolerService.getAllCodes());
    }

    @GetMapping("/search")
    public ResponseEntity<List<GenerateProductCodeCpuCoolerDTO>> searchByProductCodeOrProductName(@RequestParam String querySearch){
        return ResponseEntity.ok(generateProductCodeCpuCoolerService.search(querySearch));
    }

    @PostMapping
    public ResponseEntity<?> addProductCode(@RequestBody GenerateProductCodeCpuCoolerDTO generateProductCodeCpuCoolerDTO){
        generateProductCodeCpuCoolerService.addProductCode(generateProductCodeCpuCoolerDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenerateProductCodeCpuCoolerDTO> updateProductCode(@PathVariable int id,
                                                                        @RequestBody GenerateProductCodeCpuCoolerDTO productCodeCpuCoolerDTO){
        generateProductCodeCpuCoolerService.updateProductCode(id, productCodeCpuCoolerDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateProductCodeCpuCoolerDTO> deleteProductCode(@PathVariable int id){
        generateProductCodeCpuCoolerService.deleteProductCode(id);
        return ResponseEntity.ok().build();
    }
}
