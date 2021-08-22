package com.app.brc.brandcomputer.components.sound_card.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "generateProductCodeSoundCard")
public class GenerateProductCodeSoundCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCodeSoundCard")
    @JsonIgnore
    private List<SoundCard> soundCardList = new ArrayList<>();
}
