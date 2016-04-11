package com.heart.controller.system.roleController;

import com.heart.dto.system.function.FunctionDto;
import com.heart.dto.system.function.FunctionGroupDto;
import com.heart.dto.system.role.RoleDto;
import com.heart.service.system.functionService.FunctionService;
import com.heart.service.system.roleService.RoleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/8.
 */
@Controller
@RequestMapping("/system/role")
public class RoleController {

    @Resource(name = "roleService")
    RoleService roleService;

    @Resource(name = "functionService")
    FunctionService functionService;

    @RequestMapping(value = {"/", "/list"})
    public ModelAndView loadUserList(@ModelAttribute("role") RoleDto roleDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        List<RoleDto> roleList = roleService.loadRoleList();
        mv.addObject("rolelist",roleList);
        mv.setViewName("/system/role/roleList");
        return mv;
    }

    @RequestMapping("add")
    public ModelAndView toAddRole(@RequestParam("roleid") Integer roleid) throws Exception{
        ModelAndView mv = new ModelAndView();
        List<FunctionGroupDto> functionGroupDtoList = functionService.loaadFunctionGroupList();
        List<FunctionDto> functionDtoList = functionService.loadFunctionList();
        mv.addObject("fGroupList",functionGroupDtoList);
        mv.addObject("functionList",functionDtoList);
        mv.addObject("roleid",roleid);
        mv.setViewName("/system/role/roleAdd");
        return mv;
    }

    @RequestMapping("saveAdd")
    public ModelAndView addRole(@ModelAttribute("role") RoleDto roleDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/system/role/list");
        try {
            if (roleService.hasSameRoleName(roleDto.getRoleid(), roleDto.getRolename())){
                mv.addObject("message", "角色名已存在");
                mv.setViewName("/fail");
            }
            else {
                roleService.addRole(roleDto);
                mv.setViewName("/success");
            }
        }catch (Exception e){
            mv.addObject("message", "添加角色异常");
            mv.setViewName("/fail");
        }
        return mv;
    }

    @RequestMapping("delete")
    public ModelAndView deleteRole(@ModelAttribute("role") RoleDto roleDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/system/role/list");
        if (roleService.hasUserInRole(roleDto.getRoleid())){
            mv.addObject("message", "该角色下有用户信息");
            mv.setViewName("/fail");
            return mv;
        }
        else {
            roleService.deleteRoleById(roleDto.getRoleid());
            mv.setViewName("/success");
        }
        return mv;
    }

    @RequestMapping("edit")
    public ModelAndView toEdit(@RequestParam("roleid") Integer roleid) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/system/role/roleEdit");
        List<FunctionGroupDto> functionGroupDtoList = functionService.loaadFunctionGroupList();
        List<FunctionDto> functionDtoList = functionService.loadFunctionList();
        RoleDto role = roleService.loadRoleById(roleid);
        mv.addObject("fGroupList",functionGroupDtoList);
        mv.addObject("functionList",functionDtoList);
        mv.addObject("role",role);
        return mv;
    }

    @RequestMapping("saveEdit")
    public ModelAndView editRole(@ModelAttribute("role") RoleDto roleDto) throws Exception{
        ModelAndView mv = new ModelAndView();
        mv.addObject("url", "/system/role/list");

        if(null != roleDto.getRoledesc()){
            roleDto.setRoledesc(roleDto.getRoledesc().trim());
        }
        //判断用户名是否已存在
        if (roleService.hasSameRoleName(roleDto.getRoleid(), roleDto.getRolename())) {
            mv.addObject("message", "角色已存在");
            mv.setViewName("/fail");
        }
        else {
            roleService.updateRole(roleDto);
            mv.setViewName("/success");
        }
        return mv;
    }

}
