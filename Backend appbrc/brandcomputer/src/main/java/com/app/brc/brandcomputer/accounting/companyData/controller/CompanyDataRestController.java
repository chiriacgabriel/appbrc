package com.app.brc.brandcomputer.accounting.companyData.controller;


import com.app.brc.brandcomputer.accounting.companyData.dto.CompanyDataDTO;
import com.app.brc.brandcomputer.accounting.companyData.services.CompanyDataService;
import com.app.brc.brandcomputer.accounting.companyData.validator.CompanyDataValidator;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/company-data", produces = "application/json")
public class CompanyDataRestController {

    private CompanyDataService companyDataService;
    private CompanyDataValidator companyDataValidator;

    @Autowired
    public CompanyDataRestController(CompanyDataService companyDataService, CompanyDataValidator companyDataValidator) {
        this.companyDataService = companyDataService;
        this.companyDataValidator = companyDataValidator;
    }

    @GetMapping("/profile")
    public ResponseEntity<CompanyDataDTO> findAll() {
        return ResponseEntity.ok(companyDataService.findCompany());
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody CompanyDataDTO companyDataDTO) {
        if (companyDataValidator.validateCIF(companyDataDTO.getCIF())) {
            return ResponseEntity.badRequest().body(new MessageResponse("CIF already exist !"));
        }

        companyDataService.add(companyDataDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id,
                                    @RequestBody CompanyDataDTO companyDataDTO) {
        if (!companyDataValidator.validateCIF(companyDataDTO.getCIF())) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Company data with CIF: " +
                            companyDataDTO.getCIF() +
                            " could not be found in the database !"));
        }

        companyDataService.update(id, companyDataDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CompanyDataDTO> delete(@PathVariable int id) {
        companyDataService.delete(id);
        return ResponseEntity.ok().build();
    }
}
