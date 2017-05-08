/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		// navbar = document.querySelector( '.navbar-default' ),
		navbar = document.getElementById("navcontainer");

		didScroll = false,
		changeHeaderOn = 200;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if(location.href.includes("contact")){

		}else{
		if ( sy >= changeHeaderOn ) {
      // document.getElementById("brand_logo").src="img/logo.svg";
			classie.add( navbar, 'navbar-shrink' );
    }
		else {
			classie.remove( navbar, 'navbar-shrink' );
      // document.getElementById("brand_logo").src="img/cherrywork_logo_white@2x.png";

		}
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
