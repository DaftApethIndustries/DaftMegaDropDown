# looseMegaDropDown

Implentation of a 'Mega dropdown' with the JS written as a plugin for jQuery.

(c) 2012 Ryan Mitchell (rmitchell@sapient.com)

Released under The MIT License.

## Description:

looseMegaDropDown is a jQuery plugin to create a mega dropdown that has keyboard support.


## Homepage:

http://github.com/ryanand26/looseMegaDropDown

## Usage:

1. Insert the necessary elements in your document, e.g.:
   
		<script src='/js/looseMegaDropDown.js'></script>


2. Initialise the dropdown, e.g.:

		<script type='text/javascript'>
			$(document).ready(function() {
				$('#primary-navigation').looseMegaDropDown();
			});
		</script>

3. Options (The intial characters are because the variable names use a simplified version of Hungarian notation).

	+ sActiveClass - Class to use on an active primary item. Default: 'jsActive'.
	+ sMenuLinkClass - Class added to each mega-nav item. Default: 'menuLayerLink'.
	+ sMenuRightSideClass - Class add when the dropdown is in the second half of the menu. Default: 'menuRightClass'.
	+ sItemSelect - Select for child items (lists to show). Default: '.looseMegaMenu'.
	+ sLinkSelect - Select for primary items (show the child items on hover and focus). Default: '> li > a'.
	+ sEventNamespace - Namespace added to all bound events. Default: '.mdd'.
	+ iDelayShow - Show speed. Default: 500.
	+ iDelayHide - Hide speed. Default: 100.


Check out the /index.html for a demo.