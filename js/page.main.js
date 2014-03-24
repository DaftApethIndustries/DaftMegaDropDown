/*jslint evil: false, jquery:true, forin: true, white: false, devel:true */
/*!
 * Primary file for site scripting
**/

(function( window, $, undefined ) {
	"use strict";
	
	//Main/Root object for demo
	var demo = (function (demo) {

		/**
		* Init call for Main JS
		* Called on document ready
		*/
		demo.init = function () {

			var ePrimaryNavigation = $('#primaryNav'),
				oSettings, oPrimaryMdd;

			if (ePrimaryNavigation.length > 0) {
				oSettings = {};
				
				ePrimaryNavigation.daftMegaDropDown();
			}

		};


		
		
	
		//return out new object
		return demo;
		
	}( {} ));
	
	
	$(document).ready(demo.init);
	
}(window, jQuery));