package com.heart.service.system.roleService;

import com.heart.dto.system.role.RoleDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
public interface RoleService {

    /**
     * 加载角色
     */
    RoleDto loadRoleById(int id) throws Exception;

    /**
     * 加载角色列表
     */
    List<RoleDto> loadRoleList() throws Exception;

    /**
     * 添加角色
     */
    void addRole(RoleDto roleDto) throws Exception;

    /**
     * 删除角色
     */
    void deleteRoleById(int id) throws Exception;

    /**
     * 更新角色
     */
    void updateRole(RoleDto roleDto) throws Exception;

    /**
     * 判断该角色下是否存在用户
     */
    boolean hasUserInRole(int id) throws Exception;

    /**
     * 判断是否已存在角色名
     */
    boolean hasSameRoleName(int id, String rolename) throws Exception;

}
