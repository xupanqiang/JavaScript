// JavaScript Document
define(function(require, exports, module) {
	var $ = require('jquery');
    function mouseHover(bannerbox) {
		this.mouseHoverBox = $(bannerbox);
	  }
  module.exports = mouseHover;
  mouseHover.prototype.show1 = function(a1,a2){
	  $(".banner-box").hover(function(){
			$(".banner-box span").show();	
		},function(){
			$(".banner-box span").hide();	
		});
  }
});