package com.app.brc.brandcomputer.components.sound_card.controller;

import com.app.brc.brandcomputer.components.sound_card.dto.SoundCardDTO;
import com.app.brc.brandcomputer.components.sound_card.service.SoundCardService;
import com.app.brc.brandcomputer.components.sound_card.validator.SoundCardValidator;
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
@RequestMapping(value = "/api/sound-card" ,produces = "application/json")
public class SoundCardRestController {

    private SoundCardService soundCardService;
    private SoundCardValidator soundCardValidator;

    @Autowired
    public SoundCardRestController(SoundCardService soundCardService, SoundCardValidator soundCardValidator) {
        this.soundCardService = soundCardService;
        this.soundCardValidator = soundCardValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<SoundCardDTO>> getAllSoundCards(@PathVariable Optional<String> query,
                                                               @RequestParam int page,
                                                               @RequestParam int size){
        if (query.isPresent()){
            return ResponseEntity.ok(soundCardService.multiMatchQuery(query.get(), page, size));
        }else {
            return ResponseEntity.ok(soundCardService.getAllSoundCards(page, size));
        }
    }

    @GetMapping("models")
    public ResponseEntity<List<String>> getAllModels(){
        return ResponseEntity.ok(soundCardService.getAllModels());
    }

    @GetMapping("manufacturers")
    public ResponseEntity<List<String>> getAllManufacturers(){
        return ResponseEntity.ok(soundCardService.getAllManufacturers());
    }

    @GetMapping("soundCardByProductCode/{productCode}")
    public ResponseEntity<Page<SoundCardDTO>> getSoundCardsByProductCode(@PathVariable String productCode,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(soundCardService.getSoundCardsByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size){
        return ResponseEntity.ok(soundCardService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStocksByProductCode(@RequestParam String search,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(soundCardService.searchStocksByProductCode(search, page, size));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<SoundCardDTO>> filterSoundCard(@RequestParam(required = false) List<String> manufacturer,
                                                              @RequestParam(required = false) List<String> model,
                                                              @RequestParam(required = false) List<String> state,
                                                              @RequestParam int page,
                                                              @RequestParam int size){
        return ResponseEntity.ok(soundCardService.filterSoundCard(manufacturer, model, state, page, size));
    }

    @PostMapping
    public ResponseEntity<?> addSoundCard(@RequestBody SoundCardDTO soundCardDTO){
        if(soundCardValidator.validateSerialNumber(soundCardDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        soundCardService.addSoundCard(soundCardDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateSoundCard(@PathVariable int id,
                                             @RequestBody SoundCardDTO soundCardDTO){
        if (!soundCardValidator.validate(id)){
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Sound card with serial number: " +
                            soundCardDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }

        if (soundCardValidator.validateSerialNumberWithId(id, soundCardDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        soundCardService.updateSoundCard(soundCardDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<SoundCardDTO> deleteSoundCard(@PathVariable int id){
        soundCardService.deleteSoundCard(id);
        return ResponseEntity.ok().build();
    }

}
