package com.heart.dao.system.userDao;

import com.heart.dto.system.user.UserDto;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/1.
 */
@Repository("userDao")
public interface UserDao {
    /**
     * 根据ID加载用户
     */
    UserDto loadUserById(@Param("userid") int userid) throws Exception;

    /**
     * 根据账号加载用户
     */
    UserDto loadUserByAccount(@Param("account") String account) throws Exception;

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
    void deleteUserById(@Param("userid") int userid) throws Exception;

    /**
     * 更新用户
     */
    void updateUser(UserDto userDto) throws Exception;

}
