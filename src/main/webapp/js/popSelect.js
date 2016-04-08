// JavaScript Document

$(document).ready(function(){
    setDataGridH();
});
function setDataGridH(){
    $("html").css("height","100%");
    $("body").css({
        "height":"99%",
        "margin-bottom":0,
        "margin-top":0});
    $(".header").css("margin-top",-5);
    var t = setTimeout(function(){
        var bodyH = document.body.clientHeight;
        var headerH = $(".header").outerHeight(true);
        var h2H = $("h2").outerHeight(true)*$("h2").length;
        var editBlockH =$(".editBlock").outerHeight(true);
        var pageH = $(".page").outerHeight(true);
        var bottombarH = $(".bottomtoolbar").outerHeight(true);
        if(bodyH>362){
            var dataGridH = bodyH-headerH-h2H-editBlockH-pageH-bottombarH-12;
            $(".dataGrid").height(dataGridH);
            var tableW = $(".dataGrid>table").width()-16; //16为标准滚动条宽度
            $(".dataGrid").css("overflow-y","auto");
            //var scrollbarH = $(".dataGrid")[0].scrollHeight-$(".dataGrid")[0].clientHeight;
            //if(scrollbarH>0){
            //    $(".dataGrid>table").css({"width":tableW}); 
            //}
        }else{
            $("body").css({"overflow-y":"auto","overflow-x":"hidden"});
            $(".dataGrid").css("overflow-y","auto");
        } 
    },100);
}