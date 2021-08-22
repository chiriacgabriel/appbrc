package com.app.brc.brandcomputer.components.processor.model;

import com.app.brc.brandcomputer.accounting.nir.model.Nir;
import com.app.brc.brandcomputer.computers.model.Computer;
import com.app.brc.brandcomputer.computersAssembly.model.ComputerAssembly;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "processor")
public class Processor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "productCode_id")
    private GenerateProductCodeProcessor generateProductCodeProcessor;

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
    private String productInformation;
    private String state;
    private String category;
    private int quantity;
    private String unitOfMeasurement;

    private LocalDateTime soldAt;
    private String soldBy;
    private boolean sold;
    private boolean received;

    @CreationTimestamp
    private LocalDateTime createdDate;
    private String createdBy;

    @UpdateTimestamp
    private LocalDateTime lastUpdated;
    private String updatedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "computer_id")
    private ComputerAssembly computerAssembly;
}
