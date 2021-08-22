package com.app.brc.brandcomputer.components.processor.controller;

import com.app.brc.brandcomputer.components.processor.dto.ProcessorDTO;
import com.app.brc.brandcomputer.components.processor.service.ProcessorService;
import com.app.brc.brandcomputer.components.processor.validator.ProcessorValidator;
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
@RequestMapping(value = "/api/processor", produces = "application/json")
public class ProcessorRestController {

    private ProcessorService processorService;
    private ProcessorValidator processorValidator;

    @Autowired
    public ProcessorRestController(ProcessorService processorService, ProcessorValidator processorValidator) {
        this.processorService = processorService;
        this.processorValidator = processorValidator;
    }

    @GetMapping(value = {"search/", "search/{query}"})
    public ResponseEntity<Page<ProcessorDTO>> getAllProcessors(@PathVariable Optional<String> query,
                                                               @RequestParam int page,
                                                               @RequestParam int size){
        if (query.isPresent()){
            return ResponseEntity.ok(processorService.multiMatchQuery(query.get(), page, size));
        }else {
            return ResponseEntity.ok(processorService.getAllProcessors(page, size));
        }
    }

    @GetMapping("/manufacturers")
    public ResponseEntity<List<String>> getAllManufacturers(){
        return ResponseEntity.ok(processorService.getAllManufacturers());
    }

    @GetMapping("/sockets")
    public ResponseEntity<List<String>> getAllSockets(){
        return ResponseEntity.ok(processorService.getAllSockets());
    }

    @GetMapping("/models")
    public ResponseEntity<List<String>> getAllModels(){
        return ResponseEntity.ok(processorService.getAllModels());
    }

    @GetMapping("/numberOfCpuCores")
    public ResponseEntity<List<Integer>> getAllNumbersOfCpuCores(){
        return ResponseEntity.ok(processorService.getAllNumbersOfCpuCores());
    }

    @GetMapping("/numberOfThreads")
    public ResponseEntity<List<Integer>> getAllNumbersOfThreads(){
        return ResponseEntity.ok(processorService.getAllNumbersOfThreads());
    }

    @GetMapping("/base-clocks")
    public ResponseEntity<List<Integer>> getAllBaseClocks(){
        return ResponseEntity.ok(processorService.getAllBaseClocks());
    }

    @GetMapping("/max-boost-clocks")
    public ResponseEntity<List<Integer>> getAllMaxBoostClocks(){
        return ResponseEntity.ok(processorService.getAllMaxBoostClocks());
    }

    @GetMapping("/max-memory-frequencies")
    public ResponseEntity<List<Integer>> getAllMaxMemoryFrequencies(){
        return ResponseEntity.ok(processorService.getAllMaxMemoryFrequencies());
    }

    @GetMapping("/lithography")
    public ResponseEntity<List<Integer>> getAllLithography() {
        return ResponseEntity.ok(processorService.getAllLithography());
    }

    @GetMapping("/typeOfMemoryRam")
    public ResponseEntity<List<String>> getAllTypesOfMemoryRam(){
        return ResponseEntity.ok(processorService.getAllTypesOfMemoryRam());
    }

    @GetMapping("/processorByProductCode/{productCode}")
    public ResponseEntity<Page<ProcessorDTO>> getProcessorByProductCode(@PathVariable String productCode,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size){
        return ResponseEntity.ok(processorService.getProcessorsByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size){
        return ResponseEntity.ok(processorService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStocksByProductCode(@RequestParam String search,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(processorService.searchStocksByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<ProcessorDTO>> filterProcessor(@RequestParam(required = false) List<String> manufacturer,
                                                              @RequestParam(required = false) List<String> socket,
                                                              @RequestParam(required = false) List<String> model,
                                                              @RequestParam(required = false) List<Integer> baseClock,
                                                              @RequestParam(required = false) List<Integer> maxBoostClock,
                                                              @RequestParam(required = false) List<Integer> maxMemoryFrequency,
                                                              @RequestParam(required = false) List<String> typeOfMemoryRam,
                                                              @RequestParam(required = false) List<Integer> numberOfCpuCores,
                                                              @RequestParam(required = false) List<Integer> numberOfThreads,
                                                              @RequestParam(required = false) List<Integer> lithography,
                                                              @RequestParam(required = false) List<String> state,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(processorService.filterProcessor(manufacturer, socket, model,
                baseClock, maxBoostClock, maxMemoryFrequency, typeOfMemoryRam,
                numberOfCpuCores, numberOfThreads, lithography, state,
                page, size));
    }

    @PostMapping
    public ResponseEntity<?> addProcessor(@RequestBody ProcessorDTO processorDTO){
        if (processorValidator.validateSerialNumber(processorDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }
        processorService.addProcessor(processorDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProcessor(@PathVariable int id,
                                             @RequestBody ProcessorDTO processorDTO){
        if (!processorValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Processor with serial number: " +
                            processorDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        processorService.updateProcessor(processorDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProcessorDTO> deleteProcessor(@PathVariable int id){
        processorService.deleteProcessor(id);
        return ResponseEntity.ok().build();
    }
}
