package com.app.brc.brandcomputer.components.sound_card.service;

import com.app.brc.brandcomputer.components.sound_card.dto.SoundCardDTO;
import com.app.brc.brandcomputer.components.sound_card.mapper.SoundCardMapper;
import com.app.brc.brandcomputer.components.sound_card.repository.SoundCardRepository;
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
public class SoundCardService {

    private SoundCardRepository soundCardRepository;
    private SoundCardMapper soundCardMapper;

    @Autowired
    public SoundCardService(SoundCardRepository soundCardRepository, SoundCardMapper soundCardMapper) {
        this.soundCardRepository = soundCardRepository;
        this.soundCardMapper = soundCardMapper;
    }

    public Page<SoundCardDTO> multiMatchQuery(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return soundCardRepository.multiMatchQuery(query, pageable)
                .map(soundCard -> soundCardMapper.map(soundCard));
    }

    public Page<SoundCardDTO> getAllSoundCards(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return soundCardRepository.findAllByOrderByIdDesc(pageable)
                .map(soundCard -> soundCardMapper.map(soundCard));
    }

    public List<String> getAllModels() {
        return soundCardRepository.findAllDistinctModels();
    }

    public List<String> getAllManufacturers() {
        return soundCardRepository.findAllDistinctManufacturers();
    }

    public Page<SoundCardDTO> getSoundCardsByProductCode(String productCode, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return soundCardRepository.findAllByGenerateProductCodeSoundCard(soundCardRepository.findByProductCode(productCode), pageable)
                .map(soundCard -> soundCardMapper.map(soundCard));
    }

    public Map<String, Object> stockByProductCode(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> stockByProductCode = new HashMap<>();
        List<SoundCardDTO> stockList = new ArrayList<>();

        soundCardRepository.findAllDistinctProductCodes(pageable).forEach(s -> {
            SoundCardDTO soundCardDTO = SoundCardDTO.builder()
                    .generateProductCode(soundCardRepository.findByProductCode(s))
                    .averagePrice(soundCardRepository.averagePriceByProductCode(s))
                    .stock(soundCardRepository.sumAllByGenerateProductCodeSoundCard(s))
                    .build();
            stockList.add(soundCardDTO);
        });

        stockByProductCode.put("content", stockList);
        stockByProductCode.put("totalElements", soundCardRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        stockByProductCode.put("totalPages", soundCardRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return stockByProductCode;
    }

    public Map<String, Object> searchStocksByProductCode(String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Map<String, Object> searchStockByProductCode = new HashMap<>();
        List<SoundCardDTO> searchStockList = new ArrayList<>();

        soundCardRepository.findAllDistinctByProductNameOrProductCode(search, pageable).forEach(s -> {
            SoundCardDTO soundCardDTO = SoundCardDTO.builder()
                    .generateProductCode(soundCardRepository.findByProductCode(s))
                    .averagePrice(soundCardRepository.averagePriceByProductCode(s))
                    .stock(soundCardRepository.sumAllByGenerateProductCodeSoundCard(s))
                    .build();
            searchStockList.add(soundCardDTO);
        });

        searchStockByProductCode.put("content", searchStockList);
        searchStockByProductCode.put("totalElements", soundCardRepository.findAllDistinctProductCodes(pageable).getTotalElements());
        searchStockByProductCode.put("totalPages", soundCardRepository.findAllDistinctProductCodes(pageable).getTotalPages());

        return searchStockByProductCode;
    }

    public Page<SoundCardDTO> filterSoundCard(List<String> manufacturer, List<String> model, List<String> state, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return soundCardRepository.findAll((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (manufacturer != null && !manufacturer.isEmpty()){
                predicates.add(root.get("manufacturer").in(manufacturer));
            }

            if (model != null && !model.isEmpty()){
                predicates.add(root.get("model").in(model));
            }

            if (state !=null && !state.isEmpty()){
                predicates.add(root.get("state").in(state));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        }, pageable).map(soundCard -> soundCardMapper.map(soundCard));
    }


    public void addSoundCard(SoundCardDTO soundCardDTO) {
        soundCardDTO.setCategory("Sound Card");
        soundCardDTO.setReceived(false);
        soundCardRepository.save(soundCardMapper.map(soundCardDTO));
    }

    public void updateSoundCard(SoundCardDTO soundCardDTO, int id) {
        soundCardMapper.set(soundCardDTO, id);
    }

    public void deleteSoundCard(int id) {
        soundCardRepository.deleteById(id);
    }
}
