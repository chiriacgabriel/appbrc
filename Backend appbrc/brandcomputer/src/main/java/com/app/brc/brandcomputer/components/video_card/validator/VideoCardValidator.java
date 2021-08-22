package com.app.brc.brandcomputer.components.video_card.validator;

import com.app.brc.brandcomputer.components.storage.model.Storage;
import com.app.brc.brandcomputer.components.video_card.model.VideoCard;
import com.app.brc.brandcomputer.components.video_card.repository.VideoCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VideoCardValidator {

    private VideoCardRepository videoCardRepository;

    @Autowired
    public VideoCardValidator(VideoCardRepository videoCardRepository) {
        this.videoCardRepository = videoCardRepository;
    }

    public boolean validateSerialNumber(String serialNumber) {
        return videoCardRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validate(int id) {
        return videoCardRepository.existsById(id);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<VideoCard> optionalVideoCard = videoCardRepository.findById(id);
        if (!optionalVideoCard.get().getSerialNumber().equals(serialNumber)){
            return videoCardRepository.existsBySerialNumber(serialNumber);
        }
        return false;
    }

}
