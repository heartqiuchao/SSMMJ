/**
 * �����б�
 */
(function($) {
$.fn.extend({
	tip: function(options) {
		options = $.extend({}, $.Tip.defaults, options);
		return this.each(function() {
			new $.Tip(this, options);
		});
	}
});
/**
 * tips ��ʾģʽ ���������ĸ�����  �Զ�ƥ��
 * Ĭ�� ���¾�����ʾ����߾��벻������ƫ����ʾ
 * �����Ȳ�����������ʾ
 * top,right,bottom,left
 *
 */
$.Tip = function(eventTarget, options) {
	var MARGIN = 0, PADDING = 4, OFFSET = 4, FLAG;
	var container, arrow, shadow, containerId="dd_container_werwer", shadowId="dd_cover_werwer", top=0, left=0, width=0, height=0;
	// ����tips
	function buildTip(obj, e){
		$("#"+containerId).remove();
		$("#"+shadowId).remove();
		
		container = $("<div/>")
				.attr("id",containerId)
				.css({position:"absolute","z-index":99})
				.appendTo(document.body);
				
		title = $(obj).attr("caption") == undefined ? "" : ($(obj).attr("caption") ? $(obj).attr("caption") : "");
		if(title == "" && options.content == "") return false;
		if(title != ""){
			var content = $("<div/>").addClass(options.tipClass).css({padding:"10px"}).text(title).appendTo(container);
		}else{
			// ����
			var content = $(options.content).clone();
			content.show().appendTo(container);		
		}
		
		var de = document.documentElement;
		var w = self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
		var h = self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;

		arrow = $("<span/>").css({position:"absolute","z-index":100,overflow:"hidden"}).appendTo(container);
		var mousePosition = setMousePosition(e);
		// ���ò��շ�ʽ
		if(options.showTarget == "mouseTarget"){
			var mousePosition = setMousePosition(e);
			top=mousePosition.top; left=mousePosition.left; height=0; width=0; MARGIN=20; PADDING = 8;
		}else if(options.showTarget == "eventTarget"){
			top=$(eventTarget).offset().top; left=$(eventTarget).offset().left; width=$(eventTarget).outerWidth(); height=$(eventTarget).outerHeight();
			MARGIN=10; PADDING = 0;
		}
		switch (options.position){
			case "top":
				// ����tips����ʾ���� Ĭ��
				if(top - MARGIN > container.outerHeight()){
					setTop(w,h);
				}else if(h - parseInt(top + height) - MARGIN > container.outerHeight()){
					setBottom(w,h);
				}else if(w - parseInt(left + width) - MARGIN > container.outerWidth()){
					setRight(w,h);
				}else if(left - MARGIN > container.outerWidth()){
					setLeft(w,h);
				}
				break;
			case "right":
				// ����tips����ʾ���� Ĭ��
				if(w - parseInt(left + width) - MARGIN > container.outerWidth()){
					setRight(w,h);
				}else if(left - MARGIN > container.outerWidth()){
					setLeft(w,h);
				}else if(h - parseInt(top + height) - MARGIN > container.outerHeight()){
					setTop(w,h);
				}else if(top - MARGIN > container.outerHeight()){
					setBottom(w,h);
				}
				break;
			case "bottom":
				// ����tips����ʾ���� Ĭ��
				if(h - parseInt(top + height) - MARGIN > container.outerHeight()){
					setBottom(w,h);
				}else if(top - MARGIN > container.outerHeight()){
					setTop(w,h);
				}else if(w - parseInt(left + width) - MARGIN > container.outerWidth()){
					setRight(w,h);
				}else if(left - MARGIN > container.outerWidth()){
					setLeft(w,h);
				}
				break;
			case "left":
				// ����tips����ʾ���� Ĭ��
				if(left - MARGIN > container.outerWidth()){
					setLeft(w,h);					
				}else if(w - parseInt(left + width) - MARGIN > container.outerWidth()){
					setRight(w,h);
				}else if(h - parseInt(top + height) - MARGIN > container.outerHeight()){
					setTop(w,h);
				}else if(top - MARGIN > container.outerHeight()){
					setBottom(w,h);
				}
				break;
		}
		container.show();
		if(navigator.appVersion.match(/6./i)=='6.'){ container.bgiframe();}
		// ����Ӱ
		shadow = $("<div/>")
			.attr("id",shadowId)
			.css({/*backgroundColor:"#000",position: "absolute",opacity: 0.2,"z-index": 98*/
				 "background":"url(../skins/default/images/tip_shadow.png) bottom right",position: "absolute"})
			.css({left:content.offset().left+OFFSET,top:content.offset().top+OFFSET,width:content.outerWidth()+"px",height:content.outerHeight()+"px"})
            .appendTo(document.body);
		// ���õ��ҳ��ʱɾ��tips
		$("html").bind("click", function(){
			removeTip();
		});
	}
	// ������ʾ
	function setTop(w,h){
		arrow.addClass(options.arrowClass.arrowBottomClass).css({bottom:0}); // ��ͷ����
		container.css({top: top - container.outerHeight() - MARGIN,"padding-bottom":arrow.height()+"px"});
		
		setPosition("bottom", w, h);
	}
	// ������ʾ
	function setBottom(w,h){
		arrow.addClass(options.arrowClass.arrowTopClass).css({top:0});      // ��ͷ����
		container.css({top: top + height + MARGIN,"padding-top":arrow.height()+"px"});
		
		setPosition("top", w, h);
	}
	// ������ʾ
	function setRight(w,h){
		arrow.addClass(options.arrowClass.arrowLeftClass).css({left:0}); // ��ͷ����
		container.css({left: left + width + MARGIN,"padding-left":arrow.width()+"px"});
		
		setPosition("right", w, h);
	}
	// ������ʾ
	function setLeft(w,h){
		arrow.addClass(options.arrowClass.arrowRightClass).css({right:0}); // ��ͷ����
		container.css({left: left - container.outerWidth() - MARGIN,"padding-right":arrow.width()+"px"});
		
		setPosition("left", w, h);
	}
	// ����tipsλ��
	function setPosition(position, w, h, mousePosition){
		switch (position){
			case "top":
			case "bottom":
				if(options.align == "center"){
					// �����м�λ�� ����
					var centerLeft = left + width/2;
					var centerRight = w - centerLeft;
					var cc = container.outerWidth()/2;
					
					if(centerLeft > cc){
						if(centerRight > cc){
							container.css({left: centerLeft - cc});	
						}else{
							container.css({right: 10});
						}
					}else{
						if(centerRight > cc){
							container.css({left: 10});
						}else{
							container.css({left: 10, right: 10});
						}
					}
				}else if(options.align == "left"){
					if(w - left > container.outerWidth()){
						container.css({left: left});
					}else{
						container.css({right: left + width});
					}
				}else if(options.align == "right"){
					if(left + width > container.outerWidth()){
						container.css({right: w - (left + width)});
					}else{
						container.css({left: left});
					}
				}
				
				var c = arrow.width()/2;
				if(width > 0) c = width/2 - c;
				
				if(left > container.offset().left){
					c += (left - container.offset().left);
				}else{
					c -= (container.offset().left - left);
				}
				arrow.css({left: c - PADDING});       // ��ͷ������ʾ
				break;
			case "left":
			case "right":
				if(options.valign == "middle"){
					// �����м�λ�� ����
					var centerTop = top + height/2;
					var centerBottom = h - centerTop;
					var cc = container.outerHeight()/2;
					
					if(centerTop > cc){
						if(centerBottom > cc){
							container.css({top: centerTop - cc});	
						}else{
							container.css({bottom: 10});
						}
					}else{
						if(centerBottom > cc){
							container.css({top: 10});
						}else{
							container.css({top: 10, bottom: 10});
						}
					}
				}else if(options.valign == "top"){
					if(h - top > container.outerHeight()){
						container.css({top: top});
					}else{
						container.css({bottom: h - (top + height)});
					}
				}else if(options.valign == "bottom"){
					if(top + height > container.outerHeight()){
						container.css({bottom: h - (top + height)});
					}else{
						container.css({top: top});
					}
				}
				var c = arrow.height()/2;
				if(height > 0) c = height/2 - c;
				
				if(top > container.offset().top){
					c += parseInt(top - container.offset().top);
				}else{
					c -= parseInt(container.offset().top - top);
				}
				arrow.css({top: c - PADDING});      // ������ʾ
				break;
		}
	}
	// ɾ��tips
	function removeTip(){
		container.remove();
		shadow.remove();
		FLAG = "";
	}
	// �������λ��
	function setMousePosition(ev){
		ev = ev || window.event;
		if(ev.pageX || ev.pageY){
			mx = ev.pageX;
			my = ev.pageY;
		}else{
			mx = ev.clientX;
			my = ev.clientY + $(document).scrollTop();
		}
		return {left:mx, top:my};
	}

	
	switch (options.mouseEvent){
		case "click":
			$(eventTarget).click(function(e){
				buildTip(this, e);				
				return false;
			});
			break;
		case "hover":
			$(eventTarget).hover(function(e){
				buildTip(this, e);
			},function(){
				// removeTip();
			});
			break;
		case "clickOrHover":
			$(eventTarget).hover(function(e){
				buildTip(this, e);
			},function(){
				if(FLAG != "isClick"){
					removeTip();
				}
			}).click(function(e){
				buildTip(this, e);	
				FLAG = "isClick";
				return false;
			});
			break;
	}
};
// ����Ĭ��ֵ
$.Tip.defaults = {
	mouseEvent: "hover",
	showTarget: 'eventTarget',
	position: "bottom",
	align: "center",
	valign: "middle",
	tipClass: "tips",
	arrowClass:{arrowTopClass:"arrow_top",arrowRightClass:"arrow_right",arrowBottomClass:"arrow_bottom",arrowLeftClass:"arrow_left"},
	content: ''
};
})(jQuery);