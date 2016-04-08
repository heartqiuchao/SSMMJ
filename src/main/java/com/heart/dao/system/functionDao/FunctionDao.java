package com.heart.dao.system.functionDao;

import com.heart.dto.system.function.FunctionDto;
import com.heart.dto.system.function.FunctionGroupDto;
import com.heart.dto.system.role.RoleDto;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by heartqiuchao on 2016/4/6.
 */
@Repository("functionDao")
public interface FunctionDao {

    FunctionDto loadFunctionById(@Param("functionid") int functionid) throws Exception;

    List<FunctionDto> loadFunctionList() throws Exception;

    List<FunctionDto> loadFunctionByRole(@Param("roleid") int roleid) throws Exception;

    FunctionGroupDto loaadFunctionGroupById(@Param("groupid") int groupid) throws Exception;

    List<FunctionGroupDto> loaadFunctionGroupByRole(@Param("roleid") int roleid) throws Exception;

    List<FunctionGroupDto> loaadFunctionGroupList() throws Exception;

    void addFunction(FunctionDto functionDto) throws Exception;

    void deleteFunctionById(@Param("id") int id) throws Exception;

    void updateFunction(FunctionDto functionDto) throws Exception;

}
