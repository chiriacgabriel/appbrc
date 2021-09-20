package com.app.brc.brandcomputer.accounting.nir.controller;

import com.app.brc.brandcomputer.accounting.nir.dto.NirDTO;
import com.app.brc.brandcomputer.accounting.nir.services.NirService;
import com.app.brc.brandcomputer.accounting.nir.validator.NirValidator;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/nir", produces = "application/json")
public class NirController {

    private NirService nirService;
    private NirValidator nirValidator;

    @Autowired
    public NirController(NirService nirService, NirValidator nirValidator) {
        this.nirService = nirService;
        this.nirValidator = nirValidator;
    }

    @GetMapping
    public ResponseEntity<List<NirDTO>> getAll(){
        return ResponseEntity.ok(nirService.getAll());
    }

    @GetMapping("/unreceived")
    public ResponseEntity<List<Object>> getAllUnreceived(){
        return ResponseEntity.ok((nirService.getAllUnreceived()));
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody NirDTO nirDTO){

        if (nirValidator.validateNirNumber(nirDTO.getNirNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Nir number already exist !"));
        }

        nirService.generateNir(nirDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id,
                                    @RequestBody NirDTO nirDTO){
        if (!nirValidator.validateNirNumber(nirDTO.getNirNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("NIR with document number: " + nirDTO.getNirNumber()
            + " could not be found in the database !"));
        }
        nirService.update(id, nirDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<NirDTO> delete(@PathVariable int id){
        nirService.delete(id);
        return ResponseEntity.ok().build();
    }
}
