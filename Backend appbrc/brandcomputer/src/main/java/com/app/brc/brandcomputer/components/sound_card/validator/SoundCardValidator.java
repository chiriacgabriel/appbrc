package com.app.brc.brandcomputer.components.sound_card.validator;

import com.app.brc.brandcomputer.components.sound_card.model.SoundCard;
import com.app.brc.brandcomputer.components.sound_card.repository.SoundCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SoundCardValidator {

    private SoundCardRepository soundCardRepository;

    @Autowired
    public SoundCardValidator(SoundCardRepository soundCardRepository) {
        this.soundCardRepository = soundCardRepository;
    }

    public boolean validate(int id) {
        return soundCardRepository.existsById(id);
    }

    public boolean validateSerialNumber(String serialNumber) {
        return soundCardRepository.existsBySerialNumber(serialNumber);
    }

    public boolean validateSerialNumberWithId(int id, String serialNumber) {
        Optional<SoundCard> optionalSoundCard = soundCardRepository.findById(id);

        if (!optionalSoundCard.get().getSerialNumber().equals(serialNumber)){
            return soundCardRepository.existsBySerialNumber(serialNumber);
        }

        return false;
    }
}
