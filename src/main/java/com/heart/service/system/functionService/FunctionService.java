package com.heart.service.system.functionService;

import com.heart.dto.system.function.FunctionDto;
import com.heart.dto.system.function.FunctionGroupDto;

import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
public interface FunctionService {

    FunctionDto loadFunctionById(int functionid) throws Exception;

    List<FunctionDto> loadFunctionList() throws Exception;

    List<FunctionDto> loadFunctionByRole(int roleid) throws Exception;

    FunctionGroupDto loaadFunctionGroupById(int groupid) throws Exception;

    List<FunctionGroupDto> loaadFunctionGroupByRole(int roleid) throws Exception;

    List<FunctionGroupDto> loaadFunctionGroupList() throws Exception;

    void addFunction(FunctionDto functionDto) throws Exception;

    void deleteFunctionById(int id) throws Exception;

    void updateFunctionById(FunctionDto functionDto) throws Exception;

}
