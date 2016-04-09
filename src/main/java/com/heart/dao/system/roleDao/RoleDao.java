package com.heart.dao.system.roleDao;

import com.heart.dto.system.role.RoleDto;
import com.heart.dto.system.role.RoleFunctionDto;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Repository("roleDao")
public interface RoleDao {
    /**
     * 加载角色
     */
    RoleDto loadRoleById(@Param("roleid") int roleid) throws Exception;

    /**
     * 加载角色列表
     */
    List<RoleDto> loadRoleList() throws Exception;

    /**
     * 新增角色
     */
    void addRole(RoleDto roleDto) throws Exception;

    /**
     * 新增角色功能
     */
    void addRoleFunction(RoleFunctionDto roleFunctionDto) throws Exception;

    /**
     * 删除角色
     */
    void deleteRoleById(@Param("roleid") int roleid) throws Exception;

    /**
     * 删除角色功能
     */
    void deleteRoleFunctionById(@Param("roleid") int roleid) throws Exception;

    /**
     * 更新角色
     */
    void updateRole(RoleDto roleDto) throws Exception;

    /**
     * 判断该角色下是否有用户存在
     */
    int hasUserInRole(@Param("roleid") int roleid) throws Exception;

    /**
     * 判断是否是否角色名已存在
     */
    int hasSameRoleName(@Param("roleid") int roleid,@Param("rolename") String rolename) throws Exception;
}
