# daftMegaDropDown

Implentation of a 'Mega dropdown' with the JS written as a plugin for jQuery.

(c) 2012 Daft Apeth Industries (enquiries@daftapeth.co.uk)

Released under The MIT License.

## Description:

daftMegaDropDown is a jQuery plugin to create a mega dropdown that has keyboard support.


## Homepage:

http://github.com/ryanand26/daftMegaDropDown

## Usage:

1. Populate the HTML

		<ul id="primaryNav" class="daftMegaDropDown">
			<li>
				<a href="#">One</a>

				<ul class="daftMegaMenu">
					<li><a href="#">MDD item</a></li>
					<li><a href="#">MDD item</a></li>
					<li><a href="#">MDD item</a></li>
					<li><a href="#">MDD item</a></li>
					<li><a href="#">MDD item</a></li>
				</ul>
			</li>

			...

		</ul>


2. Insert the necessary elements in your document, e.g.:
   
		<script src='/js/daftMegaDropDown.js'></script>


3. Initialise the dropdown, e.g.:

		<script type='text/javascript'>
			$(document).ready(function() {
				$('#primary-navigation').daftMegaDropDown();
			});
		</script>

## Options:

(The intial characters are because the variable names use a simplified version of Hungarian notation).

	+ sActiveClass - Class to use on an active primary item. Default: 'jsActive'.
	+ sMenuLinkClass - Class added to each mega-nav item. Default: 'menuLayerLink'.
	+ sMenuRightSideClass - Class add when the dropdown is in the second half of the menu. Default: 'menuRightClass'.
	+ sItemSelect - Select for child items (lists to show). Default: '.daftMegaMenu'.
	+ sLinkSelect - Select for primary items (show the child items on hover and focus). Default: '> li > a'.
	+ sEventNamespace - Namespace added to all bound events. Default: '.mdd'.
	+ iDelayShow - Show speed. Default: 500.
	+ iDelayHide - Hide speed. Default: 100.


Check out the /index.html for a demo.