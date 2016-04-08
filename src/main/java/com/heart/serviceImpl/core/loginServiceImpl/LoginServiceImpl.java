package com.heart.serviceImpl.core.loginServiceImpl;

import com.heart.dao.system.userDao.UserDao;
import com.heart.dto.system.role.RoleDto;
import com.heart.dto.system.user.UserDto;
import com.heart.service.core.loginService.LoginService;
import com.heart.service.system.functionService.FunctionService;
import com.heart.service.system.roleService.RoleService;
import com.heart.service.system.userService.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Service("loginService")
public class LoginServiceImpl implements LoginService {

    @Resource(name = "userService")
    UserService userService;

    @Resource(name = "roleService")
    RoleService roleService;

    @Resource(name = "functionService")
    FunctionService functionService;

    @Override
    public UserDto validateLogin(String account,String passwd) throws Exception {
        UserDto userDto = userService.loadUserByAccount(account);
        if (null != userDto && passwd.equals(userDto.getPassword())){
            if (null != userDto.getRoleid()){
                RoleDto role = roleService.loadRoleById(userDto.getRoleid());
                userDto.setRole(role);
            }
            return userDto;
        }
        return  null;
    }
}
