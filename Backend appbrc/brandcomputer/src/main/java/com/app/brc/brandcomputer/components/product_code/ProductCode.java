package com.app.brc.brandcomputer.components.product_code;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "productCode")
public class ProductCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private String category;
    private boolean state;
}
