<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<c:import url="/import.jsp"></c:import>
<script>
	function goback() {
		history.back(-1);
	}
	var url="<%=request.getContextPath()%>"+"${url}";
	
	function freturn() {
		if(url==""){
			top.location.href = "index";
		}
		if (this != top) {
			location.href = url;
			return;
		}
	}
	
		function Second(time)
		{ time = time-1;
			if(time>-1){
				$("#rtime")[0].innerText="系统将在"+time+"秒后自动返回.......";
				//debugger;
				 setTimeout("Second("+time+")", 1000)
			}else
			freturn();
		}
</script>
</head>
<body>
	<section class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="profile-nav alt">
					<section class="panel text-center">
						<div class="user-heading alt wdgt-row terques-bg">
							<i class="fa  fa-check"></i>
						</div>
						<div class="panel-body">
							<div class="wdgt-value">
								<h1 class="count">操作成功</h1>
								<p id="rtime">
							        <script>
							        Second(5);
								    </script>
								       
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</section>
</body>
</html>