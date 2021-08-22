package com.app.brc.brandcomputer.components.processor.dto;

import com.app.brc.brandcomputer.components.processor.model.GenerateProductCodeProcessor;
import lombok.*;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ProcessorDTO {

    private int id;

    private GenerateProductCodeProcessor generateProductCode;

    private long stock;
    private String serialNumber;
    private String manufacturer;

    private String socket;
    private String model;
    private Double baseClock;
    private Double maxBoostClock;
    private String typeOfMemoryRAM;
    private short maxMemoryFrequency;
    private short numberOfCpuCores;
    private short numberOfThreads;
    private short cache;
    private boolean coolerIncluded;
    private short lithography;
    private short thermalDesignPower;

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
