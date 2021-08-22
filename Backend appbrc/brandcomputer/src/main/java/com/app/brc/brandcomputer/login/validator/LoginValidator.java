package com.app.brc.brandcomputer.login.validator;

import com.app.brc.brandcomputer.login.model.User;
import com.app.brc.brandcomputer.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginValidator {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public LoginValidator(UserRepository userRepository,
                          PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;

    }

    public boolean validate(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.filter(user -> passwordEncoder.matches(password, user.getPassword())).isPresent();
    }

}
