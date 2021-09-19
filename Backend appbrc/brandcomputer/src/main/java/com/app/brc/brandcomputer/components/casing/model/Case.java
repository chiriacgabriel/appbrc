package com.app.brc.brandcomputer.components.casing.model;

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
@ToString
@Entity
@Table(name = "cases")
public class Case {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "productCode_id")
    private ProductCode generateProductCode;

    private String serialNumber;
    private String manufacturer;
    private String caseType;
    private String compatibleMotherboard;
    private boolean powerSourceIncluded;
    private String sourcePower;
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

}
