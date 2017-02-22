// JavaScript Document
//点击显示隐藏
define(function(require, exports, module) {
	var $ = require('jquery');
    function mouseToggle(messagebox) {
		this.container = $(messagebox);
	  }
  module.exports = mouseToggle;
  mouseToggle.prototype.show = function(p1,p2){
	  $(p1).click(function() {
		  $(p2).toggle();
   	  });
  }
});