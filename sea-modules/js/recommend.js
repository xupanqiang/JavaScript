// JavaScript Document

define(function(require, exports, module) {
	var $ = require('jquery');
	function recommendMenu(recommend) {
		this.redMeun = $(recommend);
	}
	module.exports = recommendMenu;
	recommendMenu.prototype.hoverShowred = function(remmeun,sbremeun,remmeuna){
		 $(remmeun).mouseover(function(){
			$(sbremeun).css("display","block");
			$(remmeuna).css("display","none");
		}).mouseout(function(){
			$(sbremeun).css("display","none");
			$(remmeuna).css("display","block");
		});
	}
});