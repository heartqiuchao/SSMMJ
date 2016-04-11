package com.heart.service.system.userService;

import com.heart.dto.system.user.UserDto;

import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/1.
 */
public interface UserService {

    /**
     * 根据ID加载用户
     */
    UserDto loadUserById(int id) throws Exception;

    /**
     * 根据账号加载用户
     */
    UserDto loadUserByAccount(String account) throws Exception;

    /**
     * 加载用户列表
     */
    List<UserDto> loadUserList(UserDto userDto) throws Exception;

    /**
     * 新增用户
     */
    void addUser(UserDto userDto) throws Exception;

    /**
     * 删除用户
     */
    void deleteUserById(int id) throws Exception;

    /**
     * 更新用户
     */
    void updateUser(UserDto userDto) throws Exception;

}
