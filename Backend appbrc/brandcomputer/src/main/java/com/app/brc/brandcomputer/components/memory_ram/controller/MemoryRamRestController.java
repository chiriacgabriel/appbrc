package com.app.brc.brandcomputer.components.memory_ram.controller;

import com.app.brc.brandcomputer.components.memory_ram.dto.MemoryRamDTO;
import com.app.brc.brandcomputer.components.memory_ram.service.MemoryRamService;
import com.app.brc.brandcomputer.components.memory_ram.validator.MemoryRamValidator;
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
@RequestMapping(value = "/api/memory-ram", produces = "application/json")
public class MemoryRamRestController {

    private MemoryRamService memoryRamService;
    private MemoryRamValidator memoryRamValidator;

    @Autowired
    public MemoryRamRestController(MemoryRamService memoryRamService, MemoryRamValidator memoryRamValidator) {
        this.memoryRamService = memoryRamService;
        this.memoryRamValidator = memoryRamValidator;
    }

    @GetMapping(value = {"search/", "/search/{query}"})
    public ResponseEntity<Page<MemoryRamDTO>> getAllRams(@PathVariable Optional<String> query,
                                                         @RequestParam int page,
                                                         @RequestParam int size){
        if (query.isPresent()){
            return ResponseEntity.ok(memoryRamService.multiMatchQuery(query.get(), page, size));
        }else {
            return ResponseEntity.ok(memoryRamService.getAllRams(page, size));
        }
    }

    @GetMapping("/manufacturers")
    public ResponseEntity<List<String>> getAllManufacturers(){
        return ResponseEntity.ok(memoryRamService.getAllManufacturers());
    }

    @GetMapping("/modules")
    public ResponseEntity<List<String>> getAllCategories(){
        return ResponseEntity.ok(memoryRamService.getAllModules());
    }

    @GetMapping("/ramTypes")
    public ResponseEntity<List<String>> getAllRamTypes(){
        return ResponseEntity.ok(memoryRamService.getAllRamTypes());
    }

    @GetMapping("/frequencies")
    public ResponseEntity<List<String>> getAllFrequencies(){
        return ResponseEntity.ok(memoryRamService.getAllFrequencies());
    }

    @GetMapping("/capacities")
    public ResponseEntity<List<String>> getAllCapacities(){
        return ResponseEntity.ok(memoryRamService.getAllCapacities());
    }

    @GetMapping("/memoryRamByProductCode/{productCode}")
    public ResponseEntity<Page<MemoryRamDTO>> getMemoryRamByProductCode(@PathVariable String productCode,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(memoryRamService.getMemoryRamByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size){
        return ResponseEntity.ok(memoryRamService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStocksByProductCode(@RequestParam String search,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(memoryRamService.searchStocksByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<MemoryRamDTO>> filterMemoryRam(@RequestParam(required = false) List<String> manufacturer,
                                                              @RequestParam(required = false) List<String> module,
                                                              @RequestParam(required = false) List<String> ramType,
                                                              @RequestParam(required = false) List<String> frequency,
                                                              @RequestParam(required = false) List<String> capacity,
                                                              @RequestParam(required = false) List<String> state,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(memoryRamService.filterMemoryRam(manufacturer, module, ramType, frequency, capacity, state, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addMemoryRam(@RequestBody MemoryRamDTO memoryRamDTO){
        if (memoryRamValidator.validateSerialNumber(memoryRamDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }
        memoryRamService.addMemoryRam(memoryRamDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMemoryRam(@PathVariable int id,
                                             @RequestBody MemoryRamDTO memoryRamDTO){
        if (!memoryRamValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Memory Ram with serial number: " +
                            memoryRamDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        memoryRamService.updateMemoryRam(memoryRamDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MemoryRamDTO> deleteMemoryRam(@PathVariable int id){
        memoryRamService.deleteMemoryRam(id);
        return ResponseEntity.ok().build();
    }
}
