/**
 * 下拉列表
 */
(function($) {
$.fn.extend({
	dropdown: function(options) {
		options = $.extend({}, $.Dropdown.defaults, options);
		return this.each(function() {
			new $.Dropdown(this, options);
		});
	}
});

$.Dropdown = function(eventTarget, options) {
	var container, shadow, containerId="dd_container_asdfsafd", shadowId="dd_cover_tsdfsfff";
	function buildDropdown(){
		$("#"+containerId).remove();
		$("#"+shadowId).remove();
		$("."+options.styles.eventTargetSelectedClass).removeClass(options.styles.eventTargetSelectedClass);
		$(eventTarget).addClass(options.styles.eventTargetSelectedClass);
		
		container = $("<div/>")
				.attr("id",containerId)
				.css({overflow:"visible",position:"absolute","z-index":99})
				.appendTo(document.body);
				
		var content = $(options.content).clone();
		content.show().appendTo(container);
		
		var de = document.documentElement;
		var w = self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
		var h = self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
		
		// 上下显示 top 位置
		if(h - parseInt($(eventTarget).offset().top + $(eventTarget).outerHeight()) > container.outerHeight()){
			container.css({top: $(eventTarget).offset().top + $(eventTarget).outerHeight()});
		}else if($(eventTarget).offset().top > container.outerHeight()){
			container.css({top: $(eventTarget).offset().top - container.outerHeight()});
		}else{
			container.css({top: $(eventTarget).offset().top + $(eventTarget).outerHeight()});
		}
		
		// 左右位置
		if(w - parseInt($(eventTarget).offset().left + $(eventTarget).outerWidth()) > container.outerWidth())
			container.css({left: $(eventTarget).offset().left});
		else container.css({left: $(eventTarget).offset().left + $(eventTarget).outerWidth() - container.outerWidth()});
		
		container.show();
		if(navigator.appVersion.match(/6./i)=='6.'){ container.bgiframe();}
		// 加阴影
		
	
		if( !-[1,])//判断是否ie
		{
		shadow = $("<div/>")
			.attr("id",shadowId)
			.css({backgroundColor:"#000",position: "absolute",opacity: 0.1,"z-index": 98})
			.css({left:content.offset().left+4,top:content.offset().top+4,width:content.outerWidth()+"px",height:content.outerHeight()+"px"})
            .appendTo(document.body);
		}
		$("html").bind("click", function(){
			removeDropdown();
		});
	}
	function removeDropdown(){
		container.remove();
		shadow.remove();
		$("."+options.styles.eventTargetSelectedClass).removeClass(options.styles.eventTargetSelectedClass);
	}
	switch (options.mouseEvent){
		case "click":
			$(eventTarget).click(function(){
				buildDropdown();				
				return false;
			}).hover(function(){
				$(this).addClass(options.styles.eventTargetHoverClass);
			},function(){
				$(this).removeClass(options.styles.eventTargetHoverClass);
			}).focus(function(){$(this).blur()});
			break;
		case "hover":
			$(eventTarget).mouseover(function(){
				buildDropdown();			
				return false;
			});
			break;
	}
};

$.Dropdown.defaults = {
	mouseEvent: "click",
	styles:{eventTargetHoverClass:"btnHover",eventTargetSelectedClass:"btnSelected"},
	content: ''
};

})(jQuery);

$('body').live('click', function(){
	$(".dropdownmenu").hide();
})