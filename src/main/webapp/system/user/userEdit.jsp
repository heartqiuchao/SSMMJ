<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
<c:import url="/import.jsp"></c:import>
</head>
<body>
	<section class="container">
	    <div class="row">
            <ul class="breadcrumbs-alt">
                <li><a href="#"><i class="fa fa-home"></i></a></li>
                <li><a href="#">系统管理</a></li>
                <li><a href="#">用户管理</a></li>
                <li><a href="#" class="current">修改用户</a></li>
            </ul>
	    </div>

	    <div class="row">
	    	<section class="panel">
			<header class="panel-heading">
               	基本信息
           	</header>

	        <form id="fo" action="saveEdit" method="post" onSubmit="return Validator.Validate(this,3)">
	            <div class="panel-body">
	            <input type="hidden" name="userid" value="${user.userid}">
	            <table class="table">
	                <colgroup>
	                    <col width="220" />
	                    <col />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th>用户账号</th>
	                        <td>
	                        	<div class="col-sm-3">
	                        		<input type="text" name="account" value="${user.account}" readOnly="true" class="form-control round-input"/>
	                        	</div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <th><span class="red">*</span>用户昵称</th>
	                        <td>
	                        	<div class="col-sm-3">
	                        		<input type="text" name="username" value="${user.username}" maxlength="32" class="form-control round-input"/>
	                        	</div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <th><span class="red">*</span>用户密码</th>
	                        <td>
	                            <div class="col-sm-3">
	                               <input type="password" name="password"  value=${user.password} maxlength="20" class="form-control round-input"
	                                    dataType="Require"  msg="必填"/>
	                            </div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <th><span class="red">*</span>确认密码</th>
	                        <td>
	                            <div class="col-sm-3">
	                               <input type="password" name="confirmpassword" value=${user.password}  maxlength="20" class="form-control round-input"
	                                   dataType="Repeat"  to="password" msg="两次输入密码不一致"/>
	                            </div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <th>用户年龄</th>
	                        <td>
	                            <div class="col-sm-3">
	                               <input type="text" name="age" value=${user.age} class="form-control round-input"
	                                dataType="Custom" regexp="^120|((1[0-1]|\d)?\d)$" msg="年龄格式不正确"/>
	                            </div>
	                        </td>
	                    </tr>

	                    <tr>
	                        <th><span class="red">*</span>用户角色</th>
	                        <td>
	                        <div class="col-sm-3">
	                            <select name="roleid" dataType="Require" msg="请选择角色信息" class="form-control round-input">
            	                    <option value="">请选择</option>
            	                    <c:forEach var="role" items="${roleList}" varStatus="status">
            	                        <option value="${role.roleid}" <c:if test="${user.roleid==role.roleid}">selected='selected'</c:if>>${role.rolename}</option>
            	                    </c:forEach>
            	                </select>
	                        </div>
	                        </td>
	                    </tr>
	                </tbody>
	                <tr>
	                    <td></td>
	                    <td><input type="submit" id="saveButton" class="btn btn-round btn-primary" value="保存" /> <input type="button" class="btn btn-round btn-default"
	                        value="返回" onclick="history.back()" /></td>
	                </tr>
	            </table>
	            </div>
	        </form>
	        </section>
	    </div>

    </section>
</body>
<script type="text/javascript">

</script>
</html>
