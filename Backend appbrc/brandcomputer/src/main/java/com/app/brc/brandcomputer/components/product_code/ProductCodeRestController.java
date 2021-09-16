package com.app.brc.brandcomputer.components.product_code;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
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

    @PostMapping
    public ResponseEntity<ProductCodeDTO> add(@RequestBody ProductCodeDTO productCodeDTO){
        productCodeService.add(productCodeDTO);
        return ResponseEntity.ok().build();
    }
}
