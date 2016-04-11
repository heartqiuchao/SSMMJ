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
     	        <li><a href="#" class="current">用户管理</a></li>
     	    </ul>
        </div>
        <div class="row">
    		<section class="panel">
    	    	<div class="panel-body">
    		        <sf:form modelAttribute="user" action="list" method="post" id="fo">
    		            <table>
    		                <tbody>
    		                    <tr>
    		                        <th>账号</th>
    		                        <td>
    		                        	<sf:input type="text" path="account" class="form-control round-input"/>
    		                        </td>
    		                    </tr>
    		                </tbody>
    		            </table>
    		            <div class="panel-body">
    		            	<input name="button" type="submit" class="btn btn-success btn-lg btn-round btn-block" value="查询" /></td>
    		        	</div>
    		        </sf:form>

    	        </div>
    		</section>
        </div>
        <div class="row">
		    	<section class="panel">
					<header class="panel-heading">
		                	用户列表  <font id="qt" color="red"></font>
	                        <span class="tools pull-right">
    		                    <button type="button" class="btn btn-primary" onclick="javascript:gotoURL('<c:url value='/system/user/add'/>')"><i class="fa fa-plus"></i> 新增用户</button>
    		                </span>
		            </header>
			        <div class="panel-body">
			        	<div class="adv-table">
					        <div id="dynamic-table_wrapper" class="dataTables_wrapper form-inline" role="grid">
								<table class="table table-bordered  table-condensed table-hover">
							            <thead>
							                <tr>
							              		<th style="width:4px">&nbsp;</th>
										        <th>账号</th>
										        <th>用户名</th>
										        <th>密码</th>
										        <th>年龄</th>
										        <th>角色编号</th>
										        <th>操作</th>
							                </tr>
							            </thead>
							            <tbody class="tableHover">
							                <c:forEach var="user" items="${userlist}" varStatus="status">
							                    <tr>
							                    	<td>${status.index+1}</td>
							                    	<td>${user.account}</td>
											        <td>${user.username}</td>
											        <td>${user.password}</td>
											        <td>${user.age}</td>
											        <td>${user.roleid}</td>
											        <td class="alignCenter">
											        <c:if test="${user.roleid !=100 }">
                                                        <button type="button" class="btn btn-warning" onclick="javascript:gotoURL('<c:url value='/system/user/edit?userid='/>${user.userid}')"><i class="fa fa-pencil"></i>修改</button>
     												    <button type="button" class="btn btn-danger" onclick="javascript:confirmURL('<c:url value='/system/user/delete?userid='/>${user.userid}')"><i class="fa fa-times"></i>删除</button>
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