package com.heart.controller.system.userController;

import com.heart.dto.system.role.RoleDto;
import com.heart.dto.system.user.UserDto;
import com.heart.service.system.roleService.RoleService;
import com.heart.service.system.userService.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/1.
 */
@Controller
@RequestMapping("/system/user")
public class UserController {

    @Resource(name="userService")
    UserService userService;

    @Resource(name = "roleService")
    RoleService roleService;

    @RequestMapping(value = {"/", "/list"})
    public ModelAndView loadUserList(@ModelAttribute("user") UserDto userDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        List<UserDto> userList = userService.loadUserList(userDto);
        mv.addObject("userlist",userList);
        mv.setViewName("/system/user/userList");
        return mv;
    }

    @RequestMapping("add")
    public ModelAndView toAddUser() throws Exception{
        ModelAndView mv = new ModelAndView();
        List<RoleDto> roleList = roleService.loadRoleList();
        mv.addObject("roleList",roleList);
        mv.setViewName("/system/user/userAdd");
        return mv;
    }

    @RequestMapping("saveAdd")
    public ModelAndView addUser(@ModelAttribute("user") UserDto userDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/system/user/list");
        try {
            userService.addUser(userDto);
            mv.setViewName("/success");
        }catch (Exception e){
            mv.setViewName("/fail");
        }
        return mv;
    }

    @RequestMapping("delete")
    public ModelAndView deleteUser(@RequestParam("userid") Integer userid) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/system/user/list");
        try {
            userService.deleteUserById(userid);
            mv.setViewName("/success");
        }catch (Exception e){
            mv.addObject("message", "删除角色异常");
            mv.setViewName("/fail");
        }

        return mv;
    }

    @RequestMapping("edit")
    public ModelAndView toEdit(@RequestParam("userid") Integer userid) throws Exception{
        ModelAndView mv = new ModelAndView();
        UserDto user = userService.loadUserById(userid);
        List<RoleDto> roleList = roleService.loadRoleList();
        mv.addObject("user",user);
        mv.addObject("roleList",roleList);
        mv.setViewName("/system/user/userEdit");
        return mv;
    }

    @RequestMapping("saveEdit")
    public ModelAndView editUser(@ModelAttribute("user") UserDto userDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/system/user/list");
        try {
            userService.updateUser(userDto);
            mv.setViewName("/success");
        }catch (Exception e){
            mv.setViewName("/fail");
        }
        return mv;
    }

}
