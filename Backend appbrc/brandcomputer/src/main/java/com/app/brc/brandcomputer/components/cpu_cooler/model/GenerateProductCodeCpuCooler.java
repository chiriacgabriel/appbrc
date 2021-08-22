package com.app.brc.brandcomputer.components.cpu_cooler.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "generateProductCodeCpuCooler")
public class GenerateProductCodeCpuCooler {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCodeCpuCooler")
    @JsonIgnore
    List<CpuCooler> cpuCoolerList = new ArrayList<>();
}
