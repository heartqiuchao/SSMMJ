/**
 * @author CY
 */

(function($){
	$.fn.extend({
		UCDTimePicker: function(options){
			this.each(function(){
				new $.TimePicker(this, options);
			});
		}
	});

	$.TimePicker = function(element, settings){
		settings = $.extend({}, $.TimePicker.defaults, settings);
		var tools = $.TimePicker.tools;
		
		var $element = $(element);

		var wrapper = tools.elements.span.clone().addClass("timepicker-wrapper");
        var button = tools.elements.div.clone().addClass("timepicker-button");
        var listWrapper = tools.elements.div.clone().addClass("timepicker-list-wrapper");
        var list = tools.elements.ul.clone().addClass("timepicker-list");
		
		var startTimeProvider = settings.startTimeProvider, endTimeProvider = settings.endTimeProvider;
        
        var baseButtonId = '#timepicker-button-tpid', baseListWrapperId = '#timepicker-listwrapper-tpid';
		
		var timeList = [];
        
        //initialize
        function initialize(){
			wrapper.insertBefore($element).css({
				width: $element.outerWidth(),
				height: $element.outerHeight()
			});
			wrapper.append($element).append(button);
			$(document.body).append(listWrapper);
			
			initializeElement();
			
			initializeButton();
			initializeListWrapper();
			if(settings.startTimeProvider){
				initializeData(tools.parseTime($(settings.startTimeProvider).val()));
			}else{
				initializeData();
			}
			initializeList();

            resizeListWrapper();
			initializeHideStrategy();			
        }
		
		function initializeData(startTime){
			timeList = tools.calculateTimeList(settings.interval, startTime || null);
		}
		// 初始input 事件
		function initializeElement(){
			$element.attr("maxlength", "5").addClass("timepicker-input");
			
			settings.defaultTime ? $element.val(settings.defaultTime) : null;
			
			$element.keydown(function(e){
				var code = e.keyCode ? e.keyCode : e.which;
				if((code < 48 && code !=38 && code != 40 && code != 8 && code != 13) || (code > 58 && code != 116)){
					//e.preventDefault();
				}
				if(code == 38 || code == 40){
					if("none" == listWrapper.css("display")){
						showList();
						return true;
					}

					var targetItem = null;
	                if (code == 38) {
						targetItem = moveSelect(-1);
						$(this).val("").val(targetItem.text());
	                }else if (code == 40) {
						targetItem = moveSelect(1);
						$(this).val("").val(targetItem.text());
	                }
					list.scrollTop(targetItem[0].offsetTop);
				}else if(code == 8){
					//e.preventDefault();
					//$(this).val($(this).val().substring(0, $(this).val().length - 1));
					if ($(this).val().length == 0) {
						$("li.timepicker-list-item-focus", list).removeClass("timepicker-list-item-focus");
						list.find("li").first().addClass("timepicker-list-item-focus");
						list.scrollTop(0);
						return;
					}
					if ("none" == listWrapper.css("display")) {
						showList();
					}
					search($(this).val());
				}
			}).keyup(function(e){
				//TODO
			}).keypress(function(e){
				var code = e.keyCode ? e.keyCode : e.which;
				if(tools.isDigit(code)){
					if ("none" == listWrapper.css("display")) {
						showList();
					}
					var value = [$(this).val(), String.fromCharCode(code)].join('');
					search(value);
				}
			}).click(function(e){
				e.stopPropagation();
			}).blur(function(){
				if(!tools.isTime($(this).val())){
					//$(this).val('');
				}
			});
		}
		
		function moveSelect(direction){
			var targetItem = null;
			var currItem = $("li.timepicker-list-item-focus", list).removeClass("timepicker-list-item-focus").eq(0);
			switch(direction){
				case 1:
					targetItem = currItem.next("li");
					if(targetItem[0] == undefined){
						targetItem = list.find("li").first();
					}
					break;
				case -1:
					targetItem = currItem.prev("li");
					if(targetItem[0] == undefined){
						targetItem = list.find("li").last();
					}
					break;
				default:
					break;
			}
			return targetItem.addClass("timepicker-list-item-focus");
		}
		
		function initializeButton(){
			
			button.css({
				height: wrapper.outerHeight() - 2,
				top: 1,
				right: 3
			}).click(function(e){
				e.stopPropagation();
				if("none" == listWrapper.css("display")){
					showList();
					$element.focus();
				}else if("block" == listWrapper.css("display")){
					hideList();
				}
            });
		}
		
		function initializeListWrapper(){
			listWrapper.css({
				top: $element.offset().top + $element.outerHeight(),
				left: $element.offset().left,
				'border-color': $element.css("border-left-color") !== '#000000' ? $element.css("border-left-color") : '#7f9db9',
				'width': $element.outerWidth()
			});
			//fix ie6 select z-index bug
            listWrapper.bgiframe();
		}
		
		function initializeList(){
			list.find("li").remove();
			var df = document.createDocumentFragment();
			for (var i = 0, len = timeList.length; i < len; i++) {
                var item = tools.elements.li.clone().html(tools.formatTime(timeList[i]));
				df.appendChild(item[0]);
                //item.appendTo(list);
            }
			list[0].appendChild(df);

            list.find("li").addClass("timepicker-list-item").hover(function(){
                $(this).addClass("timepicker-list-item-focus");
            }, function(){
                $(this).removeClass("timepicker-list-item-focus");
            }).click(function(e){
				e.stopPropagation();
				$element.val("").val($(this).text());
				if(endTimeProvider){
					$(endTimeProvider).val(''); //clear endtime when reselect
				}
				hideList();
				$element.focus();
			});
			list.find("li:odd").addClass("timepicker-list-item-odd");

			list.appendTo(listWrapper);
		}
        
        //reposition the time list wrapper
        function repositionListWrapper(){			
			listWrapper.css({
				top: $element.offset().top + $element.outerHeight(),
				left: $element.offset().left
			});
        }
        
        //resize the time list wrapper
        function resizeListWrapper(){
            var absWidth = $element.outerWidth() - parseInt(listWrapper.css("border-left-width")) * 2;
			var absHeight = 200;
            listWrapper.css({
                "width": absWidth,
                "height": absHeight
            });
			
			list.css({"height": absHeight});
        }

		function showList(){
			$(".timepicker-list-wrapper:visible").hide();
			
			if(startTimeProvider){
				startTime = tools.parseTime($(settings.startTimeProvider).val());
				timeList = tools.calculateTimeList(settings.interval, startTime);
				initializeList();
			}
			
			listWrapper.show();
			repositionListWrapper();

			if($element.val() != ""){
				var currItem = $("li:contains('" + $element.val() + "')", list).eq(0).addClass("timepicker-list-item-focus");
				if (!currItem[0]) return;
				list.scrollTop(currItem[0].offsetTop);
			}else{
				$("li:first", list).addClass("timepicker-list-item-focus");
				list.scrollTop(0);
			}
		}

		function hideList(){
			$("li.timepicker-list-item-focus", list).removeClass("timepicker-list-item-focus");
			listWrapper.hide();
		}
		
		//search the match item
		function search(value){
			var targetItem = $("li:contains('" + value + "')", list).eq(0);
			if (!targetItem[0]) return;
			
			$("li.timepicker-list-item-focus", list).removeClass("timepicker-list-item-focus");
			list.scrollTop(targetItem[0].offsetTop);
			targetItem.addClass("timepicker-list-item-focus");
		}
		
		function initializeHideStrategy(){
			$(document).click(function(){
				hideList();
			}).blur(function(){
				hideList();
			});
			/*
			if($.browser.msie && /6\.0/g.test(navigator.userAgent)){
				$("body").click(_hideAll);
				if(window.parent){
					$(window.parent.document.body).click(_hideAll);
				}
			}*/
			
			function _hideAll(){
				hideList();
			}
		}

        initialize();
	};

	$.TimePicker.defaults = {
		interval: 60
	};

	$.TimePicker.tools = {
		calculateTimeList: function(interval, startTime){
	        var base = startTime ? (startTime.hh * 60 + startTime.mm + interval) : 0;
	        var timepoints = [];
	        interval = interval ? interval : 60;
	        
	        var loopCount = (60 * 24 - base) / interval;
	        
	        for (var i = 0; i < loopCount; i++) {
	            var h = parseInt(base / 60);
	            var m = base % 60;
	            
	            timepoints.push({
	                hh: h,
	                mm: m
	            });
	            base += interval;
	        }

	        return timepoints;
	    },

	    padLeft: function(t, s){
	        return [s, new String(t)].join('');
	    },

	    parseTime: function(t){
	        try {
	            var a = t.split(':');
	            return {
	                hh: parseInt(parseFloat(a[0])),
	                mm: parseInt(a[1])
	            }
	        } 
	        catch (e) {
	        	throw new Error('parse time error');
	        }
	    },

	    formatTime: function(t){
	        var hh = t.hh;
	        var mm = t.mm;
	        
	        hh = hh < 10 ? $.TimePicker.tools.padLeft(hh, '0') : hh;
	        mm = mm < 10 ? $.TimePicker.tools.padLeft(mm, '0') : mm;
	        
	        return [hh, ':', mm].join('');
	    },
		
		isDigit: function(keyCode){
			return (keyCode >= 48 && keyCode <= 57);
		},
		
		isTime: function(time){
			//TODO
			return /^([0-1][0-9])|(2[0-3])\:[0-5][0-9]$/g.test(time);
		},

	    elements: {
	        div: $("<div/>"),
	        ul: $("<ul/>"),
	        li: $("<li/>"),
	        span: $("<span/>")
	    }
	};
})(jQuery);
