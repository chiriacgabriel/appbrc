package com.app.brc.brandcomputer.components.sound_card.dto;

import com.app.brc.brandcomputer.components.sound_card.model.GenerateProductCodeSoundCard;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class SoundCardDTO {

    private int id;

    private GenerateProductCodeSoundCard generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;
    private String model;
    private Double priceIn;
    private Double averagePrice;
    private String productInformation;
    private String state;
    private String category;
    private int quantity;
    private String unitOfMeasurement;

    private LocalDateTime soldAt;
    private String soldBy;
    private boolean sold;
    private boolean received;
    private boolean selected;

    private LocalDateTime createdDate;
    private String createdBy;

    private LocalDateTime lastUpdated;
    private String updatedBy;
}
