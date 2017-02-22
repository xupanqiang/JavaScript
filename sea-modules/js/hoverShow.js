// JavaScript Document
//导航效果
define(function(require, exports, module) {
	var $ = require('jquery');
    function mouseHover(navpositon) {
		this.nav = $(navpositon);
	  }
  module.exports = mouseHover;
  mouseHover.prototype.hoverShow = function(navbnt,sbnav,nava,sbmeun,icona){
	  $(nava).mouseover(function(){
						var index = $(nava).index(this);
						if(index!=0){
						   $(sbmeun).eq(index-1).addClass("bgColor").siblings(this).removeClass("bgColor");	
						   $(icona).eq(index-1).css("display","block").siblings(this).css("display","block");
						} else{
							$(sbmeun).removeClass("bgColor");
							$(icona).css("display","none");
						};
					}).mouseout(function(){
						$(sbmeun).removeClass("bgColor");
						$(icona).css("display","none");
					});
					
					$(sbmeun).mouseover(function(){
						   $(this).find(icona).css("display","block").siblings(this).css("display","block");

					}).mouseout(function(){
						$(icona).css("display","none");
					});
					
	  $(navbnt).mouseover(function() {
		  $(sbnav).show();
   	  }).mouseout(function(){
		  $(sbnav).hide();
	  });
  }
});