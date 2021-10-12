package com.app.brc.brandcomputer.accounting.provider.controller;

import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import com.app.brc.brandcomputer.accounting.provider.dto.ProviderDTO;
import com.app.brc.brandcomputer.accounting.provider.services.ProviderService;
import com.app.brc.brandcomputer.accounting.provider.validator.ProviderValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/providers", produces = "application/json")
public class ProviderRestController {

    private ProviderService providerService;
    private ProviderValidator providerValidator;

    @Autowired
    public ProviderRestController(ProviderService providerService, ProviderValidator providerValidator) {
        this.providerService = providerService;
        this.providerValidator = providerValidator;
    }


    @GetMapping
    public ResponseEntity<List<ProviderDTO>> getAllProviders(){
        return ResponseEntity.ok(providerService.getAllProviders());
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody ProviderDTO providerDTO){
        if (providerValidator.validateCIF(providerDTO.getCIF())){
            return providerValidator.returnValidationMessage(providerDTO.getCIF());
        }

        if (providerDTO.getName().trim().length() == 0){
            return providerValidator.validateName();
        }

        if (providerDTO.getTradeRegister().trim().length() == 0){
            return providerValidator.validateTradeRegister();
        }

        if (providerDTO.getProviderCode().trim().length() == 0){
            return providerValidator.validateProviderCode();
        }

        if (!providerDTO.isVatPayer()){
            return providerValidator.validateVatPayer();
        }

        if (providerDTO.getCity().trim().length() == 0){
            return providerValidator.validateCity();
        }

        if (providerDTO.getCounty().trim().length() == 0){
            return providerValidator.validateCounty();
        }

        if (providerDTO.getCountry().trim().length() == 0){
            return providerValidator.validateCountry();
        }

        if (providerDTO.getStreetAddress().trim().length() == 0){
            return providerValidator.validateStreetAddress();
        }

        providerService.add(providerDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id,
                                              @RequestBody ProviderDTO providerDTO){
        if (!providerValidator.validateCIF(providerDTO.getCIF())){
            return ResponseEntity.badRequest().body(new MessageResponse("Provider with " + providerDTO.getCIF() + " could not be found in the database !"));
        }
        providerService.update(id, providerDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProviderDTO> delete(@PathVariable int id){
        providerService.delete(id);
        return ResponseEntity.ok().build();
    }
}
