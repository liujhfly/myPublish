/**
 * Created by chengran on 16/4/21.
 */

$(function() {
	tabsFun();
});

function tabsFun(){
	var width = $(".tabs-nav li.active").width();
	$(".tabs-ink-bar").css("width",width+20);
	$("#tabs-icon .tabs-ink-bar").css("width",width+42);//图标tabs宽度
	$("#tabs-slide .tabs-ink-bar").css("left","32px");//图标tabs宽度
	
	$(".tabs-nav li").click(function(){ 
		var $this = $(this);
    	var $rootTabs = $this.parents(".tabs");
		var index = $this.index();
		if (!$this.hasClass('disabled')){
			if (!$this.hasClass('active')) {
				$rootTabs.find(".tabs-content .tabs-pane").hide().eq(index).fadeIn();
			}
			$this.addClass("active").siblings().removeClass("active");
			var left = $rootTabs.find(".tabs-nav li.active").position().left;
			var width = $rootTabs.find(".tabs-nav li.active").width();
			$rootTabs.find(".tabs-ink-bar").css("width",width+20);
			$("#tabs-card").find(".tabs-ink-bar").css("left",left);//卡片tabs的移动方式
			$rootTabs.find(".tabs-ink-bar").animate({left:left});
		}
		
	});
	
}
