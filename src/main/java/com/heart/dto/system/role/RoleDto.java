package com.heart.dto.system.role;

import com.heart.dto.system.function.FunctionDto;
import com.heart.dto.system.function.FunctionGroupDto;

import java.io.Serializable;
import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/5.
 */
public class RoleDto implements Serializable {

    private Integer roleid;

    private String rolename;

    private String roledesc;

    private List<FunctionGroupDto> functionGroupList;

    private List<FunctionDto> functionList;

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    public String getRoledesc() {
        return roledesc;
    }

    public void setRoledesc(String roledesc) {
        this.roledesc = roledesc;
    }

    public List<FunctionGroupDto> getFunctionGroupList() {
        return functionGroupList;
    }

    public void setFunctionGroupList(List<FunctionGroupDto> functionGroupList) {
        this.functionGroupList = functionGroupList;
    }

    public List<FunctionDto> getFunctionList() {
        return functionList;
    }

    public void setFunctionList(List<FunctionDto> functionList) {
        this.functionList = functionList;
    }
}
