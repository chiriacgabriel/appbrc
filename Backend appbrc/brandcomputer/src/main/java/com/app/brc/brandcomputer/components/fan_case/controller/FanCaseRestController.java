package com.app.brc.brandcomputer.components.fan_case.controller;


import com.app.brc.brandcomputer.components.fan_case.dto.FanCaseDTO;
import com.app.brc.brandcomputer.components.fan_case.services.FanCaseService;
import com.app.brc.brandcomputer.components.fan_case.validator.FanCaseValidator;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/fan-case", produces = "application/json")
public class FanCaseRestController {

    private FanCaseService fanCaseService;
    private FanCaseValidator fanCaseValidator;

    @Autowired
    public FanCaseRestController(FanCaseService fanCaseService, FanCaseValidator fanCaseValidator) {
        this.fanCaseService = fanCaseService;
        this.fanCaseValidator = fanCaseValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<FanCaseDTO>> getAllFanCases(@PathVariable Optional<String> query,
                                                           @RequestParam int page,
                                                           @RequestParam int size) {

        if (query.isPresent()) {
            return ResponseEntity.ok(fanCaseService.multiMatchQuery(query.get(), page, size));
        } else {
            return ResponseEntity.ok(fanCaseService.getAllFanCases(page, size));
        }
    }

    @GetMapping("/allDimensions")
    public ResponseEntity<List<String>> getAllDimensions() {
        return ResponseEntity.ok(fanCaseService.getAllDimensions());
    }

    @GetMapping("fanCaseByProductCode/{productCode}")
    public ResponseEntity<Page<FanCaseDTO>> getFanCasesByProductCode(@PathVariable String productCode,
                                                                 @RequestParam int page,
                                                                 @RequestParam int size) {
        return ResponseEntity.ok(fanCaseService.getFanCasesByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size) {

        return ResponseEntity.ok(fanCaseService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStockByProductCode(@RequestParam String search,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size) {
        return ResponseEntity.ok(fanCaseService.searchStockByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<FanCaseDTO>> filterFanCases(@RequestParam(required = false) List<String> dimension,
                                                           @RequestParam(required = false) List<String> state,
                                                           @RequestParam int page,
                                                           @RequestParam int size) {
        return ResponseEntity.ok(fanCaseService.filterFanCases(dimension, state, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addFanCase(@RequestBody FanCaseDTO fanCaseDTO) {
        fanCaseService.addFanCase(fanCaseDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFanCase(@PathVariable int id,
                                           @RequestBody FanCaseDTO fanCaseDTO) {

        if (!fanCaseValidator.validate(id)) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Fan case with serial number: " +
                            fanCaseDTO.getSerialNumber() + " could not be found in the database !"));
        }

        fanCaseService.updateFanCase(fanCaseDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<FanCaseDTO> deleteFanCase(@PathVariable int id) {
        fanCaseService.deleteFanCase(id);
        return ResponseEntity.ok().build();
    }


}
