package com.heart.controller.system.userController;

import com.heart.dto.system.user.UserDto;
import com.heart.service.system.userService.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @RequestMapping(value = {"/", "/list"})
    public ModelAndView loadUserList(@ModelAttribute("user") UserDto userDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        List<UserDto> userList = userService.loadUserList(userDto);
        mv.addObject("userlist",userList);
        mv.setViewName("/system/user/userList");
        return mv;
    }

    @RequestMapping("addUser")
    public ModelAndView addUser(@ModelAttribute("user") UserDto userDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/user/list");
        try {
            userService.addUser(userDto);
            mv.setViewName("/success");
        }catch (Exception e){
            mv.setViewName("/fail");
        }
        return mv;
    }

}
