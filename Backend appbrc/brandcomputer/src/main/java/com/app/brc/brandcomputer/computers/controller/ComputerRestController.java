package com.app.brc.brandcomputer.computers.controller;

import com.app.brc.brandcomputer.computers.dto.ComputerDTO;
import com.app.brc.brandcomputer.computers.services.ComputerService;
import com.app.brc.brandcomputer.computers.validator.ComputerValidator;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/computer", produces = "application/json")
public class ComputerRestController {

    private ComputerService computerService;
    private ComputerValidator computerValidator;

    @Autowired
    public ComputerRestController(ComputerService computerService,
                                  ComputerValidator computerValidator) {
        this.computerService = computerService;
        this.computerValidator = computerValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<ComputerDTO>> getAll(@PathVariable Optional<String> query,
                                                    @RequestParam int page,
                                                    @RequestParam int size) {
        if (query.isPresent()) {
            return ResponseEntity.ok(computerService.multiMatchQuery(query.get(), page, size));
        } else {
            return ResponseEntity.ok(computerService.getAll(page, size));
        }
    }

    @GetMapping("computersByProductCode/{productCode}")
    public ResponseEntity<Page<ComputerDTO>> getByProductCode(@PathVariable String productCode,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(computerService.getByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size){
        return ResponseEntity.ok(computerService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStockByProductCode(@RequestParam String search,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size){
        return ResponseEntity.ok(computerService.searchStockByProductCode(search, page, size));
    }

    @GetMapping("/allDataForFilter")
    public ResponseEntity<Map<String, Object>> getAllDataForFilter(){
        return ResponseEntity.ok(computerService.getAllDataForFilter());
    }

    @GetMapping("/computersDismantled")
    public ResponseEntity<Page<ComputerDTO>> getComputersDismantled(@RequestParam int page,
                                                                    @RequestParam int size) {
        return ResponseEntity.ok(computerService.getComputersDismantled(page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<ComputerDTO>> filterComputer(  @RequestParam(required = false) List<String> cpuModel,
                                                              @RequestParam(required = false) List<String> memoryCapacity,
                                                              @RequestParam(required = false) List<String> storageCapacity,
                                                              @RequestParam(required = false) List<Boolean> opticalUnitExist,
                                                              @RequestParam(required = false) List<Boolean> videoCardExist,
                                                              @RequestParam(required = false) List<String> manufacturer,
                                                              @RequestParam(required = false) List<String> form,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(computerService.filterComputer(cpuModel,
                memoryCapacity, storageCapacity, opticalUnitExist,videoCardExist,
                manufacturer,form, page, size));
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody ComputerDTO computerDTO){

        if (computerValidator.validateSerialNumber(computerDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exist!"));
        }

        computerService.add(computerDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id,
                                              @RequestBody ComputerDTO computerDTO){
    if (!computerValidator.validate(id)){
        return ResponseEntity.badRequest()
                .body(new MessageResponse("Computer with serial number: " +
                        computerDTO.getSerialNumber() +
                        " could not be found in the database !"));
    }

    if (computerValidator.validateSerialNumberWithId(id, computerDTO.getSerialNumber())){
        return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
    }

        computerService.update(id, computerDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ComputerDTO> delete(@PathVariable int id){
        computerService.delete(id);
        return ResponseEntity.ok().build();
    }
}
