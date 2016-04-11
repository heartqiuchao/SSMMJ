package com.heart.dto.system.function;

import java.io.Serializable;

/**
 * Created by heartqiuchao on 2016/4/5.
 */
public class FunctionDto implements Serializable{

    private Integer functionid;

    private String functionname;

    private String url;

    private Integer groupid;

    private String functiondesc;

    private String icon;

    public Integer getFunctionid() {
        return functionid;
    }

    public void setFunctionid(Integer functionid) {
        this.functionid = functionid;
    }

    public String getFunctionname() {
        return functionname;
    }

    public void setFunctionname(String functionname) {
        this.functionname = functionname;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getGroupid() {
        return groupid;
    }

    public void setGroupid(Integer groupid) {
        this.groupid = groupid;
    }

    public String getFunctiondesc() {
        return functiondesc;
    }

    public void setFunctiondesc(String functiondesc) {
        this.functiondesc = functiondesc;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
