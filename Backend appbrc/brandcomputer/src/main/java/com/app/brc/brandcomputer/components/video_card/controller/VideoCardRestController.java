package com.app.brc.brandcomputer.components.video_card.controller;

import com.app.brc.brandcomputer.components.video_card.dto.VideoCardDTO;
import com.app.brc.brandcomputer.components.video_card.services.VideoCardService;
import com.app.brc.brandcomputer.components.video_card.validator.VideoCardValidator;
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
@RequestMapping(value = "/api/video-card", produces = "application/json")
public class VideoCardRestController {

    private VideoCardService videoCardService;
    private VideoCardValidator videoCardValidator;

    @Autowired
    public VideoCardRestController(VideoCardService videoCardService, VideoCardValidator videoCardValidator) {
        this.videoCardService = videoCardService;
        this.videoCardValidator = videoCardValidator;
    }

    @GetMapping(value = {"/search", "/search/{query}"})
    public ResponseEntity<Page<VideoCardDTO>> getAllVideoCards(@PathVariable Optional<String> query,
                                                             @RequestParam int page,
                                                             @RequestParam int size) {
        if (query.isPresent()) {
            return ResponseEntity.ok(videoCardService.multiMatchQuery(query.get(), page, size));
        } else {
            return ResponseEntity.ok(videoCardService.getAllVideoCards(page, size));
        }
    }

    @GetMapping("videoCardByProductCode/{productCode}")
    public ResponseEntity<Page<VideoCardDTO>> getVideoCardsByProductCode(@PathVariable String productCode,
                                                                         @RequestParam int page,
                                                                         @RequestParam int size){
        return ResponseEntity.ok(videoCardService.getVideoCardsByProductCode(productCode, page, size));
    }

    @GetMapping("/stockByProductCode")
    public ResponseEntity<Map<String, Object>> stockByProductCode(@RequestParam int page,
                                                                  @RequestParam int size) {

        return ResponseEntity.ok(videoCardService.stockByProductCode(page, size));
    }

    @GetMapping("/stockByProductCode/search")
    public ResponseEntity<Map<String, Object>> searchStockByProductCode(@RequestParam String search,
                                                                        @RequestParam int page,
                                                                        @RequestParam int size) {
        return ResponseEntity.ok(videoCardService.searchStockByProductCode(search, page, size));
    }

    @GetMapping(value = "/filter")
    public ResponseEntity<Page<VideoCardDTO>> filterVideoCards(@RequestParam(required = false) List<String> manufacturer,
                                                               @RequestParam(required = false) List<String> model,
                                                               @RequestParam(required = false) List<Integer> memory,
                                                               @RequestParam(required = false) List<String> profile,
                                                               @RequestParam(required = false) List<String> typeOfMemory,
                                                               @RequestParam(required = false) List<Integer> numberOfBits,
                                                               @RequestParam(required = false) List<String> series,
                                                               @RequestParam(required = false) List<String> state,
                                                               @RequestParam int page,
                                                               @RequestParam int size) {

        return ResponseEntity.ok(videoCardService.filterVideoCards(manufacturer, model, memory, profile, typeOfMemory,
                numberOfBits, series, state, page, size));
    }

    @GetMapping("/allDataForFilter")
    public ResponseEntity<Map<String, Object>> getAllDataForFilter() {
        return ResponseEntity.ok(videoCardService.getAllDataForFilter());
    }

    @PostMapping
    public ResponseEntity<?> addVideoCard(@RequestBody VideoCardDTO videoCardDTO) {

        if (videoCardValidator.validateSerialNumber(videoCardDTO.getSerialNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exist!"));
        }

        videoCardService.addVideoCard(videoCardDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateVideoCard(@PathVariable int id, @RequestBody VideoCardDTO videoCardDTO) {
        if (!videoCardValidator.validate(id)) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Video Card with serial number: " +
                            videoCardDTO.getSerialNumber() +
                            " could not be found in the database !"));
        }
        if (videoCardValidator.validateSerialNumberWithId(id, videoCardDTO.getSerialNumber())){
            return ResponseEntity.badRequest().body(new MessageResponse("Serial number already exists !"));
        }

        videoCardService.updateVideoCard(videoCardDTO, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<VideoCardDTO> deleteVideoCard(@PathVariable int id) {
        videoCardService.deleteVideoCard(id);
        return ResponseEntity.ok().build();
    }








}
