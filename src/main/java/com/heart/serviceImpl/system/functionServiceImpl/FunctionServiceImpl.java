package com.heart.serviceImpl.system.functionServiceImpl;

import com.heart.dao.system.functionDao.FunctionDao;
import com.heart.dto.system.function.FunctionDto;
import com.heart.dto.system.function.FunctionGroupDto;
import com.heart.service.system.functionService.FunctionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Service("functionService")
public class FunctionServiceImpl implements FunctionService{

    @Resource(name = "functionDao")
    FunctionDao functionDao;

    @Override
    public FunctionDto loadFunctionById(int functionid) throws Exception {
        return functionDao.loadFunctionById(functionid);
    }

    @Override
    public List<FunctionDto> loadFunctionList() throws Exception {
        return functionDao.loadFunctionList();
    }

    @Override
    public List<FunctionDto> loadFunctionByRole(int roleid) throws Exception {
        return functionDao.loadFunctionByRole(roleid);
    }

    @Override
    public FunctionGroupDto loaadFunctionGroupById(int groupid) throws Exception {
        return functionDao.loaadFunctionGroupById(groupid);
    }

    @Override
    public List<FunctionGroupDto> loaadFunctionGroupByRole(int roleid) throws Exception {
        return functionDao.loaadFunctionGroupByRole(roleid);
    }

    @Override
    public List<FunctionGroupDto> loaadFunctionGroupList() throws Exception {
        return functionDao.loaadFunctionGroupList();
    }

    @Override
    public void addFunction(FunctionDto functionDto) throws Exception {
        if (null != functionDto){
            functionDao.addFunction(functionDto);
        }
    }

    @Override
    public void deleteFunctionById(int id) throws Exception {
        functionDao.deleteFunctionById(id);
    }

    @Override
    public void updateFunctionById(FunctionDto functionDto) throws Exception {
        functionDao.updateFunction(functionDto);
    }
}
