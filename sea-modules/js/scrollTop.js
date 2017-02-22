// JavaScript Document
define(function(require, exports, module) {
	var $ = require('jquery');
	function scrollTopa(gototop) {
		this.clickScrollTop = $(gototop);
	}
	module.exports = scrollTopa;
	scrollTopa.prototype.clickScrollTopa = function(sidebar){
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
				$(sidebar).fadeIn();	
			}
			else{
				$(sidebar).hide();
			}
		});
		$(sidebar).click(function(){
			$('html,body').animate({'scrollTop':0},500);
		});
	}
});