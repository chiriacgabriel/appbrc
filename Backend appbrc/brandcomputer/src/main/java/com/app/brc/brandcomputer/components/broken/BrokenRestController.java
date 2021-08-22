package com.app.brc.brandcomputer.components.broken;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/broken", produces = "application/json")
public class BrokenRestController {

    private BrokenService brokenService;

    public BrokenRestController(BrokenService brokenService) {
        this.brokenService = brokenService;
    }

    @GetMapping()
    public ResponseEntity<?> getAllBroken(@RequestParam int page,
                                          @RequestParam int size){
        return ResponseEntity.ok(brokenService.all(page, size));
    }


}
