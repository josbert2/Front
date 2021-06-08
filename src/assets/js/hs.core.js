/*
* HSCore
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSCore
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/
'use strict';

$.extend({
	HSCore: {
		init: function () {
			$(document).ready(function () {
				// Botostrap Tootltips
				$('[data-toggle="tooltip"]').tooltip();
				
				// Bootstrap Popovers
				$('[data-toggle="popover"]').popover();
			});
		},
		
		components: {}
	}
});

$.HSCore.init();

$('.scroll-link').click(function(){
	
	if ($(window).width() < 768){
		setTimeout(function(){
			if ($('.navbar-collapse.collapse').hasClass('show')){
				$('.navbar-collapse.collapse').removeClass('show')
	
				$('.navbar-toggler').attr('aria-expanded', false)
				
			}else{
				$('.navbar-collapse.collapse').addClass('show')
				$('.navbar-toggler').attr('aria-expanded', true)
			}
		}, 100)
	
	}
})

$('.none-click').click(function(e){
	e.preventDefault()
  })
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
$('.cookieok').click(function(){
	gtag('event', 'gc', {
		'event_category' : 'acceptCookies',
		'event_label' : 'acceptCookies'
	  });
	  setCookie("acceptCookies", true, 60);
})