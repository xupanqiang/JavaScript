// JavaScript Document
define(function(require, exports, module) {
	var $ = require('jquery');
	function explainShowList(learnwaya) {
		this.explainShow = $(learnwaya);
	}
	module.exports = explainShowList;
	explainShowList.prototype.explainPrompta = function(hoveWhy,indexPublic,wayInfor){
		$(hoveWhy).hover(function(){
			$(indexPublic).find(wayInfor).css({"opacity":"1"}).animate({marginLeft:"0px"},500);
		},function(){
			$(indexPublic).find(wayInfor).animate({marginLeft:"-5px",opacity:"0"},500);
		});
	}
});