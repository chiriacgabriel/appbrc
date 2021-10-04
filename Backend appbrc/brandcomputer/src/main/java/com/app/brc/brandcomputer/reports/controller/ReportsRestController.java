package com.app.brc.brandcomputer.reports.controller;


import com.app.brc.brandcomputer.reports.service.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/reports", produces = "application/json")
public class ReportsRestController {

    private ReportsService reportsService;

    @Autowired
    public ReportsRestController(ReportsService reportsService) {
        this.reportsService = reportsService;
    }

    @GetMapping("/componentsAdded")
    public ResponseEntity<?> componentsAdded(@RequestParam String startDate,
                                             @RequestParam String endDate){

        return ResponseEntity.ok(reportsService.componentsAdded(startDate, endDate));
    }
}
