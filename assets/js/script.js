
jQuery(function($) {
	
    'use strict';
    Window_Scroll();
});

var Window_Scroll = function() {
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 20 ) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });
};