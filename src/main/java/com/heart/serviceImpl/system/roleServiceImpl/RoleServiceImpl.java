package com.heart.serviceImpl.system.roleServiceImpl;

import com.heart.dao.system.functionDao.FunctionDao;
import com.heart.dao.system.roleDao.RoleDao;
import com.heart.dao.system.userDao.UserDao;
import com.heart.dto.system.function.FunctionDto;
import com.heart.dto.system.function.FunctionGroupDto;
import com.heart.dto.system.role.RoleDto;
import com.heart.dto.system.role.RoleFunctionDto;
import com.heart.service.system.roleService.RoleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Service("roleService")
public class RoleServiceImpl implements RoleService{

    @Resource(name = "userDao")
    UserDao userDao;

    @Resource(name = "roleDao")
    RoleDao roleDao;

    @Resource(name = "functionDao")
    FunctionDao functionDao;

    @Override
    public RoleDto loadRoleById(int id) throws Exception {
        RoleDto roleDB = roleDao.loadRoleById(id);
        if (roleDB != null){
            List<FunctionGroupDto> functionGroupDtoList = functionDao.loaadFunctionGroupByRole(roleDB.getRoleid());
            List<FunctionDto> functionDtoList = functionDao.loadFunctionByRole(roleDB.getRoleid());
            roleDB.setFunctionGroupList(functionGroupDtoList);
            roleDB.setFunctionList(functionDtoList);
        }
        return roleDB;
    }

    @Override
    public List<RoleDto> loadRoleList() throws Exception {
        return roleDao.loadRoleList();
    }

    @Override
    public void addRole(RoleDto roleDto) throws Exception {
        roleDao.addRole(roleDto);
        saveRoleFunction(roleDto);
    }

    @Override
    public void deleteRoleById(int id) throws Exception {
        roleDao.deleteRoleById(id);
        removeRoleFunction(id);
    }

    @Override
    public void updateRole(RoleDto roleDto) throws Exception {
        roleDao.updateRole(roleDto);
        removeRoleFunction(roleDto.getRoleid());
        saveRoleFunction(roleDto);
    }

    private void saveRoleFunction(RoleDto roleDto) throws Exception{
        if (null != roleDto.getFidList() && roleDto.getFidList().size()>0){
            RoleFunctionDto roleFunctionDto = new RoleFunctionDto();
            roleFunctionDto.setRoleid(roleDto.getRoleid());
            for (Integer functionid :roleDto.getFidList()){
                roleFunctionDto.setFunctionid(functionid);
                roleDao.addRoleFunction(roleFunctionDto);
            }
        }
    }

    @Override
    public boolean hasUserInRole(int id) throws Exception {
        return roleDao.hasUserInRole(id)>0 ? true:false;
    }

    @Override
    public boolean hasSameRoleName(int id, String rolename) throws Exception {
        return roleDao.hasSameRoleName(id,rolename)>0 ? true:false;
    }

    private void removeRoleFunction(int id) throws Exception{
        roleDao.deleteRoleFunctionById(id);
    }
}
