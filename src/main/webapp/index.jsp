<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="ThemeBucket">
  <link rel="shortcut icon" href="images/favicon.png">
  <title>系统管理台</title>
  <c:import url="/import_css.jsp"></c:import>
</head>
<base target="mainFrame" />
<body style="overflow:hidden">
<section id="container">
  <!--header start-->
  <header class="header fixed-top clearfix">
    <!--logo start-->
    <div class="brand">
      <a href="javascript:;" class="logo">
        <img src="${pageContext.request.contextPath }/skin/images/logo.png" alt="">
      </a>
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars"></div>
      </div>
    </div>
    <!--logo end-->


    <div class="top-nav clearfix">
    	<!--search & user info start-->
      	<ul class="nav pull-right top-menu">
        <li>
          <input type="text" class="form-control search" placeholder=" Search">
        </li>
        <!-- user login dropdown start-->
        <li class="dropdown">
        	<a data-toggle="dropdown" class="dropdown-toggle" href="javascript:;">
	            <img alt="" src="<%=request.getContextPath()%>/skin/images/avatar1_small.jpg">
	            <span class="username">${sessionScope.user.username}</span>
	            <b class="caret"></b>
          	</a>
	        <ul class="dropdown-menu extended logout">
	            <li><a href="<%=request.getContextPath()%>/logout"><i class="fa fa-key"></i>登出</a></li>
	        </ul>
        </li>
        <!-- user login dropdown end -->
      </ul>
      <!--search & user info end-->
    </div>
  </header>
  <!--header end-->

  <!--sidebar start-->
  <aside>
  	<c:import url="/left.jsp"></c:import>
  </aside>
  <!--sidebar end-->

  <!--main content start-->
  <section id="main-content">
    <section class="wrapper">
      <iframe id="mainFrame" name="mainFrame" src="" frameborder="0" width="100%" height="100%"></iframe>
    </section>
  </section>
  <!--main content end-->

</section>
<c:import url="/import_js.jsp"></c:import>
<script type="text/javascript"> 

	$(function(){
		$('ul.sub li a').click(function(){
			$('.active').each(function(){
				$(this).removeClass("active");
			});
			$(this).parent().addClass("active");
		});
	});

</script>
<!--script for this page-->

<script>

</script>

</body>
</html>