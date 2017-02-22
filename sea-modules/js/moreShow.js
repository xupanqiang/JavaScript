// JavaScript Document
define(function(require, exports, module) {
	var $ = require('jquery');
	function moreShowList(recommendName) {
		this.moreShow = $(recommendName);
	}
	module.exports = moreShowList;
	moreShowList.prototype.moreShowAll = function(liMeun,sabLiMeun,sabLiMeunIcon1,sabLiMeunIcon2,sabLiMeunIcon3){
		
		$(liMeun).hover(function(){
			$(this).find(sabLiMeun).css("opacity","1");
			$(this).find(sabLiMeunIcon1).css("display","block");
			$(this).find(sabLiMeunIcon2).animate({height:"175px"},1000);
			$(this).find(sabLiMeunIcon3).css({"opacity":"1","display":"block"}).animate({height:"52px"},1000);
		},function(){
			$(this).find(sabLiMeun).css("opacity","0");
			$(this).find(sabLiMeunIcon1).css("display","none");
			$(this).find(sabLiMeunIcon2).animate({height:"88px"},1000);
			$(this).find(sabLiMeunIcon3).animate({height:"0px"},1000);
		});
	}
});