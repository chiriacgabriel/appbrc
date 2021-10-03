package com.app.brc.brandcomputer.components.casing.controller;

import com.app.brc.brandcomputer.components.casing.dto.CaseDTO;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import com.app.brc.brandcomputer.components.casing.services.CaseService;
import com.app.brc.brandcomputer.components.casing.validator.CaseValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@PreAuthorize("hasAnyRole('GUEST')")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/case", produces = "application/json")
public class CaseRestController {

    private CaseService caseService;
    private CaseValidator caseValidator;

    @Autowired
    public CaseRestController(CaseService caseService,
                              CaseValidator caseValidator) {
        this.caseService = caseService;
        this.caseValidator = caseValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<CaseDTO>> getAllCases(@PathVariable Optional<String> query,
                                                     @RequestParam int page,
                                                     @RequestParam int size){
        if (query.isPresent()) {
            return ResponseEntity.ok(caseService.multiMatchQuery(query.get(), page, size));
        } else {
            return ResponseEntity.ok(caseService.getAllCases(page, size));
        }
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<CaseDTO>> filterCase(@RequestParam(required = false) List<String> caseType,
                                                                   @RequestParam(required = false) List<String> compatibleMotherboard,
                                                                   @RequestParam(required = false) List<String> state,
                                                                   @RequestParam int page,
                                                                   @RequestParam int size) {
        return ResponseEntity.ok(caseService.filterCase(caseType, compatibleMotherboard, state, page, size));
    }

    @GetMapping("/compatibleMotherboard")
    public ResponseEntity<List<String>> getAllCompatibleMotherboards() {
        return ResponseEntity.ok(caseService.getAllCompatibleMotherboards());
    }

    @GetMapping("/caseByProductCode/{productCode}")
    public ResponseEntity<Page<CaseDTO>> getCasesByProductCode(@PathVariable String productCode,
                                                                             @RequestParam int page,
                                                                             @RequestParam int size) {
        return ResponseEntity.ok(caseService.getCasesByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size) {

        return ResponseEntity.ok(caseService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStockByProductCode(@RequestParam String search,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size) {
        return ResponseEntity.ok(caseService.searchStockByProductCode(search, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addCase(@RequestBody CaseDTO caseDTO){
        caseService.addCase(caseDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCase(@PathVariable int id,
                                        @RequestBody CaseDTO caseDTO){
        if (!caseValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Case with serial number: " +
                            caseDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        caseService.updateCase(caseDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CaseDTO> deleteCase(@PathVariable int id){
        caseService.deleteCase(id);
        return ResponseEntity.ok().build();
    }
}
