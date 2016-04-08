<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="ThemeBucket">
    <link rel="shortcut icon" href="images/favicon.png">

    <c:import url="/import.jsp"/>
    <title>系统管理台</title>

    <script type="text/javascript">
        if(this != top){
            window.top.location.href = "<%=request.getContextPath()%>/login";
        }
	</script>
</head>

<body class="login-body">
	<div class="container">
	
		<sf:form modelAttribute="account" action="login" method="post" cssClass="form-signin">
			<h2 class="form-signin-heading">系统管理台</h2>
			<div class="login-wrap">
				<div class="user-login-info">
				    <sf:errors path="account" cssStyle="color:red"></sf:errors>
					<sf:input path="account" type="text" class="form-control" placeholder="用户名"/>

					<sf:errors path="password" cssStyle="color:red"></sf:errors>
					<sf:input path="password" type="password" class="form-control" placeholder="密码"/>

				</div>
				<button class="btn btn-lg btn-login btn-block" type="submit">登录</button>
			</div>
		</sf:form>
	</div>
</body>
</html>
