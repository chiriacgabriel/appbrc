package com.app.brc.brandcomputer.accounting.provider.dto;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ProviderDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String CIF;
    private String tradeRegister;
    private String providerCode;
    private boolean vatPayer;
    private String streetAddress;
    private String city;
    private String county;
    private String country;
    private String iban;
    private String bank;
    private String email;
    private String personOfContact;
    private String phoneNumber;
}
