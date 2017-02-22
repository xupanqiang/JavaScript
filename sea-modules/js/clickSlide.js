// JavaScript Document
define(function(require, exports, module) {
	var $ = require('jquery');
	var slide = require('./jquery.SuperSlide2');
	//require('jquery.SuperSlide2')($);
	function clickSlidea(slideall) {
		this.clickSlide = $(slideall);
	}
	module.exports = clickSlidea;
	clickSlidea.prototype.clickSlideAll = function(slideCanvas,slideCanvasUl,slideBnt){
		$(slideCanvas).hover(function(){
			$(slideBnt).css("display","inline");
		},function(){
			$(slideBnt).css("display","none");
		});
		$(slideCanvas).slide({
			titCell: "",
			mainCell: slideCanvasUl,
			autoPage: true,
			effect: "leftLoop",
			autoPlay: true,
			vis: 3
		});
	}
});