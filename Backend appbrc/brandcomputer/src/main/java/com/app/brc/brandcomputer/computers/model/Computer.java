package com.app.brc.brandcomputer.computers.model;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
@Table(name = "computers")
public class Computer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "productCode_id")
    private ProductCode generateProductCode;

    private String serialNumber;
    private String manufacturer;
    private String model;
    private String form;
    private String cpuType;
    private String cpuModel;
    private String memoryType;
    private int memoryCapacity;
    private int numberOfDIMM;
    private int memoryFrequency;
    private boolean storageExist;
    private String storageType;
    private int storageCapacity;
    private boolean opticalUnitExist;
    private String opticalUnit;
    private boolean videoCardExist;
    private String videoCard;
    private boolean soundCardExist;
    private String soundCard;
    private boolean networkCardExist;
    private String networkCard;
    private String category;

    private String state;
    private String productInformation;
    private Double priceIn;
    private boolean dismantled;
    private boolean received;
    private int quantity;
    private String unitOfMeasurement;

    private LocalDateTime soldAt;
    private String soldBy;
    private boolean sold;

    @CreationTimestamp
    private LocalDateTime createdDate;
    private String createdBy;

    @UpdateTimestamp
    private LocalDateTime lastUpdated;
    private String updatedBy;
}
