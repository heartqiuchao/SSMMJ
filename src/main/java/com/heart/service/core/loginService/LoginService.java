package com.heart.service.core.loginService;

import com.heart.dto.system.user.UserDto;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
public interface LoginService {

    /**
     * 校验登陆信息
     */
    UserDto validateLogin(String account,String passwd) throws Exception;

}
