package com.app.brc.brandcomputer.components.powersource.controller;

import com.app.brc.brandcomputer.components.powersource.dto.PowerSourceDTO;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import com.app.brc.brandcomputer.components.powersource.services.PowerSourceService;
import com.app.brc.brandcomputer.components.powersource.validator.PowerSourceValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/powerSource", produces = "application/json")
public class PowerSourceRestController {

    private PowerSourceService powerSourceService;
    private PowerSourceValidator powerSourceValidator;


    @Autowired
    public PowerSourceRestController(PowerSourceService powerSourceService,
                                     PowerSourceValidator powerSourceValidator) {
        this.powerSourceService = powerSourceService;
        this.powerSourceValidator = powerSourceValidator;

    }

    @GetMapping("/{id}")
    public ResponseEntity<PowerSourceDTO> getPowerSourceById(@PathVariable int id) {
        return ResponseEntity.ok(powerSourceService.getPowerSourceById(id));
    }

    @GetMapping("/allManufacturers")
    public ResponseEntity<List<String>> getAllManufacturers() {
        return ResponseEntity.ok(powerSourceService.getAllManufacturers());

    }

    @GetMapping("/sourceTypes")
    public ResponseEntity<List<String>> getAllSourceTypes() {
        return ResponseEntity.ok(powerSourceService.getAllSourceTypes());
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(powerSourceService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStockByProductCode(@RequestParam String search,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size) {

        return ResponseEntity.ok(powerSourceService.searchStockByProductCode(search, page, size));
    }

    @GetMapping("/powerSourcesByProductCode/{productCode}")
    public ResponseEntity<Page<PowerSourceDTO>> getPowerSourcesByProductCode(@PathVariable String productCode, @RequestParam int page,
                                                                                       @RequestParam int size) {
        return ResponseEntity.ok(powerSourceService.getPowerSourcesByProductCode(productCode, page, size));
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<?> getMultiMatchQuery(@PathVariable Optional<String> query, @RequestParam int page, @RequestParam int size) {
        if (query.isPresent()) {
            return ResponseEntity.ok(powerSourceService.multiMatchQuery(query.get(), page, size));

        } else {
            return ResponseEntity.ok(powerSourceService.getAllPowerSources(page, size));
        }

    }

    @GetMapping(value = {"/filter"})
    public ResponseEntity<Page<PowerSourceDTO>> getAllPowerSourcesFilterList(@RequestParam(required = false) List<String> manufacturer,
                                                                                       @RequestParam(required = false) String sourceType,
                                                                                       @RequestParam(required = false) List<String> state,
                                                                                       @RequestParam(required = false) String power,
                                                                                       @RequestParam(required = false) int page,
                                                                                       @RequestParam(required = false) int size) {
        return ResponseEntity.ok(powerSourceService.getFilteredList(manufacturer, sourceType, state, power, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addPowerSource(@RequestBody PowerSourceDTO powerSourceDTO) {

        if (powerSourceValidator.validateSerialNumber(powerSourceDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exist!"));
        }

        powerSourceService.addPowerSource(powerSourceDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePowerSource(@PathVariable int id,
                                               @RequestBody PowerSourceDTO powerSourceDTO) {
        if (!powerSourceValidator.validate(id)) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Power source with serial number: " +
                            powerSourceDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        if (powerSourceValidator.validateSerialNumberWithId(id, powerSourceDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        powerSourceService.updatePowerSource(powerSourceDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PowerSourceDTO> deletePowerSource(@PathVariable int id) {
        powerSourceService.deletePowerSource(id);
        return ResponseEntity.ok().build();
    }

}
