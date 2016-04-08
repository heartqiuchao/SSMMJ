$(document).ready(function() {
	$("a").focus(function() {
		this.blur();
	});
	fTextfocus();
	initDatagrid();
	initinputButton();
	initmoreButton();
	initToggle();
	initTextarea();
	initTitleBar();
	initForm();
	try {
		Opener = top["openerstack"].get();
	}catch(Exception){
		top["openerstack"] = popStack;
		Opener = top["openerstack"].get();
	}
});
function fTextfocus(){
	var input = $(".inputText");
    for(var i=0;i<input.length;i++){
        var rd = $(input[i]).attr("readonly")||$(input[i]).attr("disabled");
        if(!rd){
            $(input[i]).focus().addClass("onFocus");
            return false;
        }
    }
}
function initDatagrid() {

	$(".dataGrid tbody").find("tr:odd").addClass("odd");

	$(".tableHover").find("tr").hover(function() {
		$(this).addClass("trHover")
	}, function() {
		$(this).removeClass("trHover")
	});

	// $(".dataGrid tbody tr").hover(function(){ $(this).addClass("trHover")},
	// function(){$(this).removeClass("trHover") });
	DGCheckboxCtrl();
	// 琛ㄥごcheckbox
	$(".dataGrid thead :checkbox").click(
			function() {

				var tbodyCheckBox = $(this).parents("thead").next("tbody")
						.find(":checkbox").not(":disabled");

				if ($(this).get(0).checked == true)
					tbodyCheckBox.attr("checked", "checked");
				else
					tbodyCheckBox.attr("checked", "");

				DGCheckboxCtrl();
				// var
				// checkedNum=$(this).parents("thead").next("tbody").find(":checked").size()
				// showTip("You have Seleted: "+ checkedNum ,this)
			})
	// tbody checkbox

	$(".dataGrid tbody :checkbox").click(function(event) {
		event.stopPropagation();
		/*
		 * var tbodyCheckboxNum =
		 * $(this).parents("tbody").find(":checkbox").not(":disabled").size()//$(".dataGrid
		 * tbody :checkbox") ; var tbodyCheckedNum =
		 * $(this).parents("tbody").find(":checked").not(":disabled").size()
		 * //$(".dataGrid tbody :checked"); if (tbodyCheckboxNum !=
		 * tbodyCheckedNum) $(this).parents("table").find("thead
		 * :checkbox").attr("checked", ""); else
		 * $(this).parents("table").find("thead :checkbox").attr("checked",
		 * "checked");
		 */
		tbodyChecke($(this));
		DGCheckboxCtrl();
	})

}

function DGCheckboxCtrl() {
	$(".dataGrid tbody :checkbox").parents("tr").removeClass("on");
	$(".dataGrid tbody :checked").parents("tr").addClass("on");
}

function tbodyChecke(_this) {
	var tbodyCheckboxNum = _this.parents("tbody").find(":checkbox").not(
			":disabled").size()// $(".dataGrid tbody :checkbox") ;
	var tbodyCheckedNum = _this.parents("tbody").find(":checked").not(
			":disabled").size() // $(".dataGrid tbody :checked");
	if (tbodyCheckboxNum != tbodyCheckedNum)
		_this.parents("table").find("thead :checkbox").attr("checked", "");
	else
		_this.parents("table").find("thead :checkbox").attr("checked",
				"checked");
}

function initToggle() {
	$(".subtitle").click(function() {
		var t = $(this).parent().parent().next("tbody");
		if (t.length == 1) {
			t.toggle();
			$(this).toggleClass("subtitleClose");

		}
	})
	$(".datatitle").click(function() {
		var m = $(this).parent().find("thead");
		var n = $(this).parent().find("tbody");
		if (m.length == 1) {
			m.toggle();
			n.toggle();
		}

	})
}

// title鏍�

function initTitleBar() {
	if ($("div[class=title]").get() && top.frames["leftFrame"]) {
		var leftKnot = top.frames["leftFrame"].document.getElementById("menu");
		var firstTitle = $(leftKnot).find(".focus").siblings("dt").text();
		var secondTitle = $(leftKnot).find(".focus").text();
		var threeTitle = $("div.tab > table").find("td.on").text();
		// alert(threeTitle);
		if (firstTitle != "" && secondTitle != "") {
			var t = ""
			if ($("title").html() !== "")
				t = " <span> " + $("title").html() + "</span>"

			$("div[class=title]").html(
					"<span class='home'></span><span>" + firstTitle
							+ "</span> <span> " + secondTitle + "</span>" + t);
		} else {
			$("div[class=title]").html("<span  class='home'></span>");
			// $("div[class=title]").hide();
		}
	}

}

function initPopBtn() {

	$(".popBtn").click(function() {
		var url_1 = $.trim(location.href);
		var num_1 = url_1.lastIndexOf("/")

		var url_2 = url_1.substring(0, num_1);
		var num_2 = url_2.lastIndexOf("/") + 1

		var folder = url_2.substring(num_2, url_2.length);
		var tHref = $(this).attr("href");
		tHref = folder + "/" + tHref;

		top.$("#popUp").attr("href", tHref);
		alert(top.$("#popUp").attr("href"))
		top.$("#popUp").trigger("click");
		return false
	})

}

/**
 * 鎹弬鏁版竻闄ゆ暟鎹�
 */
function clearpop(a) {
	var argnum = arguments.length;
	for ( var i = 0; i < argnum; i++) {// 鑾峰彇鍙傛暟鐨勫�,灏嗕紶杩涙潵鐨勫弬鏁颁綔涓烘竻绌烘墍鏈夌殑鍊�
		$("#" + arguments[i]).val("");//
	}
}

//
function inputTip(t, tVal) {
	t.val(tVal);
	if (t.val() == tVal) {
		t.css("color", "#999")
	}
	t.focus(function() {
		if ($(this).val() == tVal) {
			$(this).val("")
			$(this).css("color", "#23b8e8")
		}
	}).blur(function() {

		if ($(this).val() == "") {
			$(this).val(tVal);
		}
		$(this).css("color", "#666")

	})
}

function initinputButton() {
	$(".subButton, .nosubdownBtn").hover(function() {
		$(this).addClass("btnHover")
	}, function() {
		$(this).removeClass("btnHover")
	})

}

function initmoreButton() {
	$(".moreButton").hover(function() {
		$(this).addClass("moreButtonHover")
	}, function() {
		$(this).removeClass("moreButtonHover")
	})

}

// 鍒濆鍖栬〃鍗�
function initForm() {
	try {

		$("textarea,.inputText,:password,:file").focus(function() {
			$(this).addClass("onFocus");
		}).blur(function() {
			$(this).removeClass("onFocus");
		});

	} catch (e) {
	}

}

var popStack = new Stack();
var Opener;
// 寮瑰嚭绐楀彛
/*
 * function popup(title,url,w,h,id,lock){
 * window.top.artDialog({id:id,title:title, iframe:url, width:w,
 * height:h,parent:true,lock:lock}); }
 */
function popup(title, url, w, h, id, lock) {
	try {
		top["openerstack"].push(self);
	}catch(Exception){
		top["openerstack"] = popStack;
		top["openerstack"].push(self);
	}
	var hh = document.documentElement.clientHeight||document.body.clientHeight;
    hh = hh-40;
    if(hh<h){
        h = hh;
    }
	top.art.dialog.open(url, {
		title : title,
		width : w,
		height : h,
		id : id,
		lock : lock
	});
}
/**
 * 寮瑰嚭绐楀彛锛堟墍鏈夋寜閽崟鍑讳簨浠惰皟鐢ㄥ悓涓�柟娉曪級
 * @param title
 * @param url
 * @param w
 * @param h
 * @param id
 */
function popup2(title, url, w, h, id){
    var hh = document.documentElement.clientHeight||document.body.clientHeight;
    hh = hh-40;
    if(hh<h){
        h = hh;
    }  
var div = [
        '<iframe src=',url,' width=',w,' height=',h-20,' frameborder="no" border="0"></iframe>'
    ].join('');
   top.art.dialog({
    content:div,
    title: title,
    width: w,
    height: h,
    id: id,
    lock: true,
    closeFn: function () {
        givebackNull();
    }

});
}

// 鍏抽棴寮瑰嚭绐楀彛
function popdown(id) {
	top["openerstack"].pop();
	top.artDialog({
		id : id
	}).close();
}

// 鍒囨崲宸︿晶鑿滃崟
function changeleft(m, n) {
	window.parent.frames["leftFrame"].selectMenu(m, n);
}

// 杈撳叆瀛楁暟闄愬埗
var objs = [];
function initTextarea() {
	$("textarea[maxchar]").after("<div class='note'>鍓╀綑鍙緭瀛楃鏁�<span class='red'></span></div>");
	$("textarea[maxchar]").each(
		function(i) {
			var maxchar = $(this).attr("maxchar");
			var lens = $(this).get(0).value.replace(/[^\x00-\xff]/g, 'ch').length;
			var remain = parseInt(maxchar)- lens;
			$(this).next("div[@class='note']").children("span").text(remain);
			$("textarea[maxchar]").bind("keyup", charLeft).bind("keydown", charLeft).bind("change", charLeft);
	});
}

function charLeft() {
	var maxchar = $(this).attr("maxchar");
	var lens = this.value.replace(/[^\x00-\xff]/gi, 'ch').length;
	var remain = parseInt(maxchar) - lens;
	$(this).next("div[@class='note']").children("span").text(remain);
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
		$(this).next("div[@class='note']").children("span").text(0);
	}
	lens = this.value.replace(/[^\x00-\xff]/gi, 'ch').length;
	remain = parseInt(maxchar) - lens;
	$(this).next("div[@class='note']").children("span").text(remain);
}

/**
 * Simple Map
 * 
 * var m = new Map(); m.put('key','value');
 */
function Map() {
	/** 瀛樻斁閿殑鏁扮粍(閬嶅巻鐢ㄥ埌) */
	this.keys = new Array();
	/** 瀛樻斁鏁版嵁 */
	this.data = new Object();

	/**
	 * 鏀惧叆涓�釜閿�瀵�
	 * 
	 * @param {String}
	 *            key
	 * @param {Object}
	 *            value
	 */
	this.put = function(key, value) {
		if (this.data[key] == null) {
			this.keys.push(key);
		}
		this.data[key] = value;
	};

	/**
	 * 鑾峰彇鏌愰敭瀵瑰簲鐨勫�
	 * 
	 * @param {String}
	 *            key
	 * @return {Object} value
	 */
	this.get = function(key) {
		return this.data[key];
	};

	/**
	 * 閬嶅巻Map,鎵ц澶勭悊鍑芥暟
	 * 
	 * @param {Function}
	 *            鍥炶皟鍑芥暟 function(key,value,index){..}
	 */
	this.each = function(fn) {
		if (typeof fn != 'function') {
			return;
		}
		var len = this.keys.length;
		for ( var i = 0; i < len; i++) {
			var k = this.keys[i];
			fn(k, this.data[k], i);
		}
	};

	/**
	 * 鑾峰彇閿�鏁扮粍(绫讳技Java鐨別ntrySet())
	 * 
	 * @return 閿�瀵硅薄{key,value}鐨勬暟缁�
	 */
	this.entrys = function() {
		var len = this.keys.length;
		var entrys = new Array(len);
		for ( var i = 0; i < len; i++) {
			entrys[i] = {
				key : this.keys[i],
				value : this.data[i]
			};
		}
		return entrys;
	};

	/**
	 * 鍒ゆ柇Map鏄惁涓虹┖
	 */
	this.isEmpty = function() {
		return this.keys.length == 0;
	};

	/**
	 * 鑾峰彇閿�瀵规暟閲�
	 */
	this.size = function() {
		return this.keys.length;
	};

	/**
	 * 閲嶅啓toString
	 */
	this.toString = function() {
		var s = "{";
		for ( var i = 0; i < this.keys.length; i++, s += ',') {
			var k = this.keys[i];
			s += k + "=" + this.data[k];
		}
		s += "}";
		return s;
	};
}


function Stack() {
	if (this.head == undefined) {
		//鍒濆鍖栧爢鏍堢殑椤堕儴鎸囬拡鍜屾暟鎹瓨鏀惧煙
		this.head = -1;
		this.unit = new Array();
	}

	this.push = function(pushvalue) {
		//瀹氫箟鍘嬪叆鍫嗘爤鐨勬柟娉�           
		this.unit[this.head] = pushvalue;
		this.head += 1;
	};

	this.pop = function() {
		//瀹氫箟寮瑰嚭鍫嗘爤鐨勬柟娉�
		if (this.head == -1) {
			return null;
		}
		var popTo = this.unit[this.head - 1];
		this.head--;
		return (popTo);
	};
	
	this.get = function(){
		if (this.head == -1) {
			return null;
		}
		var popTo = this.unit[this.head - 1];
		return (popTo);
	};
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