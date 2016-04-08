package com.heart.dto.system.user;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import java.io.Serializable;

/**
 * Created by heartqiuchao on 2016/4/7.
 */
public class UserProfileDto implements Serializable {

    @NotEmpty(message = "账号必填")
    @Length(min = 5, max = 20, message = "账号长度必须在5-20之间")
    private String account;

    @NotEmpty(message = "密码必填")
    private String password;

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
