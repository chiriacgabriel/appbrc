package com.app.brc.brandcomputer.components.sound_card.dto;

import com.app.brc.brandcomputer.components.sound_card.model.SoundCard;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class GenerateProductCodeSoundCardDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    private List<SoundCard> soundCardList;
}
