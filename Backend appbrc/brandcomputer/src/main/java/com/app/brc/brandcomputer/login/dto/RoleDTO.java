package com.app.brc.brandcomputer.login.dto;


import com.app.brc.brandcomputer.login.model.Role;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class RoleDTO {

    private int id;
    private String nameOfRole;
    private Role.EnumRole enumRole;

}
