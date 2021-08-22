package com.app.brc.brandcomputer.components.memory_ram.model;

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
@Table(name = "generateProductCodeMemoryRam")
public class GenerateProductCodeMemoryRam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;

    @OneToMany(mappedBy = "generateProductCodeMemoryRam")
    @JsonIgnore
    private List<MemoryRam> memoryRamList = new ArrayList<>();
}
