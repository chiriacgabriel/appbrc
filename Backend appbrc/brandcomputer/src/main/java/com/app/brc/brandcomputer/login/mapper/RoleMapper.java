package com.app.brc.brandcomputer.login.mapper;

import com.app.brc.brandcomputer.login.dto.RoleDTO;
import com.app.brc.brandcomputer.login.model.Role;
import org.springframework.stereotype.Service;

@Service
public class RoleMapper {

    public RoleDTO map(Role role) {
        return RoleDTO.builder()
                .id(role.getId())
                .enumRole(role.getEnumRole())
                .nameOfRole(role.getNameOfRole())
                .build();
    }

    public Role map(RoleDTO roleDTO) {
        return Role.builder()
                .enumRole(roleDTO.getEnumRole())
                .nameOfRole(roleDTO.getNameOfRole())
                .build();
    }
}
