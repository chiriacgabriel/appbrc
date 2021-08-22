package com.app.brc.brandcomputer.components.motherboard.controller;

import com.app.brc.brandcomputer.components.motherboard.dto.MotherboardDTO;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import com.app.brc.brandcomputer.components.motherboard.services.MotherboardService;
import com.app.brc.brandcomputer.components.motherboard.validator.MotherboardValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@PreAuthorize("hasAnyRole('USER','ADMIN')")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/motherboard", produces = "application/json")
public class MotherboardRestController {

    private MotherboardService motherboardService;
    private MotherboardValidator motherboardValidator;

    @Autowired
    public MotherboardRestController(MotherboardService motherboardService,
                                     MotherboardValidator motherboardValidator) {
        this.motherboardService = motherboardService;
        this.motherboardValidator = motherboardValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<MotherboardDTO>> getAllMotherboards(@PathVariable Optional<String> query,
                                                                   @RequestParam int page,
                                                                   @RequestParam int size){
        if (query.isPresent()) {
            return ResponseEntity.ok(motherboardService.multiMatchQuery(query.get(), page, size));
        } else {
            return ResponseEntity.ok(motherboardService.getAllMotherboards(page, size));
        }

    }

    @GetMapping("/allManufacturers")
    public ResponseEntity<List<String>> getAllManufacturers() {
        return ResponseEntity.ok(motherboardService.getAllManufacturers());
    }

    @GetMapping("/allCpuSockets")
    public ResponseEntity<List<String>> getAllCpuSocket() {
        return ResponseEntity.ok(motherboardService.getAllCpuSocket());
    }

    @GetMapping("/motherboardByProductCode/{productCode}")
    public ResponseEntity<Page<MotherboardDTO>> getMotherboardsByProductCode(@PathVariable String productCode,
                                                                             @RequestParam int page,
                                                                             @RequestParam int size) {
        return ResponseEntity.ok(motherboardService.getMotherboardsByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size) {

        return ResponseEntity.ok(motherboardService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStockByProductCode(@RequestParam String search,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size) {
        return ResponseEntity.ok(motherboardService.searchStockByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<MotherboardDTO>> filterMotherboards(@RequestParam(required = false) List<String> manufacturer,
                                                                   @RequestParam(required = false) List<String> socket,
                                                                   @RequestParam(required = false) String chipset,
                                                                   @RequestParam(required = false) List<String> state,
                                                                   @RequestParam int page,
                                                                   @RequestParam int size) {
        return ResponseEntity.ok(motherboardService.filterMotherboard(manufacturer, socket, chipset, state, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addMotherboard(@RequestBody MotherboardDTO motherboardDTO){

        if (motherboardValidator.validateSerialNumber(motherboardDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exist!"));
        }
        motherboardService.addMotherboard(motherboardDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMotherboard(@PathVariable int id,
                                               @RequestBody MotherboardDTO motherboardDTO){
        if (!motherboardValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Motherboard with serial number: " +
                            motherboardDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        if (motherboardValidator.validateSerialNumberWithId(id, motherboardDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        motherboardService.updateMotherboard(motherboardDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MotherboardDTO> deleteMotherboard(@PathVariable int id){
        motherboardService.deleteMotherboard(id);
        return ResponseEntity.ok().build();
    }

}
