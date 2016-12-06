package com.heart.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2017/3/6.
 */
public class MemberDto implements Serializable{


    private int mId;
    private int mAge;
    private int mGender;
    private String mName;
    private String mRank;
    private String mContent;
    private String mPic;
    private String mDegree;
    private String mDepart;
    private String mPhone;
    private String mEmail;
    private String mDirection;

    public int getmId() {
        return mId;
    }

    public void setmId(int mId) {
        this.mId = mId;
    }

    public int getmAge() {
        return mAge;
    }

    public void setmAge(int mAge) {
        this.mAge = mAge;
    }

    public int getmGender() {
        return mGender;
    }

    public void setmGender(int mGender) {
        this.mGender = mGender;
    }

    public String getmName() {
        return mName;
    }

    public void setmName(String mName) {
        this.mName = mName;
    }

    public String getmRank() {
        return mRank;
    }

    public void setmRank(String mRank) {
        this.mRank = mRank;
    }

    public String getmContent() {
        return mContent;
    }

    public void setmContent(String mContent) {
        this.mContent = mContent;
    }

    public String getmPic() {
        return mPic;
    }

    public void setmPic(String mPic) {
        this.mPic = mPic;
    }

    public String getmDegree() {
        return mDegree;
    }

    public void setmDegree(String mDegree) {
        this.mDegree = mDegree;
    }

    public String getmDepart() {
        return mDepart;
    }

    public void setmDepart(String mDepart) {
        this.mDepart = mDepart;
    }

    public String getmPhone() {
        return mPhone;
    }

    public void setmPhone(String mPhone) {
        this.mPhone = mPhone;
    }

    public String getmEmail() {
        return mEmail;
    }

    public void setmEmail(String mEmail) {
        this.mEmail = mEmail;
    }

    public String getmDirection() {
        return mDirection;
    }

    public void setmDirection(String mDirection) {
        this.mDirection = mDirection;
    }
}
