package com.app.brc.brandcomputer.components.video_card.dto;

import com.app.brc.brandcomputer.components.video_card.model.GenerateProductCodeVideoCard;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class VideoCardDTO {

    private int id;

    private GenerateProductCodeVideoCard generateProductCode;

    private String serialNumber;
    private String manufacturer;
    private long stock;
    private Double averagePrice;
    private String model;
    private int memory;
    private String profile;
    private boolean vga;
    private boolean hdmi;
    private boolean dvi;
    private boolean displayPort;
    private short numberOfPortsVGA;
    private short numberOfPortsHDMI;
    private short numberOfPortsDVI;
    private short numberOfPortsDisplayPort;
    private String typeOfMemory;
    private short numberOfBits;
    private String series;
    private Double priceIn;
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
