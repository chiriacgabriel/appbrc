package com.app.brc.brandcomputer.login.controller;

import com.app.brc.brandcomputer.login.dto.UserDTO;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import com.app.brc.brandcomputer.login.services.RegisterService;
import com.app.brc.brandcomputer.login.validator.RegisterValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/register", produces = "application/json")
public class RegisterRestController {

    private RegisterValidator registerValidator;
    private RegisterService registerService;

    @Autowired
    public RegisterRestController(RegisterValidator registerValidator, RegisterService registerService) {
        this.registerValidator = registerValidator;
        this.registerService = registerService;
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserDTO userDTO) {
        if (registerValidator.validate(userDTO)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("There is an account with the email address: " + userDTO.getEmail()));
        }

        if (!registerValidator.confirmPasswordFor(userDTO)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Passwords do not match !"));
        }

        if (!registerValidator.passwordComplexity(userDTO)) {

            final String message = "Password must have: \n" +
                    "at least one numeric character \n" +
                    "at least one lowercase character \n" +
                    "at least one uppercase character \n" +
                    "at least one special character @ # $ % ! \n" +
                    "password length should be at least 8 characters";

            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse(message));
        }

        if (!registerValidator.emailValidation(userDTO)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid Email"));
        }

        registerService.registerUser(userDTO);
        return ResponseEntity.ok(new MessageResponse(userDTO.getEmail() + " registered successfully!"));
    }
}
