package com.heart.dao.memberDao;

import com.heart.dto.MemberDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Administrator on 2017/3/6.
 */
public interface MemberDao {

    /**
     * 根据ID获取member信息
     * @param mID
     * @return
     */
    public MemberDto loadMemberById(@Param("mid") int mID);

    /**
     * 获取member列表
     * @return
     */
    public List<MemberDto> loadMemberList();

}
