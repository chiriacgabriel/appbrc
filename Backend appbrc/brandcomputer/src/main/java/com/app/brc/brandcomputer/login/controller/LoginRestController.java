package com.app.brc.brandcomputer.login.controller;

import com.app.brc.brandcomputer.login.dto.UserDTO;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import com.app.brc.brandcomputer.login.services.LoginService;
import com.app.brc.brandcomputer.login.validator.LoginValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/login", produces = "application/json")
public class LoginRestController {

    private static final String ERROR_MSG = "Email %s or password incorrect !";
    private LoginService loginService;
    private LoginValidator loginValidator;

    @Autowired
    public LoginRestController(LoginService loginService,
                               LoginValidator loginValidator) {
        this.loginService = loginService;
        this.loginValidator = loginValidator;
    }

    @PostMapping
    public ResponseEntity<?> login(@Valid @RequestBody UserDTO userDTO, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        HttpSession session = httpServletRequest.getSession(false);
        if(session == null){
            session = httpServletRequest.getSession(true);
        }

        if (!loginValidator.validate(userDTO.getEmail(), userDTO.getPassword())) {
            return ResponseEntity.badRequest().body(new MessageResponse(String.format(ERROR_MSG, userDTO.getEmail())));
        }
        return ResponseEntity.ok(loginService.login(userDTO));
    }

}
