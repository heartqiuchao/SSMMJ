package com.heart.controller.core.login;

import com.heart.dto.system.user.UserDto;
import com.heart.dto.system.user.UserProfileDto;
import com.heart.service.core.loginService.LoginService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Controller
public class LoginController {

    @Resource(name = "loginService")
    LoginService loginService;

    @RequestMapping(value = { "/" })
    public ModelAndView toLogin() {
        ModelAndView mv = new ModelAndView();
        mv.addObject("account", new UserProfileDto());
        mv.setViewName("login");
        return mv;
    }

    @RequestMapping(value = { "/login" })
    public ModelAndView login(@Valid @ModelAttribute("account") UserProfileDto account, BindingResult errors, HttpSession httpSession) throws Exception{
        ModelAndView mv = new ModelAndView();
        if(errors.hasErrors()){
            mv.setViewName("login");
            return mv;
        }
        UserDto userDto = loginService.validateLogin(account.getAccount(),account.getPassword());
        if (null == userDto){
            mv.setViewName("login");
            return mv;
        }
        httpSession.setAttribute("user",userDto);
        mv.setViewName("redirect:index");
        return mv;
    }

    /**
     * 超时或没有权限退出到首页
     */
    @RequestMapping(value = { "/autoout" })
    public ModelAndView autoGoOut() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("autologout");
        return mv;
    }

}
