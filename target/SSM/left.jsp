<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div id="sidebar" class="nav-collapse">
	<!-- sidebar menu start-->
	<ul class="sidebar-menu" id="nav-accordion">
		<c:forEach var="fgroup" items="${sessionScope.user.role.functionGroupList}" varStatus="status">
			<li class="sub-menu">
			    <a href="javascript::">
			        <i class="${fgroup.icon}"></i><span>${fgroup.groupname}</span>
			    </a>
				<ul class="sub">
					<c:forEach var="function" items="${sessionScope.user.role.functionList}" varStatus="status">
						<c:if test="${function.groupid == fgroup.groupid}">
							<li>
							    <a href="<%=request.getContextPath()%>${function.url}">
							        <i class="${function.icon}"></i><span>${function.functionname}</span>
							    </a>
							</li>
						</c:if>
					</c:forEach>
				</ul>
			</li>
		</c:forEach>
	</ul>
	<!-- sidebar menu end-->
</div>