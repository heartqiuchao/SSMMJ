package com.heart.dto.system.function;

import java.io.Serializable;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
public class FunctionGroupDto implements Serializable{

    private Integer groupid;

    private String groupname;

    private String groupdesc;

    private String icon;

    public Integer getGroupid() {
        return groupid;
    }

    public void setGroupid(Integer groupid) {
        this.groupid = groupid;
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }

    public String getGroupdesc() {
        return groupdesc;
    }

    public void setGroupdesc(String groupdesc) {
        this.groupdesc = groupdesc;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
