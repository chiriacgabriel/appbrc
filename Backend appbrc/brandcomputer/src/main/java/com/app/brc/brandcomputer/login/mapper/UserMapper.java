package com.app.brc.brandcomputer.login.mapper;

import com.app.brc.brandcomputer.login.dto.UserDTO;
import com.app.brc.brandcomputer.login.model.Role;
import com.app.brc.brandcomputer.login.model.User;
import com.app.brc.brandcomputer.login.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    private PasswordEncoder passwordEncoder;
    private RoleRepository roleRepository;

    @Autowired
    public UserMapper(PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    public User map(UserDTO userDTO) {
        return User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .role(userDTO.getRole())
                .build();
    }

    public UserDTO map(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .password(user.getPassword())
                .role(user.getRole())
                .build();
    }

    public User registerUser(UserDTO userDTO) {

        Role role = roleRepository.findByEnumRole(Role.EnumRole.ROLE_GUEST)
                .orElseThrow(() -> new RuntimeException("Error: Role user has not been found!"));
        return User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .role(role)
                .build();
    }
}
