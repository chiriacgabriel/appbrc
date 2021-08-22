package com.app.brc.brandcomputer.computersAssembly.controller;

import com.app.brc.brandcomputer.computersAssembly.dto.ComputerAssemblyDTO;
import com.app.brc.brandcomputer.computersAssembly.services.ComputerAssemblyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/computer-assembly", produces = "application/json")
public class ComputerAssemblyRestController {

    private ComputerAssemblyService computerAssemblyService;

    @Autowired
    public ComputerAssemblyRestController(ComputerAssemblyService computerAssemblyService) {
        this.computerAssemblyService = computerAssemblyService;
    }

    @GetMapping
    public ResponseEntity<List<ComputerAssemblyDTO>> getAllComputers() {
        return ResponseEntity.ok(computerAssemblyService.getAllComputers());
    }

    @PostMapping
    public ResponseEntity<?> addComputer(@RequestBody ComputerAssemblyDTO computerAssemblyDTO) {
        computerAssemblyService.addComputer(computerAssemblyDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ComputerAssemblyDTO> updateComputer(@PathVariable int id, @RequestBody ComputerAssemblyDTO computerAssemblyDTO) {

        computerAssemblyService.updateComputer(id, computerAssemblyDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ComputerAssemblyDTO> deleteComputer(@PathVariable int id) {
        computerAssemblyService.deleteComputer(id);
        return ResponseEntity.ok().build();
    }
}
