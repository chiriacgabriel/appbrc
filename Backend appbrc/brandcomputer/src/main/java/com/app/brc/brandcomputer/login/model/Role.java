package com.app.brc.brandcomputer.login.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nameOfRole;

    @Enumerated(EnumType.STRING)
    private EnumRole enumRole;

    @OneToMany(mappedBy = "role")
    private List<User> userList = new ArrayList<>();

    public enum EnumRole {

        ROLE_ADMIN("Admin"),
        ROLE_ACCOUNTANT("Accountant"),
        ROLE_USER("User"),
        ROLE_GUEST("Guest"),
        ROLE_WEBSITE("WebAdmin");

        private String nameOfRole;

        EnumRole(String nameOfRole) {
            this.nameOfRole = nameOfRole;
        }

        public String getNameOfRole() {
            return nameOfRole;
        }
    }

}


