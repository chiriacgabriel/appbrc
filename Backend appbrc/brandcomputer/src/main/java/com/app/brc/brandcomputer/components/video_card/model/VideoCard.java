package com.app.brc.brandcomputer.components.video_card.model;

import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
import com.app.brc.brandcomputer.computersAssembly.model.ComputerAssembly;
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
@Table(name = "videoCard")
public class VideoCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "productCode_id")
    private ProductCode generateProductCode;

    private String serialNumber;
    private String manufacturer;
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
