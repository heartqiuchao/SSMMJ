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
                <li><a href="#">角色管理</a></li>
                <li><a href="#" class="current">修改角色</a></li>
            </ul>
	    </div>

	    <div class="row">
	    	<section class="panel">
			<header class="panel-heading">
               	基本信息
           	</header>

	        <form id="fo" action="saveEdit" method="post" onSubmit="return Validator.Validate(this,3)">
	            <div class="panel-body">
	            <table class="table">
	                <colgroup>
	                    <col width="220" />
	                    <col />
	                </colgroup>
	                <tbody>
	                    <tr>
         	                <th>角色ID</th>
         	                    <td>
         	                        <div class="col-sm-3">
         	                        	<input type="text" name="roleid"  value="${role.roleid }" readOnly="true" class="form-control round-input"/>
         	                        </div>
         	                    </td>
         	            </tr>
	                    <tr>
	                        <th><span class="red">*</span>角色名称</th>
	                        <td>
	                        	<div class="col-sm-3">
	                        		<input type="text" name="rolename" value="${role.rolename }" maxlength="20" class="form-control round-input"
	                        		 dataType="Custom" regexp="^\S+$" msg="必填并且不能有空格"/>
	                        	</div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <th>角色描述</th>
	                        <td><div class="col-sm-6">
	                        	<textarea name="roledesc" value="${role.roledesc }" class="form-control" rows="3" maxchar="64">${role.roledesc}
	                            </textarea>
	                            </div>
	                        </td>
	                    </tr>

	                    <tr>
	                        <th><span class="red">*</span>功能列表</th>
	                        <td><div class="dataGrid">
	                                <table>
	                                    <tbody class="tableHover" id="paramlist">
	                                    	<c:forEach var="fgroup" items="${fGroupList}" varStatus="status">
		                                    	<tr>
		                                    		<td>
		                                          		 <i class="${fgroup.icon}"></i><span>${fgroup.groupname}</span>
		                                    		</td>
		                                    		<td>
		                                    			<c:forEach var="function" items="${functionList}" varStatus="status">
		                                    				<c:if test="${function.groupid == fgroup.groupid}">
		                                    					<input  name="fidList"
		                                    					<c:if test="${status.index ==0 }">dataType="Group" msg="请至少选择一个"</c:if>
		                                    					type="checkbox" value="${function.functionid}">
		                                    					<i class="${function.icon}"></i><span>${function.functionname}</span>
		                                    				</c:if>
		                                    			</c:forEach>
		                                    		</td>
		                                    	</tr>
	                                    	</c:forEach>
	                                    </tbody>
	                                </table>
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
