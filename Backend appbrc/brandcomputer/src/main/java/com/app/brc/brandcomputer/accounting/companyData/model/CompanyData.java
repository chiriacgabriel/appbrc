package com.app.brc.brandcomputer.accounting.companyData.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "companyData")
public class CompanyData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

//    private String firstNameRC;
//    private String lastNameRC;
//    @Lob
//    private byte[] signature;
//    private String ceo;
//    @Lob
//    private byte[] ceoSignature;

}
