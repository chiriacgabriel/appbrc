package com.app.brc.brandcomputer.login.dto;

import com.app.brc.brandcomputer.login.model.User;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class UserInfoDTO {

    private int id;
    private String firstName;
    private String lastName;
    private User user;

}
