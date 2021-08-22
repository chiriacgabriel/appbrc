package com.app.brc.brandcomputer.components.video_card.services;

import com.app.brc.brandcomputer.components.video_card.dto.VideoCardDTO;
import com.app.brc.brandcomputer.components.video_card.mapper.VideoCardMapper;
import com.app.brc.brandcomputer.components.video_card.repository.VideoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class VideoCardService {

    private VideoCardRepository videoCardRepository;
    private VideoCardMapper videoCardMapper;

    @Autowired
    public VideoCardService(VideoCardRepository videoCardRepository, VideoCardMapper videoCardMapper) {
        this.videoCardRepository = videoCardRepository;
        this.videoCardMapper = videoCardMapper;
    }

    public Page<VideoCardDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return videoCardRepository.multiMatchQuery(query, pageable)
                .map(videoCard -> videoCardMapper.map(videoCard));
    }

    public Page<VideoCardDTO> getAllVideoCards(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return videoCardRepository.findAllByOrderByIdDesc(pageable)
                .map(videoCard -> videoCardMapper.map(videoCard));
    }

    public Page<VideoCardDTO> getVideoCardsByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return videoCardRepository.findAllByGenerateProductCodeVideoCard(videoCardRepository.findByProductCode(productCode), pageable)
                .map(videoCard -> videoCardMapper.map(videoCard));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<VideoCardDTO> stockList = new ArrayList<>();

        videoCardRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            VideoCardDTO videoCardDTO = VideoCardDTO.builder()
                    .generateProductCode(videoCardRepository.findByProductCode(s))
                    .averagePrice(videoCardRepository.averagePriceByProductCode(s))
                    .stock(videoCardRepository.sumAllByGenerateProductCodeVideoCard(s))
                    .build();
            stockList.add(videoCardDTO);

        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", videoCardRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", videoCardRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStockByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<VideoCardDTO> searchStockList = new ArrayList<>();

        videoCardRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            VideoCardDTO videoCardDTO = VideoCardDTO.builder()
                    .generateProductCode(videoCardRepository.findByProductCode(s))
                    .averagePrice(videoCardRepository.averagePriceByProductCode(s))
                    .stock(videoCardRepository.sumAllByGenerateProductCodeVideoCard(s))
                    .build();
            searchStockList.add(videoCardDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", videoCardRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", videoCardRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<VideoCardDTO> filterVideoCards(List<String> manufacturer, List<String> model, List<Integer> memory,
                                               List<String> profile, List<String> typeOfMemory, List<Integer> numberOfBits,
                                               List<String> series, List<String> state, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return videoCardRepository.findAll((root, criteriaQuery, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()) {
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (model != null && !model.isEmpty()) {
                predicates.add(root.get("model").in(model));
            }

            if (memory != null && !memory.isEmpty()) {
                predicates.add(root.get("memory").in(memory));
            }

            if (profile != null && !profile.isEmpty()) {
                predicates.add(root.get("profile").in(profile));
            }

            if (typeOfMemory != null && !typeOfMemory.isEmpty()) {
                predicates.add(root.get("typeOfMemory").in(typeOfMemory));
            }

            if (numberOfBits != null && !numberOfBits.isEmpty()) {
                predicates.add(root.get("numberOfBits").in(numberOfBits));
            }

            if (series != null && !series.isEmpty()) {
                predicates.add(root.get("series").in(series));
            }

            if (state != null && !state.isEmpty()) {
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(videoCard -> videoCardMapper.map(videoCard));
    }


    public Map<String, Object> getAllDataForFilter() {
        Map<String, Object> allDataForFilter = new HashMap<>();
        allDataForFilter.put("manufacturers", videoCardRepository.findAllDistinctManufacturers());
        allDataForFilter.put("models", videoCardRepository.findAllDistinctModels());
        allDataForFilter.put("memory", videoCardRepository.findAllDistinctMemory());
        allDataForFilter.put("profile", videoCardRepository.findAllDistinctProfile());
        allDataForFilter.put("typeOfMemory", videoCardRepository.findAllDistinctTypeOfMemory());
        allDataForFilter.put("numberOfBits", videoCardRepository.findAllDistinctNumberOfBits());
        allDataForFilter.put("series", videoCardRepository.findAllDistinctSeries());
        allDataForFilter.put("state", videoCardRepository.findAllDistinctState());

        return allDataForFilter;
    }

    public void addVideoCard(VideoCardDTO videoCardDTO) {
        videoCardDTO.setCategory("Video Card");
        videoCardDTO.setReceived(false);
        videoCardRepository.save(videoCardMapper.map(videoCardDTO));
    }

    public void updateVideoCard(VideoCardDTO videoCardDTO, int id) {
        videoCardMapper.set(id, videoCardDTO);
    }

    public void deleteVideoCard(int id) {
        videoCardRepository.deleteById(id);
    }
}
