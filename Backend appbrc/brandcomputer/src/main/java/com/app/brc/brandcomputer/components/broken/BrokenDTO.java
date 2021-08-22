package com.app.brc.brandcomputer.components.broken;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class BrokenDTO {

    private int id;
    private Object generateProductCode;
    private String serialNumber;
    private String manufacturer;
    private String category;
}
