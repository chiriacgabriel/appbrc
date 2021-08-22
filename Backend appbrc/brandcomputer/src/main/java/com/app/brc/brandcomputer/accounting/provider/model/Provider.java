package com.app.brc.brandcomputer.accounting.provider.model;

import com.app.brc.brandcomputer.accounting.nir.model.Nir;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "providers")
public class Provider {

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
