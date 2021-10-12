package com.app.brc.brandcomputer.login.model;

import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    @UpdateTimestamp
    private Date modificationDate;

    @ManyToOne
    private Role role;

    @OneToOne(mappedBy = "user")
    private UserInfo userInfo;

}
