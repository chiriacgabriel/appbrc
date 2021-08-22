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
            return ResponseEntity.badRequest().body(new MessageResponse("Error: " + userDTO.getEmail() + " is already taken!"));
        }

        if (!registerValidator.confirmPasswordFor(userDTO)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Passwords do not match !"));
        }

        if (!registerValidator.passwordComplexity(userDTO)) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Error: Password must have: minimum 4 characters, 1 lower case, 1 upper case, 1 number, one special character [@ # $ % !]"));
        }

        if (!registerValidator.emailValidation(userDTO)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid Email"));
        }

        registerService.registerUser(userDTO);
        return ResponseEntity.ok(new MessageResponse(userDTO.getEmail() + " registered successfully!"));
    }
}
