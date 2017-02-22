// JavaScript Document

define(function(require, exports, module) {
	var $ = require('jquery');
	function tabMeunall(leftMeun) {
		this.tabMeun = $(leftMeun);
	}
	module.exports = tabMeunall;
	tabMeunall.prototype.tabMeunShow = function(tabMeunlist,tabMeuncon,subElements){
		
/*$(tabMeunlist).mousemove(function(){
	var index = $(tabMeunlist).index(this);
       $(this).addClass('active').siblings().removeClass('active');
	   //$(tabMeuncon).addClass("tab-content").siblings(this).removeClass("tab-content");
       $(tabMeuncon).find(".wiki").eq(index).addClass('tab-content');
   }).mouseout(function(){
	   $(this).removeClass('active');
	   //$(tabMeuncon).siblings(this).removeClass("tab-content");
	  $(tabMeuncon).find(".wiki").eq(index).removeClass('tab-content');
	});*/
   $(tabMeunlist).hover(function(){
	   $(this).addClass('active').siblings().removeClass('active');
			var index = $(tabMeunlist).index(this);
			$(tabMeuncon).find(subElements).eq(index).show().siblings().hide();
		})
	}
});