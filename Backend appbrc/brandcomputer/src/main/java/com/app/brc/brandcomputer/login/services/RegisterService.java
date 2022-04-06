package com.app.brc.brandcomputer.login.services;

import com.app.brc.brandcomputer.login.dto.UserDTO;
import com.app.brc.brandcomputer.login.mapper.UserMapper;
import com.app.brc.brandcomputer.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private UserMapper userMapper;
    private UserRepository userRepository;

    @Autowired
    public RegisterService(UserMapper userMapper, UserRepository userRepository) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;

    }

    public void registerUser(UserDTO userDTO) {
        userRepository.save(userMapper.registerUser(userDTO));
    }

}
