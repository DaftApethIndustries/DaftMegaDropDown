/*jslint evil: false, jquery:true, forin: true, white: false, devel:true */
/*!
 * Loose Mega Drop Down plugin
 * Author: ryanand26 (2012) (http://www.looseideas.co.uk)
 * @version 1.0
**/

(function( window, $, undefined ) {
	"use strict";

	$.fn.looseMegaDropDown = function(oOptions) {

		var oDefaults = {
				sActiveClass : 'jsActive',
				bKeepNavOpen : false,
				sMenuLinkClass : 'menuLayerLink',
				sMenuRightSideClass : 'menuRightClass',
				sItemSelect : '.megaMenu',
				sLinkSelect : '> li > a',
				sEventNamespace : '.mdd',
				iDelayShow : 500,
				iDelayHide : 100
			},
			oSettings = $.extend({}, oDefaults, oOptions);

		/**
		* Mega drop down object
		*/
		var MegaDropDown = function(eMegaNav) {
			var _eMegaNav = null,
				_aMegaNavLinks = [],
				_aMegaItems = [],
				aVisibleItem = null,
				iTimeoutForShow = -1,
				iTimeoutForHide = -1,
				iTimeoutForBlur = -1;

			/**
			* Add a side to the nav links so we pick an alignment for the mdd elements
			*/
			var initNavLinks = function (aMegaNavLinks) {
				var iLen = aMegaNavLinks.length,
					iMidPoint = Math.floor(iLen / 2);
				
				aMegaNavLinks.each(function (i,e) {
					//add the link class, used to speed up show and hides
					var eLink = $(e).addClass(oSettings.sMenuLinkClass);
					//if past the mid point add the class
					if (i >= iMidPoint) {
						eLink.parent().addClass(oSettings.sMenuRightSideClass);
					}
				});
				
				return aMegaNavLinks;
			};

			/**
			* Show the mega items passed in, resets the display first
			*/
			var showMegaNav = function(eThis, aMegaItem) {
				clearTimeout(iTimeoutForHide);

				_aMegaNavLinks.removeClass(oSettings.sActiveClass);
				$(eThis).children('a').addClass(oSettings.sActiveClass);

				aMegaItem.show();
				aVisibleItem = aMegaItem;
			};

			/**
			* Hide all mega items and reset the active nav tab
			*/
			var hideMegaNav = function() {
				clearTimeout(iTimeoutForShow);

				_aMegaItems.stop(true,true).hide();
				aVisibleItem = null;

				_aMegaNavLinks.removeClass(oSettings.sActiveClass);
			};


			/**
			* Called by mouseenter event
			*/
			var handleMegaNavMouseEnter = function(event) {
				clearTimeout(iTimeoutForHide);
				
				var that = this,
					$that = $(this),
					fShow = function (){
						_aMegaItems.hide();
						showMegaNav(that, $that.find(oSettings.sItemSelect));
					};
				//if there are no items currently open, do not use a delay
				if (aVisibleItem !== null) {
					fShow();
				}
				else {
					iTimeoutForShow = setTimeout(fShow, oSettings.iDelayShow);
				}
				
			};
			
			/**
			* Called by mouseleave event
			*/
			var handleMegaNavMouseLeave = function(event) {
				clearTimeout(iTimeoutForShow);
				iTimeoutForHide = setTimeout(hideMegaNav, oSettings.iDelayHide);
			};

			/**
			* Show the mega items passed in, resets the display first
			*/
			var handleMegaNavFocus = function(event) {
				var $this = $(this);

				//stop the focus out events action from taking place
				clearTimeout(iTimeoutForBlur);
				
				//always hide and show if a direct child of megaNav
				if ($this.hasClass(oSettings.sMenuLinkClass) === true) {
					_aMegaItems.hide();
					showMegaNav(this.parentNode, $this.siblings(oSettings.sItemSelect));
				}
			};
			
			/**
			* Called by blur event
			*/
			var handleMegaNavBlur = function(event) {
				clearTimeout(iTimeoutForBlur);
				iTimeoutForBlur = setTimeout(hideMegaNav, oSettings.iDelayHide);
			};
			
			/**
			* Init the object
			*/
			_eMegaNav = $(eMegaNav);
			_aMegaNavLinks = initNavLinks( _eMegaNav.find(oSettings.sLinkSelect) );
								
			_aMegaItems = _eMegaNav.find(oSettings.sItemSelect);

			_eMegaNav
				.on("mouseenter"+oSettings.sEventNamespace, "li:not(.megaList > li)", handleMegaNavMouseEnter)
				.on("mouseleave"+oSettings.sEventNamespace, "li:not(.megaList > li)", handleMegaNavMouseLeave)
				//keyboard events
				.on("focus"+oSettings.sEventNamespace, "a", handleMegaNavFocus)
				.on("blur"+oSettings.sEventNamespace, "a", handleMegaNavBlur);

			return this;
		};
	

		return this.each(function() {
			new MegaDropDown(this);
		});
	};
	
}(window, jQuery));