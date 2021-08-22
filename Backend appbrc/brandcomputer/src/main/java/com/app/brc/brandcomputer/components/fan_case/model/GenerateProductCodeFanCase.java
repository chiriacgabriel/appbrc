package com.app.brc.brandcomputer.components.fan_case.model;

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
@Entity
@Table(name = "generateProductCodeFanCase")
public class GenerateProductCodeFanCase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCodeFanCase")
    @JsonIgnore
    private List<FanCase> fanCaseList = new ArrayList<>();
}
