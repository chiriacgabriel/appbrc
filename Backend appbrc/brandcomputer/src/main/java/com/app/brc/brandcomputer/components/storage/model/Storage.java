package com.app.brc.brandcomputer.components.storage.model;

import com.app.brc.brandcomputer.accounting.nir.model.Nir;
import com.app.brc.brandcomputer.components.product_code.model.ProductCode;
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
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "storage")
public class Storage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "productCode_id")
    private ProductCode generateProductCode;

    private String serialNumber;
    private String manufacturer;

    private String model;
    private String type;
    private String form;
    private int capacity;
    private int rpm;

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
