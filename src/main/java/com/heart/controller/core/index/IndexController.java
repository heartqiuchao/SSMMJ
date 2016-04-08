package com.heart.controller.core.index;

import com.heart.dto.system.user.UserProfileDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Controller
public class IndexController {

    @RequestMapping("/index")
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return  mv;
    }

    /**
     * 退出登录
     */
    @RequestMapping("/logout")
    public ModelAndView logout(HttpSession httpSession) {
        ModelAndView mv = new ModelAndView();
        mv.addObject("account", new UserProfileDto());
        mv.setViewName("login");
        httpSession.invalidate();
        return mv;
    }
}
