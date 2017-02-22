// JavaScript Document
//左边菜单
define(function(require, exports, module) {
	var $ = require('jquery');
	function mouseHover2(leftMeun) {
		this.navMeun = $(leftMeun);
	}
	module.exports = mouseHover2;
	mouseHover2.prototype.hoverShow2 = function(leftNav,subMeuna){
		$(leftNav).mouseover(function(){
			$(this).find(subMeuna).show();
		}).mouseout(function(){
			$(this).find(subMeuna).hide();
		});
	}
});