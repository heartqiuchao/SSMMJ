/**
 * @author David
 * 
 */
function cycleChangeHook() {
	var cycle = $("input:checked[name='task.cycle']").val();
	if(cycle == undefined){
		$("#task_cycle1").attr("checked","checked");
		cycle =1;
	}
	if (cycle == 1) {
		choosedDaysDisplay(false);
		sendtimeDisplay(false);
		isimmediateDisplay(true);
		isimmediateChangeHook();
	} else if (cycle == 2) {
		choosedDaysDisplay(false);
		sendtimeDisplay(true);
		isimmediateDisplay(false);
		exetimeDisplay(false);
	} else if (cycle == 4) {
		choosedDaysDisplay(true);
		sendtimeDisplay(true);
		isimmediateDisplay(false);
		exetimeDisplay(false);
	}
}

function taskTemplateChangeHook(){
	var afn = $("#afn").val();
	if("12"==afn || "13"==afn){
		$("#tr_autoreread").show();
		autorereadChangeHook();
	}else{
		$("#tr_autoreread").hide();
		autorereadChangeHook();
	}
}

function isimmediateChangeHook() {
	var isimmediate = $("input:checked[name='task.isimmediate']").val();
	if (isimmediate == "1") {
		exetimeDisplay(false);
	} else {
		exetimeDisplay(true);
	}
}

function choosedDaysDisplay(show) {
	if (show) {
		$("#tr_choosedDays").show();
	} else {
		$("#tr_choosedDays").hide();
	}
}

function sendtimeDisplay(show) {
	if (show) {
		$("#tr_sendtime").show();
	} else {
		$("#tr_sendtime").hide();
	}
}

function isimmediateDisplay(show) {
	if (show) {
		$("#tr_isimmediate").show();
	} else {
		$("#tr_isimmediate").hide();
	}
}

function exetimeDisplay(show) {
	if (show) {
		$("#tr_exetime").show();
	} else {
		$("#tr_exetime").hide();
	}
}

function autorereadChangeHook(){
	var autoreread = $("input:checked[name='task.autoreread']").val();
	if (autoreread == "1") {
		autorereadDisplay(true);
	} else {
		autorereadDisplay(false);
	}
}

function autorereadDisplay(show){
	if (show) {
		$("#tr_rereadtimerange").show();
		$("#tr_rereadtimeinterval").show();
	} else {
		$("#tr_rereadtimerange").hide();
		$("#tr_rereadtimeinterval").hide();
	}
}

function generateSelectHtml(name, optarr, value, id, onchange ) {
	var str = '<select style="width:280px" name="' + name + '" ';
	if (id && id != '') {
		str += ' id="' + id + '" ';
	}
	if (typeof (onchange) != 'undefined') {
		str += ' onchange="' + onchange + '"';
	}
	str += ' > ';
	if (optarr && optarr.constructor == Array) {
		for ( var j = 0; j < optarr.length; j++) {
			if (value && value == optarr[j].enumvalue) {
				str += "<option value='" + optarr[j].enumvalue + "' selected >"
						+ optarr[j].enumvaluedesc + "</option>";
			} else {
				str += "<option value='" + optarr[j].enumvalue + "'>"
						+ optarr[j].enumvaluedesc + "</option>";
			}
		}
	}
	return str;
}