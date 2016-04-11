package com.heart.serviceImpl.system.userServiceImpl;

import com.heart.dao.system.userDao.UserDao;
import com.heart.dto.system.user.UserDto;
import com.heart.service.system.userService.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/1.
 */
@Service("userService")
public class UserServiceImpl implements UserService{

    @Resource(name="userDao")
    UserDao userDao;

    @Override
    public UserDto loadUserById(int id) throws Exception {
        return userDao.loadUserById(id);
    }

    @Override
    public UserDto loadUserByAccount(String account) throws Exception {
        return userDao.loadUserByAccount(account);
    }

    @Override
    public List<UserDto> loadUserList(UserDto userDto) throws Exception {
        return userDao.loadUserList(userDto);
    }

    @Override
    public void addUser(UserDto userDto) throws Exception {
        userDao.addUser(userDto);
    }

    @Override
    public void deleteUserById(int id) throws Exception {
        userDao.deleteUserById(id);
    }

    @Override
    public void updateUser(UserDto userDto) throws Exception {
        userDao.updateUser(userDto);
    }
}
