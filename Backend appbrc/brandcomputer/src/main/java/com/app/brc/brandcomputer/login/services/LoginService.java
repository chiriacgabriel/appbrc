package com.app.brc.brandcomputer.login.services;

import com.app.brc.brandcomputer.login.dto.UserDTO;
import com.app.brc.brandcomputer.login.payload.response.JWTResponse;
import com.app.brc.brandcomputer.login.security.jwt.JWTUtils;
import com.app.brc.brandcomputer.login.security.jwt.UserDetailsImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LoginService {

    private AuthenticationManager authenticationManager;
    private JWTUtils jwtUtils;

    @Autowired
    public LoginService(AuthenticationManager authenticationManager,
                        JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    public JWTResponse login(UserDTO userDTO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDTO.getEmail(), userDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImplement userDetailsImplement = (UserDetailsImplement) authentication.getPrincipal();

        List<String> roles = userDetailsImplement.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return new JWTResponse(userDetailsImplement.getId(),
                jwt,
                userDetailsImplement.getFirstName(),
                userDetailsImplement.getLastName(),
                userDetailsImplement.getEmail(),
                roles);
    }
}
