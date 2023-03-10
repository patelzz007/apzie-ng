jQuery(function ($) {
    'use strict';
   
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
		}
	});

	// Navbar JS
	$('.navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
	
	// Screenshot Slider
	$('.screenshot-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-curve-arrow'></i>",
			"<i class='flaticon-curve-arrow-1'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 5
			},
			1200: {
				items:6
			}
		}
	});

	// Feedback Carousel
	var $imagesSlider = $(".testimonials-slides .client-feedback>div"),
	$thumbnailsSlider = $(".client-thumbnails>div");
	// Images Options
	$imagesSlider.slick({
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		fade: true,
		autoplay: true,
		draggable: true,
		asNavFor: ".client-thumbnails>div",
		prevArrow: '.client-feedback .prev-arrow',
		nextArrow: '.client-feedback .next-arrow'
	});
	// Thumbnails Options
	$thumbnailsSlider.slick({
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: true,
		centerMode: true,
		draggable: false,
		focusOnSelect: true,
		asNavFor: ".testimonials-slides .client-feedback>div",
		prevArrow: '.client-thumbnails .prev-arrow',
		nextArrow: '.client-thumbnails .next-arrow',
	});
	
	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	/* Practicle JS
	========================================================*/
	if(document.getElementById("particles-js")) particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 50, "density": {
					"enable": true, "value_area": 800
				}
			}
			, "color": {
				"value": "#ffffff"
			}
			, "shape": {
				"type": "circle", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
				, "image": {
					"src": "img/github.svg", "width": 100, "height": 100
				}
			}
			, "opacity": {
				"value": 0.5, "random": false, "anim": {
					"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
				}
			}
			, "size": {
				"value": 5, "random": true, "anim": {
					"enable": false, "speed": 40, "size_min": 0.1, "sync": false
				}
			}
			, "line_linked": {
				"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
			}
			, "move": {
				"enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract": {
					"enable": false, "rotateX": 600, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on": "canvas", "events": {
				"onhover": {
					"enable": true, "mode": "repulse"
				}
				, "onclick": {
					"enable": true, "mode": "push"
				}
				, "resize": true
			}
			, "modes": {
				"grab": {
					"distance": 400, "line_linked": {
						"opacity": 1
					}
				}
				, "bubble": {
					"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
				}
				, "repulse": {
					"distance": 200
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect": true, "config_demo": {
			"hide_card": false, "background_color": "#b61924", "background_image": "", "background_position": "50% 50%", "background_repeat": "no-repeat", "background_size": "cover"
		}
	});

	// WOW JS
	$(window).on ('load', function (){
		if ($(".wow").length) { 
			var wow = new WOW({
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       20,          // distance to the element when triggering the animation (default is 0)
			mobile:       true, // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
		});
		wow.init();
		}
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));









