<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script language="JavaScript" type="text/javascript">
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
