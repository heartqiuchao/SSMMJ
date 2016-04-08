<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!--Core CSS -->
<link href="<%=request.getContextPath()%>/skin/bs3/css/bootstrap.min.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/skin/css/bootstrap-reset.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/skin/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
<!-- Custom styles for this template -->
<link href="<%=request.getContextPath()%>/skin/css/style.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/skin/css/style-responsive.css" rel="stylesheet" />
<!-- Just for debugging purposes. Don't actually copy this line! -->
<!--[if lt IE 9]><script src="js/ie8/ie8-responsive-file-warning.js"></script><![endif]-->
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
<script src="<%=request.getContextPath()%>/js/lib/jquery.js"></script>
<script src="<%=request.getContextPath()%>/skin/bs3/js/bootstrap.min.js"></script>
<script src="<%=request.getContextPath()%>/js/md5.js"></script>
<script src="<%=request.getContextPath()%>/js/validator.js"></script>

<script type="text/javascript">
	function gotoURL(url){
		window.location.href = url;
	}

	function confirmURL(url){
		if(confirm("确定吗?")){
			window.location.href = url;
		}
	}
	
	
	// 输入字数限制    
	var objs = [];
	function initTextarea() {
		$("textarea[maxchar]").text($.trim($("textarea[maxchar]").text()));
		$("textarea[maxchar]").after("<div class='note'><s:text name='js.leftchar'/>&nbsp<span class='red'></span>&nbsp<s:text name='js.character'/></div>");
		$("textarea[maxchar]").each(
			function(i) {
				var maxchar = $(this).attr("maxchar");
				var lens = $(this).get(0).value.replace(/[^\x00-\xff]/g, 'ch').length;
				var remain = parseInt(maxchar)- lens;
				$(this).next("div.note").children("span").text(remain);
				$("textarea[maxchar]").bind("keyup", charLeft).bind("keydown", charLeft).bind("change", charLeft);
		});
	}

	function charLeft() {
		var maxchar = $(this).attr("maxchar");
		var lens = this.value.replace(/[^\x00-\xff]/gi, 'ch').length;
		var remain = parseInt(maxchar) - lens;
		$(this).next("div.note").children("span").text(remain);
		if (lens > maxchar) {
			var value = "";
			var postion = 0;
			var strlen = this.value.length;
			for ( var i = 0; i < strlen; i++) {
				var char = this.value.substring(i, i + 1);
				if (char.match(/[^\x00-\xff]/)) {
					postion += 2;
				} else {
					postion += 1;
				}
				if (postion <= maxchar) {
					if (char == '\r' && i >= strlen - 2) {
						break;
					}
					value += char;
				} else {
					break;
				}
			}

			this.value = value;
			$(this).next("div.note").children("span").text(0);
		}
		lens = this.value.replace(/[^\x00-\xff]/gi, 'ch').length;
		remain = parseInt(maxchar) - lens;
		$(this).next("div.note").children("span").text(remain);
	}
</script>
<style>
	.red{
		color:red;
	 }
</style>