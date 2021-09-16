package com.app.brc.brandcomputer.components.casing.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
@ToString
@Entity
@Table(name = "generateProductCodeCase")
public class GenerateProductCodeCase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCode")
    @JsonIgnore
    private List<Case> caseList = new ArrayList<>();
}
