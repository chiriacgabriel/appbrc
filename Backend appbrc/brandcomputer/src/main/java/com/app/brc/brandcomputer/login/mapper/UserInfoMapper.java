package com.app.brc.brandcomputer.login.mapper;

import com.app.brc.brandcomputer.login.dto.UserInfoDTO;
import com.app.brc.brandcomputer.login.model.UserInfo;
import org.springframework.stereotype.Service;

@Service
public class UserInfoMapper {

    public UserInfo map(UserInfoDTO userInfoDTO) {
        return UserInfo.builder()
                .firstName(userInfoDTO.getFirstName())
                .lastName(userInfoDTO.getLastName())
                .user(userInfoDTO.getUser())
                .build();
    }

    public UserInfoDTO map(UserInfo userInfo) {
        return UserInfoDTO.builder()
                .id(userInfo.getId())
                .firstName(userInfo.getFirstName())
                .lastName(userInfo.getLastName())
                .user(userInfo.getUser())
                .build();
    }
}
