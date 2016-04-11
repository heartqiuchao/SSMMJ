<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<title>用户管理</title>
<c:import url="/import.jsp"/>
</head>
<body>
    <section class="container">
        <div class="row">
     	    <ul class="breadcrumbs-alt">
     	        <li><a href="#"><i class="fa fa-home"></i></a></li>
     	        <li><a href="#">系统管理</a></li>
     	        <li><a href="#" class="current">角色管理</a></li>
     	    </ul>
        </div>
        <div class="row">
		    	<section class="panel">
					<header class="panel-heading">
		                	角色列表  <font id="qt" color="red"></font>
		                	<span class="tools pull-right">
		                	    <button type="button" class="btn btn-primary" onclick="javascript:gotoURL('<c:url value='/system/role/add?roleid='/>${rolelist[0].roleid+1}')"><i class="fa fa-plus"></i> 新增角色</button>
		                	</span>
		            </header>
			        <div class="panel-body">
			        	<div class="adv-table">
					        <div id="dynamic-table_wrapper" class="dataTables_wrapper form-inline" role="grid">
								<table class="table table-bordered  table-condensed table-hover">
							            <thead>
							                <tr>
							              		<th style="width:4px">&nbsp;</th>
										        <th>角色ID</th>
										        <th>角色名称</th>
										        <th>角色描述</th>
										        <th>操作</th>
							                </tr>
							            </thead>
							            <tbody class="tableHover">
							                <c:forEach var="role" items="${rolelist}" varStatus="status">
							                    <tr>
							                    	<td>${status.index+1}</td>
							                    	<td>${role.roleid}</td>
							                    	<td>${role.rolename}</td>
											        <td>${role.roledesc}</td>
                                                    <td class="alignCenter">
     											    <c:if test="${role.roleid !=100 }">
     												    <button type="button" class="btn btn-warning" onclick="javascript:gotoURL('<c:url value='/system/role/edit?roleid='/>${role.roleid}')"><i class="fa fa-pencil"></i>修改</button>
     												    <button type="button" class="btn btn-danger" onclick="javascript:confirmURL('<c:url value='/system/role/delete?roleid='/>${role.roleid}')"><i class="fa fa-times"></i>删除</button>
     											    </c:if>
     											     </td>
							                    </tr>
							                  </c:forEach>
							            </tbody>
							        </table>
					        </div>
			        	</div>
			        </div>
		        </section>
		    </div>
    </section>
</body>
</html>