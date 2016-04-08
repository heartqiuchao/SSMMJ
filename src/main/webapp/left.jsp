<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div id="sidebar" class="nav-collapse">
	<!-- sidebar menu start-->
	<ul class="sidebar-menu" id="nav-accordion">
		<c:forEach var="fgroup" items="${sessionScope.user.role.functionGroupList}" varStatus="status">
			<li class="sub-menu">
			    <a href="javascript::">
			        <c:choose>
			            <c:when test="${fgroup.groupname=='System Management'}">
			                 <i class="fa fa-dashboard"></i>
			            </c:when>
			            <c:when test="${fgroup.groupname=='Application Management'}">
			                 <i class="fa fa-qrcode"></i>
			            </c:when>
			            <c:otherwise>
			                <i class="fa fa-rebel"></i>
			            </c:otherwise>
			        </c:choose>
			        <span>${fgroup.groupname}</span>
			    </a>
				<ul class="sub">
					<c:forEach var="function" items="${sessionScope.user.role.functionList}" varStatus="status">
						<c:if test="${function.groupid == fgroup.groupid}">
							<li>
							    <a href="<%=request.getContextPath()%>${function.url}">
				                    <c:choose>
                			            <c:when test="${function.functionname=='User Management'}">
                			                 <i class="fa fa-user"></i>
                			            </c:when>
                			            <c:when test="${function.functionname=='Role Management'}">
                			                 <i class="fa fa-puzzle-piece"></i>
                			            </c:when>
                			            <c:otherwise>
                			                <i class="fa fa-glass"></i>
                			            </c:otherwise>
                			        </c:choose>
							        <span>${function.functionname}</span>
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