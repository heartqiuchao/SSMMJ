$(function(){
	
	$(".limitLength10").subLongString({length:10});
	$(".limitLength15").subLongString({length:15});
	$(".validInput").juedgeinValidChar({});
	
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	$('.dropdown-select>li>a').click(function(){
		if($(this).hasClass('inputtimelabel')){
			$(this).parents('.btn-group').next().attr("onclick","WdatePicker({dateFmt:'yyyy-MM-dd'})");
		}else{$(this).parents('.btn-group').next().attr("onclick",'javascript:void(0);');}
		var text = $(this).html()+" <span class='caret'></span>";
		$(this).parents('.dropdown-menu').prev('.dropdown-toggle').html(text);
	});
	
	//给对象加上.returnResult类可以在点击这个对象后出现结果提示，提示内容在按钮下方编辑其html结构
	$('.returnResult').click(function(){
		$('#returnedResult').modal('show');
	}); 
});

/*函数库*/
var XssPattern = new RegExp("[%`~!#$^&*()=|{}':;',\\[\\]<>/?~！#……&*（）|{}【】‘；：”“'。，、？]"); // 格式

//附带不用修改浏览器安全配置的javascript代码，兼容ie， Firefox
//参数obj为input file对象  
function getPath(obj)   
{    
	if(obj)    
	{    
		if (window.navigator.userAgent.indexOf("MSIE")>=1)    
		{    
			obj.select();
			return document.selection.createRange().text;    
		}    
		else if(window.navigator.userAgent.indexOf("Firefox")>=1)    
		{    
			return obj.value;    
		}
		else
		{
			return obj.value;   
		}
	}
	else
	{
		alert('no file object');
	}
} 

//自定义插件:截取过长字符串
(function ($) 
{
    //step03-a 插件的默认值属性
    var defaults = 
    {
        length: 10
    };
    
    var subStr = function (obj,options) 
    {
        var originalStr =  $(obj).html();
        originalStr = $.trim(originalStr);     
        if(originalStr.length > options.length)
        {
        	  originalStr = originalStr.substring(0,options.length);
        	  $(obj).html(originalStr+"...");
        }else{
        	  $(obj).html(originalStr);
        }
    };
    
    //step02 插件的扩展方法名称
    $.fn.subLongString = function (options) 
    {
        //step03-b 合并用户自定义属性，默认属性
        var options = $.extend(defaults, options);
        //step4 支持JQuery选择器
        //step5 支持链式调用
        return this.each(function (){
        	subStr(this,options);
        });
    };
})(jQuery);

//自定义插件:判断字符串非法符号
(function ($) {
    var charFilter = function (obj,pattern) {
        var originalStr =  $(obj).val();
        var valid = originalStr.match(pattern);
       	if(valid != null){
       		currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
       		if(!currentLang){//判断IE浏览器使用语言
       		    currentLang = navigator.browserLanguage;
       		}
       		//debugger;
       		if (currentLang.indexOf("zh")>-1){
       			alert("字符串包含非法字符!");
       		}else{
       			alert("String contains illegal characters!");
       		}
       		$(obj).val("");
       	}
    };
    
    //step02 插件的扩展方法名称
    $.fn.juedgeinValidChar = function (options) {
    	var pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"); // 格式
        //step4 支持JQuery选择器
        //step5 支持链式调用
        return this.each(function (){
        	charFilter(this,pattern);
        });
    };
})(jQuery);

function isDigit(obj)
{
	var xxx = String(obj);
	var result=xxx.match(/^(\d*\.)?\d+$/);
	if(result==null) 
	{
		return false;
	}
	else
	{
		return true;
	}
}

function isFloat(obj){
	var xxx = String(obj);
	var result=xxx.match(/^[1-9]d*.d*|0.d*[1-9]d*|0?.0+|0$/);
	if(result==null){
		return false;
	}else{
		return true;
	}
}


/**
 * 122.32;123;11.1;3213.32（不包含0-1之间的小数）
 * @param val
 * @returns {Boolean}
 */
function checkDouble(val)
{
    var reg = /^[1-9]{1}\d{0,6}(\.\d{1,2})*$/;
    var isMoneyFormatRight = reg.test(val);
    var len = val.indexOf(".");
    if(len==-1)
    {
    	len=val.length;
    }
    return isMoneyFormatRight && (len<=7) && (val <= 9999999);
}


/**
 * 122.32;123;11.1;3213.32；0.11（包含0-1之间的小数）
 * @param val
 * @returns {Boolean}
 */
function checkDoubleRatio(val)
{
	//var reg = /^-?\d+(\.\d{1,2})?$/;
    //var reg = /^(([1-9]+?[0-9]*)|(0)|([1-9]+?[0-9]*\.[0-9]{1,2}?)|	)$/;
    //var reg = /^0\.+\d{1,2}$|^[1-9]{1,7}\.*\d{1,2}$/;
    //var reg = /^([0-9]*)+(.[0-9]{1,2})?$/;
    var reg = /^0(\.\d{1,2})*$|^[1-9]{1}\d{0,6}(\.\d{1,2})*$/;
    var isMoneyFormatRight = reg.test(val);
    var len = val.indexOf(".");
    if(len==-1)
    {
    	len=val.length;
    }
    return isMoneyFormatRight && (len<=7) && (val <= 9999999);
}
function isNumber(obj)
{
	var xxx = String(obj);
	var result=xxx.match(/^(\d*)?$/);
	if(result==null) 
	{
		return false;
	}
	else
	{
		return true;
	}
}

function StringFilter(obj)
{
	$(obj).juedgeinValidChar({});
}

/**
 * 防XSS  以备后用
 * @param s
 * @returns {String}
 */
function stripscript(s) 
{
	var pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"); // 格式
	//RegExp("[在中间定义特殊过滤字符]")
	var rs = "";
	for ( var i = 0; i < s.length; i++) 
	{
		rs = rs + s.substr(i, 1).replace(pattern, '');
	}
	return rs;
}

/**
 * 避免按回车提交
 */
$(function()
{
	document.onkeydown = function(e)
	{
		  var e = e || event;
		  var keyNum = e.which || e.keyCode;
		  return keyNum==13 ? false : true;
	};
})