package com.app.brc.brandcomputer.components.cpu_cooler.controller;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.CpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.service.CpuCoolerService;
import com.app.brc.brandcomputer.components.cpu_cooler.validator.CpuCoolerValidator;
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
@RequestMapping(value = "/api/cpu-cooler", produces = "application/json")
public class CpuCoolerRestController {

    private CpuCoolerService cpuCoolerService;
    private CpuCoolerValidator cpuCoolerValidator;


    @Autowired
    public CpuCoolerRestController(CpuCoolerService cpuCoolerService, CpuCoolerValidator cpuCoolerValidator) {
        this.cpuCoolerService = cpuCoolerService;
        this.cpuCoolerValidator = cpuCoolerValidator;
    }

    @GetMapping(value = {"search/", "/search/{query}"})
    public ResponseEntity<Page<CpuCoolerDTO>> getAllCpuCoolers(@PathVariable Optional<String> query,
                                                               @RequestParam int page,
                                                               @RequestParam int size){
        if (query.isPresent()){
            return ResponseEntity.ok(cpuCoolerService.multiMatchQuery(query.get(), page, size));
        }else {
            return ResponseEntity.ok(cpuCoolerService.getAllCpuCoolers(page, size));
        }
    }

    @GetMapping("/socket")
    public ResponseEntity<List<String>> getAllSockets(){
        return ResponseEntity.ok(cpuCoolerService.getAllSockets());
    }

    @GetMapping("/manufacturers")
    public ResponseEntity<List<String>> getAllManufacturers(){
        return ResponseEntity.ok(cpuCoolerService.getAllManufacturers());
    }

    @GetMapping("/cpuCoolerByProductCode/{productCode}")
    public ResponseEntity<Page<CpuCoolerDTO>> getCpuCoolersByProductCode(@PathVariable String productCode,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(cpuCoolerService.getCpuCoolersByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size){
        return ResponseEntity.ok(cpuCoolerService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStocksByProductCode(@RequestParam String search,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(cpuCoolerService.searchStocksByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<CpuCoolerDTO>> filterCpuCooler(@RequestParam(required = false) List<String> manufacturer,
                                                              @RequestParam(required = false) List<String> socket,
                                                              @RequestParam(required = false) List<String> state,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(cpuCoolerService.filterCpuCooler(manufacturer, socket, state, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addCpuCooler(@RequestBody CpuCoolerDTO cpuCoolerDTO){
        cpuCoolerService.addCpuCooler(cpuCoolerDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCpuCooler(@PathVariable int id,
                                             @RequestBody CpuCoolerDTO cpuCoolerDTO){
        if (!cpuCoolerValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Cpu Cooler with serial number: " +
                            cpuCoolerDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        cpuCoolerService.updateCpuCooler(cpuCoolerDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CpuCoolerDTO> deleteCpuCooler(@PathVariable int id){
        cpuCoolerService.deleteCase(id);
        return ResponseEntity.ok().build();
    }
}
