// JavaScript Document


define(function(require, exports, module) {
	var $ = require('jquery');
	function mouseToggle2(headsearch){
		this.from = $(headsearch);
	}
	module.exports = mouseToggle2;
	mouseToggle2.prototype.show2 = function(txet,bnt,hotWords){
		$(txet).focus(function(){
			//alert(11);
			  $(bnt).addClass("search-btn2");
			  $(hotWords).hide();
		}).blur(function(){
			  $(bnt).removeClass("search-btn2");
			  $(hotWords).show();
		});
	}
});