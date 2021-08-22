package com.app.brc.brandcomputer.components.optical_unit.controller;

import com.app.brc.brandcomputer.components.optical_unit.dto.OpticalUnitDTO;
import com.app.brc.brandcomputer.components.optical_unit.service.OpticalUnitService;
import com.app.brc.brandcomputer.components.optical_unit.validator.OpticalUnitValidator;
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
@RequestMapping(value = "/api/optical-unit", produces = "application/json")
public class OpticalUnitRestController {

    private OpticalUnitService opticalUnitService;
    private OpticalUnitValidator opticalUnitValidator;

    @Autowired
    public OpticalUnitRestController(OpticalUnitService opticalUnitService, OpticalUnitValidator opticalUnitValidator) {
        this.opticalUnitService = opticalUnitService;
        this.opticalUnitValidator = opticalUnitValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<OpticalUnitDTO>> getAllOpticalUnits(@PathVariable Optional<String> query,
                                                                 @RequestParam int page,
                                                                 @RequestParam int size){
        if (query.isPresent()){
            return ResponseEntity.ok(opticalUnitService.multiMatchQuery(query.get(), page, size));
        }else {
            return ResponseEntity.ok(opticalUnitService.getAllOpticalUnits(page, size));
        }
    }

    @GetMapping("/types")
    public ResponseEntity<List<String>> getAllTypes(){
        return ResponseEntity.ok(opticalUnitService.getAllTypes());
    }

    @GetMapping("manufacturers")
    public ResponseEntity<List<String>> getAllManufacturers(){
        return ResponseEntity.ok(opticalUnitService.getAllManufacturers());
    }

    @GetMapping("opticalUnitByProductCode/{productCode}")
    public ResponseEntity<Page<OpticalUnitDTO>> getOpticalUnitsByProductCode(@PathVariable String productCode,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(opticalUnitService.getOpticalUnitsByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size){
        return ResponseEntity.ok(opticalUnitService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStocksByProductCode(@RequestParam String search,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(opticalUnitService.searchStocksByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<OpticalUnitDTO>> filterOpticalUnit(@RequestParam(required = false) List<String> manufacturer,
                                                              @RequestParam(required = false) List<String> type,
                                                              @RequestParam(required = false) List<String> state,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(opticalUnitService.filterOpticalUnit(manufacturer, type, state, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addOpticalUnit(@RequestBody OpticalUnitDTO opticalUnitDTO){
        if(opticalUnitValidator.validateSerialNumber(opticalUnitDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        opticalUnitService.addOpticalUnit(opticalUnitDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOpticalUnit(@PathVariable int id,
                                             @RequestBody OpticalUnitDTO opticalUnitDTO){
        if (!opticalUnitValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Optical unit with serial number: " +
                            opticalUnitDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        if (opticalUnitValidator.validateSerialNumberWithId(id, opticalUnitDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        opticalUnitService.updateOpticalUnit(opticalUnitDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<OpticalUnitDTO> deleteOpticalUnit(@PathVariable int id){
        opticalUnitService.deleteOpticalUnit(id);
        return ResponseEntity.ok().build();
    }
}
