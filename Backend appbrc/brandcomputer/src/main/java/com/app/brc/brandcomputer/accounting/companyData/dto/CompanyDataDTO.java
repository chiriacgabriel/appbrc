package com.app.brc.brandcomputer.accounting.companyData.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class CompanyDataDTO {

    private int id;
    private String name;
    private String CIF;
    private String tradeRegister;
    private Double socialCapital;
    private String county;
    private String streetAddress;
    private String city;
    private boolean vatPayer;
    private String bank;
    private String iban;
    private String phone;
    private String fax;
    private String email;
    private String webAddress;
    private String additionalData;

}
