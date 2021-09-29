package com.app.brc.brandcomputer.components.product_code.controller;

import com.app.brc.brandcomputer.components.product_code.services.ProductCodeService;
import com.app.brc.brandcomputer.components.product_code.dto.ProductCodeDTO;
import com.app.brc.brandcomputer.components.product_code.mapper.ProductCodeMapper;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "api/product-code", produces = "application/json")
public class ProductCodeRestController {

    private ProductCodeService productCodeService;
    private ProductCodeMapper productCodeMapper;

    @Autowired
    public ProductCodeRestController(ProductCodeService productCodeService, ProductCodeMapper productCodeMapper) {
        this.productCodeService = productCodeService;
        this.productCodeMapper = productCodeMapper;
    }

    @GetMapping
    public ResponseEntity<List<ProductCodeDTO>> getProductCodes(){
        return ResponseEntity.ok(productCodeService.getProductCodes());
    }

    @GetMapping("/{category}")
    public ResponseEntity<List<ProductCodeDTO>> getProductCodes(@PathVariable String category){
        return ResponseEntity.ok(productCodeService.getProductCodesByCategory(category));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchByProductCodeOrProductName(@RequestParam String query,
                                                              @RequestParam String category){
        String message = "No product code found with: " + query;
        int listSize = productCodeService.searchByProductCodeOrProductName(query, category).size();

        if (listSize > 0){
            return ResponseEntity.ok(productCodeService.searchByProductCodeOrProductName(query, category));
        }else {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse(message));
        }
    }

    @PostMapping
    public ResponseEntity<ProductCodeDTO> add(@RequestBody ProductCodeDTO productCodeDTO){
        productCodeService.add(productCodeDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductCodeDTO> update(@PathVariable int id,
                                                 @RequestBody ProductCodeDTO productCodeDTO){
        productCodeService.update(id, productCodeDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProductCodeDTO> delete(@PathVariable int id){
        productCodeService.delete(id);
        return ResponseEntity.ok().build();
    }
}
