package com.heart.dto.system.role;

import java.io.Serializable;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
public class RoleFunctionDto implements Serializable {

    private Integer roleid;

    private Integer functionid;

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    public Integer getFunctionid() {
        return functionid;
    }

    public void setFunctionid(Integer functionid) {
        this.functionid = functionid;
    }
}
