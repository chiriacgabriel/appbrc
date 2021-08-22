package com.app.brc.brandcomputer.login.validator;

import com.app.brc.brandcomputer.login.dto.UserDTO;
import com.app.brc.brandcomputer.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class RegisterValidator {

    private UserRepository userRepository;

    @Autowired
    public RegisterValidator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean validate(UserDTO userDTO) {
        return userRepository.existsByEmail(userDTO.getEmail().trim());
    }

    public boolean confirmPasswordFor(UserDTO userDTO) {
        return userDTO.getPassword().trim().equals(userDTO.getConfirmPassword().trim());
    }

    public boolean emailValidation(UserDTO userDTO) {
        String regex = "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";

        Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(userDTO.getEmail());

       return matcher.matches();
    }

    public boolean passwordComplexity(UserDTO userDTO) {
        String regex = "((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{4,40})";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(userDTO.getPassword());

        return matcher.matches();
    }
}
