/*--------------------- Copyright (c) 2019 -----------------------
[Master Javascript]

Project: Portfolio Responsive HTML Template
Version: 1.0.6
Assigned to: ThemeForest
------------------------------------------------------------------


------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var portfolio = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- CV Portfolio Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.open_menu();
			this.custom_scrollbar();
			this.rightbtn_onload();
			this.rightside_onload();
			this.bannerleft_onload();
			this.banner_typingtext();
			this.typed_js();
			this.about_opendetails();
			this.isotop_gallery();
			this.circle_progressbar();
			this.magnific_popup();
			this.testimonial_slider();
			this.popup_video();			
			this.responsor_slider();			
			this.world_map();
			this.contact_form();
			this.goto_top();
			this.page_scroll();
			this.window_scroll();
			this.scroll_contact();
			this.read_more();
			
		},
		
		/*-------------- CV Portfolio Functions Calling ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		
	// open menu click toggle
	open_menu: function() {
		if($('.port_togglebox').length > 0){
			$('.port_togglebox').on('click', function(){
				$('body').toggleClass('port_menu_open');
			});
		}
	},
	/*---------------------------------------------------------------------------------------------------*/
	
	
	/*---------------------------------------------------------------------------------------------------*/
	//start custom scroll bar
	custom_scrollbar: function() {
		if($('.port_sidebar_wrapper').length > 0){
			$('.port_sidebar_wrapper').mCustomScrollbar({
			moveDragger:true,
			scrollEasing:"easeOut"
			});
		}
	},
	/*---------------------------------------------------------------------------------------------------*/
	
	// start on load 
	bannerleft_onload: function() {
		if($('.bannner_leftpart').length > 0){
			$(window).on('load', function(){
			setTimeout(function() {
				$('.bannner_leftpart').addClass('mbannner_leftpart');
				}, 300);
			});
		}
	},
	/*------------------------------------------------------------------*/

	// right side image
	rightside_onload: function() {
		if($('.banner_svg_box').length > 0){
			$(window).on('load', function(){
			setTimeout(function() {
				$('.banner_svg_box').addClass('mbanner_svg_box');
				}, 1500);
			});
		}
	},		
	/*------------------------------------------------------------------*/ 
	
	// right side hire me btn
	rightbtn_onload: function() {
		if($('.brc_hirebtn').length > 0){	
			$(window).on('load', function(){
			setTimeout(function() {
				$('.brc_hirebtn').addClass('mbrc_hirebtn');
				}, 2500);
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	// Typed JS
	typed_js: function() {
		if($('.typed').length > 0){	
			$('.typed').each(function(){
				var _this = $(this);
				var typed = new Typed(this, {
					stringsElement: _this.parent().find('.typed-strings')[0],
					typeSpeed: 100,
					backSpeed: 80,
					fadeOut: false,
					loop: true
				});
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	// animated banner text
	banner_typingtext: function() {
		if($('.icon').length > 0){
			$('.banner_typingtext').textillate({
				loop: true,
				minDisplayTime: 2e3,
				initialDelay: 0,
				autoStart: true,
				"in": {
					effect: "bounceIn",
					// effect: "bounceInDown",
					delayScale: 2.5,
					delay: 50,
					sync: false,
					shuffle: false,
					reverse: false
				},
				out: {
					effect: "bounceOut",
					// effect: "bounceOut",
					delayScale: 2.5,
					delay: 0,
					sync: false,
					shuffle: false,
					reverse: false
				}
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	//about open details 
	about_opendetails: function() {
		if($('.icon').length > 0){
			$('.icon').on('click', function() {
				$('.about_leftsection').toggleClass('open_details');
			});
		}
	},
	
	/*------------------------------------------------------------------*/ 
	// Start isotop gallery js 
		isotop_gallery: function() {
			if($('.gallery_grid').length > 0){
				$('.gallery_grid').isotope({
						itemSelector: '.grid-item',
						filter: '*'
					});
					$('.port_project_gallery > .gallery_nav > ul > li').on( 'click', 'a', function() {
						// filter button click
						var filterValue = $( this ).attr('data-filter');
						$('.gallery_grid').isotope({ filter: filterValue });

						//active class added
						$('a').removeClass('gallery_active');
						$(this).addClass('gallery_active');
					});
			}
		},
	/*------------------------------------------------------------------*/ 
	
	// magnifiv popup for project gallery
	magnific_popup: function() {
        if ($('.view').length > 0) {
            $('.view').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    
                gallery: {
                    enabled: true
                },
                callbacks: {
                    open: function() {
                        $(".mfp-figure figure").css("cursor", "zoom-in");
                        $(".mfp-figure figure").zoom({
                            on: "click",
                            onZoomIn: function () {
                                $(this).css("cursor", "zoom-out");
                            },
                            onZoomOut: function () {
                                $(this).css("cursor", "zoom-in");
                            }
                        });
                    },
                    close: function() {
                        // Will fire when popup is closed
                    }
                }
            });
        }
    },

    zoom_in: function() {
        $(document).ready(function(){
            $('.mpf-img img').zoom({ on: 'click' });
        });
    },    
    
	/*------------------------------------------------------------------*/
	// Start testimonial swipper slider
	testimonial_slider: function() {
		if($('.port_testimonial_setions .swiper-container').length > 0){
			var swiper = new Swiper('.port_testimonial_setions .swiper-container', {
			  slidesPerView: 1,
			  spaceBetween: 30,
			  loop: true,
			  speed:1000,
			   navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			  autoplay: {
					delay: 5500,
					disableOnInteraction: false,
				},
			});
		}
	},
	// End testimonial swipper slider
	/*------------------------------------------------------------------*/ 
	
	// Re sponsor swipper slider
	responsor_slider: function() {
		if($('.port_responsor_setions .swiper-container').length > 0){
			var swiper = new Swiper('.port_responsor_setions .swiper-container', {
			  slidesPerView: 5,
			  spaceBetween: 30,
			  loop: true,
			  speed:1000,
			  autoplay: {
					delay: 3500,
				},
				
			// Responsive breakpoints
			  breakpoints: {
				// when window width is <= 320px
				480: {
				  slidesPerView: 1,
				  spaceBetween: 10
				},
				// when window width is <= 480px
				767: {
				  slidesPerView: 3,
				  spaceBetween: 20
				},
				// when window width is <= 640px
				991: {
				  slidesPerView: 4,
				  spaceBetween: 30
				}
			  }
		 
			});
		}
	},
	
	// End Re sponsor swipper slider
	/*------------------------------------------------------------------*/ 
	
	// circle progress bar js start
	circle_progressbar: function() {
		if($('.progressbar').length > 0){
			$(document).ready(function(){
				function animateElements() {
					$('.progressbar').each(function () {
						var elementPos = $(this).offset().top;
						var topOfWindow = $(window).scrollTop();
						var percent = $(this).find('.circle').attr('data-percent');
						var animate = $(this).data('animate');
						if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
							$(this).data('animate', true);
							$(this).find('.circle').circleProgress({
								startAngle: -Math.PI / 2,
								value: percent / 100,
								size : 400,
								thickness: 15,
								lineCap: 'round',
								fill: {
									color: '#FF754A'
								}
							}).stop()
                            // .on('circle-animation-progress', function (event, progress, stepValue) {
							// 	$(this).find('strong').text((stepValue*100).toFixed(0) + "%");
							// }).stop();
						}
					});
				}

				animateElements();
				$(window).scroll(animateElements);

			
			});
		}
	},
		
	// circle progress bar js start
	/*------------------------------------------------------------------*/ 
	
	// start map js
	world_map: function() {
		if($('#world-map').length > 0){
			$(function(){
				$('#world-map').vectorMap({
				map: 'world_mill',
				scaleColors: ['#C8EEFF', '#0071A4'],
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.9,
				hoverColor: false,
				zoomOnScrollSpeed:1, //default value is 3
				 zoomStep:1.1, //default value is 1.6
					markerStyle: {
									initial:{
												fill: '#00c8da',
												stroke: '#556d91'
											},
									hover: {
												stroke: '#00c8da',
												fill:'#ffc454',
												"stroke-width": 2,
												cursor: 'pointer'
											},
									selected:{
												fill: 'blue'
											},
									selectedHover: {
													}
								},
					regionStyle:{
									initial: {
												fill: '#e3eaef',
												"fill-opacity": 1,
												stroke: 'none',
												"stroke-width": 0,
												"stroke-opacity": 1
											},
									hover: {
												"fill-opacity": 0.8,
												cursor: 'pointer'
											},
									selected:{
												fill: 'yellow'
											},
									selectedHover: {
													}
								},
					backgroundColor: '#fff',
					markers: [
						{
							latLng: [36.72016, -4.42034],
							name: 'Málaga',
						},
						{
							latLng: [-0.22985, -78.52495],
							name: 'Quito',
						},
						{
							latLng: [10.48801, -66.87919],
							name: 'Caracas',
						},
						{
							latLng: [-2.21452, -80.95151],
							name: 'Salinas',
						},
						{
							latLng: [-2.19616, -79.88621],
							name: 'Guayaquil',
						},
						{
							latLng: [4.60971, -74.08175],
							name: 'Bogotá',
						},
						{
							latLng: [36.81897, 10.16579],
							name: 'Túnez',
						},
						{
							latLng: [41.38879, 2.15899],
							name: 'Barcelona',
						},
						{
							latLng: [52.37403, 4.88969],
							name: 'Amsterdam',
						},
						{
							latLng: [52.07667, 4.29861],
							name: 'The Hague',
						},
						{
							latLng: [40.7127837, -74.0059413],
							name: 'New York',
						},
						{
							latLng: [34.052235, -118.243683],
							name: 'Los Angeles',
						},
						{
							latLng: [41.878113, -87.629799],
							name: 'Chicago',
						},
						{
							latLng: [35.222, -101.8313],
							name: 'Amarillo',
						},
						{
							latLng: [40.416775, -3.70379],
							name: 'Madrid',
						},
						{
							latLng: [37.21533, -93.29824],
							name: 'Springfield',
						},
                        {
                            latLng: [37.7749, -122.4194],
                            name: 'San Francisco'
                        },
                        {
                            latLng: [34.8958, -117.0173],
                            name: 'Barstow'
                        },
                        {
                            latLng: [36.1699, -115.1398],
                            name: 'Las Vegas'
                        },
                        {
                            latLng: [36.1069, -112.1129],
                            name: 'Grand Canyon'
                        },
                        {
                            latLng: [35.4676, -97.5164],
                            name: 'Oklahoma City'
                        },
                        {
                            latLng: [27.9659, -82.8001],
                            name: 'Clearwater'
                        },
                        {
                            latLng: [35.1495, -90.0490],
                            name: 'Memphis'
                        },
                        {
                            latLng: [43.0731, -89.4012],
                            name: 'Madison'
                        },
                        {
                            latLng: [44.5192, -88.0198],
                            name: 'Green Bay'
                        },
                        {
                            latLng: [44.9369, -91.3929],
                            name: 'Chippewa Falls'
                        },
                        {
                            latLng: [34.0522, -118.2437],
                            name: 'Los Angeles'
                        },
                        {
                            latLng: [42.3601, -71.0589],
                            name: 'Boston'
                        },
                        {
                            latLng: [42.7654, -71.4676],
                            name: 'Nashua'
                        },
                        {
                            latLng: [-0.9624, -80.7128],
                            name: 'Manta'
                        },
                        {
                            latLng: [36.5298, -6.2920],
                            name: 'Cádiz'
                        },
                        {
                            latLng: [40.9701, -5.6635],
                            name: 'Salamanca'
                        },
                        {
                            latLng: [41.9028, 12.4964],
                            name: 'Roma'
                        },
                        {
                            latLng: [43.7696, 11.2558],
                            name: 'Florencia'
                        },
                        {
                            latLng: [45.4408, 12.3155],
                            name: 'Venecia'
                        },
                        {
                            latLng: [35.0361, 9.4858],
                            name: 'Sidi Bouzid'
                        },
                        {
                            latLng: [35.7595, -5.8330],
                            name: 'Tánger'
                        },
                        {
                            latLng: [36.1408, -5.4562],
                            name: 'Algeciras'
                        },
                        {
                            latLng: [43.2630, -2.9350],
                            name: 'Bilbao'
                        },
                        {
                            latLng: [42.8597, -2.6818],
                            name: 'Vitoria'
                        },
                        {
                            latLng: [43.3623, -8.4115],
                            name: 'La Coruña'
                        },
                        {
                            latLng: [35.0844, -106.6504],
                            name: 'Albuquerque, New Mexico'
                        },
                        {
                            latLng: [38.6270, -90.1994],
                            name: 'Saint Louis, Missouri'
                        },
                        {
                            latLng: [27.9506, -82.4572],
                            name: 'Tampa Bay, Florida'
                        },
                        {
                            latLng: [42.8864, -78.8784],
                            name: 'Buffalo, New York'
                        },
                        {
                            latLng: [-1.0546, -80.4544],
                            name: 'Portoviejo, Ecuador'
                        },
                        {
                            latLng: [0.3392, -78.1220],
                            name: 'Ibarra, Ecuador'
                        },
                        {
                            latLng: [-3.9942, -79.2057],
                            name: 'Loja, Ecuador'
                        },
                        {
                            latLng: [-2.9043, -79.0119],
                            name: 'Cuenca, Ecuador'
                        },
                        {
                            latLng: [43.3614, -5.8494],
                            name: 'Oviedo, España'
                        },
                        {
                            latLng: [43.5322, -5.6615],
                            name: 'Gijón, España'
                        },
                        {
                            latLng: [40.7829, 17.2408],
                            name: 'Alberobello, Italia'
                        },
                        {
                            latLng: [43.3188, 11.3308],
                            name: 'Siena, Italia'
                        },
                        {
                            latLng: [52.3676, 4.9041],
                            name: 'Amsterdam'
                        },
                        {
                            latLng: [51.9225, 4.4792],
                            name: 'Rotterdam'
                        },
                        {
                            latLng: [50.7753, 6.0839],
                            name: 'Aachen'
                        },
                        {
                            latLng: [52.5200, 13.4050],
                            name: 'Berlín'
                        },
                        {
                            latLng: [48.8566, 2.3522],
                            name: 'París'
                        },
                        {
                            latLng: [44.4056, 8.9463],
                            name: 'Génova'
                        },
                        {
                            latLng: [43.7102, 7.2620],
                            name: 'Niza'
                        },
                        {
                            latLng: [37.6257, -0.9966],
                            name: 'Cartagena'
                        },
                        {
                            latLng: [38.7223, -9.1393],
                            name: 'Lisboa'
                        },
                        {
                            latLng: [41.6918, -8.8335],
                            name: 'Viana Do Castelo'
                        },
                        {
                            latLng: [37.0194, -7.9306],
                            name: 'Algarve'
                        },
                        {
                            latLng: [41.1579, -8.6291],
                            name: 'Oporto'
                        },
                        {
                            latLng: [42.5063, 1.5218],
                            name: 'Andorra'
                        },
                        {
                            latLng: [43.7228, 10.4017],
                            name: 'Pisa'
                        },
                        {
                            latLng: [46.7867, -92.1005],
                            name: 'Duluth'
                        },
                        {
                            latLng: [44.9778, -93.2650],
                            name: 'Minneapolis'
                        },
                        {
                            latLng: [36.6437, -93.2185],
                            name: 'Branson'
                        },
                        {
                            latLng: [36.1540, -95.9928],
                            name: 'Tulsa'
                        },
                        {
                            latLng: [34.9387, -104.9373],
                            name: 'Santa Rosa'
                        },
                        {
                            latLng: [34.9022, -110.1593],
                            name: 'Holbrook'
                        },
                        {
                            latLng: [35.1983, -111.6513],
                            name: 'Flagstaff'
                        },
                        {
                            latLng: [35.3733, -119.0187],
                            name: 'Bakersfield'
                        },
                        {
                            latLng: [37.3382, -121.8863],
                            name: 'San José'
                        },
                        {
                            latLng: [34.7465, -92.2896],
                            name: 'Little Rock'
                        },
                        {
                            latLng: [36.1627, -86.7816],
                            name: 'Nashville'
                        },
                        {
                            latLng: [35.2574, -86.3698],
                            name: 'Lynchburg'
                        },
                        {
                            latLng: [53.3498, -6.2603],
                            name: 'Dublín'
                        },
                        {
                            latLng: [6.2442, -75.5812],
                            name: 'Medellín'
                        }                                                                        
					]
				  });
				});
		}
	},
	// end map js
	/*------------------------------------------------------------------*/ 
	
	// start video popup js
	popup_video: function() {
		if($('.testimonial_icon .video').length > 0){
			$('.testimonial_icon .video').magnificPopup({ 
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'<div class="mfp-title">Some caption</div>'+
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/', 
						id: 'v=',
						src: 'https://www.youtube.com/embed/fpQcEiwxzQE'
						}
					}
				}
				// other options
			});	
		}
	},
	// End video popup js
	/*------------------------------------------------------------------*/
	
	// Contact Form Submission
	contact_form: function() {
		if($('.submitForm').length > 0){
			function checkRequire(formId , targetResp){
				targetResp.html('');
				var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
				var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
				var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
				var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
				var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
				var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
				var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
				var check = 0;
				$('#er_msg').remove();
				var target = (typeof formId == 'object')? $(formId):$('#'+formId);
				target.find('input , textarea , select').each(function(){
					if($(this).hasClass('require')){
						if($(this).val().trim() == ''){
							check = 1;
							$(this).focus();
							targetResp.html('You missed out some fields.');
							$(this).addClass('error');
							return false;
						}else{
							$(this).removeClass('error');
						}
					}
					if($(this).val().trim() != ''){
						var valid = $(this).attr('data-valid');
						if(typeof valid != 'undefined'){
							if(!eval(valid).test($(this).val().trim())){
								$(this).addClass('error');
								$(this).focus();
								check = 1;
								targetResp.html($(this).attr('data-error'));
								return false;
							}else{
								$(this).removeClass('error');
							}
						}
					}
				});
				return check;
			}
			$('.submitForm').on('click', function() {
				var _this = $(this);
				console.log(_this.attr('data-type'));
				var targetForm = _this.closest('form');
				var errroTarget = targetForm.find('.response');
				var check = checkRequire(targetForm , errroTarget);
				if(check == 0){
					var formDetail = new FormData(targetForm[0]);
    					formDetail.append('form_type' , _this.attr('data-type'));
					$.ajax({
						method : 'post',
						url : 'ajax.php',
						data:formDetail,
						cache:false,
						contentType: false,
						processData: false
					}).done(function(resp){
						if(resp == 1){
							targetForm.find('input').val('');
							targetForm.find('textarea').val('');
							errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
						}else{
							errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
						}
					});
				}
			});
		}
	},		
	
	
	/*------------------------------------------------------------------*/
	
	/*------------------------------------------------------------------*/
	// Go to Top button
	goto_top: function() {
		if($('.bottom_top').length > 0){
			$(function(){
				// Scroll Event
				$(window).on('scroll', function(){
					var scrolled = $(window).scrollTop();
					if (scrolled > 600) $('.bottom_top').addClass('active');
					if (scrolled < 600) $('.bottom_top').removeClass('active');
				});  
				// Click Event
				$('.bottom_top').on('click', function() {
					$("html, body").animate({ scrollTop: "0" },  500);
				});
			});
		}
	},	
	/*------------------------------------------------------------------*/ 
	
	/*------------------------------------------------------------------*/ 
	//Single page scroll js
	page_scroll: function() {
		if($('.port_navigation.index_navigation .nav_list li').length > 0){	
			$('.port_navigation.index_navigation .nav_list li').on('click' , function(e){
				$('.port_navigation .nav_list li').removeClass('active');
				$(this).addClass('active');
				var target = $('[data-scroll='+$(this).attr('data-number')+']');
				e.preventDefault();
				var targetHeight = target.offset().top-0;
				$('html, body').animate({
					scrollTop: targetHeight
				}, 0);
			});
		}
	},	
	//scroll active class js
	window_scroll: function() {
		if($('.port_navigation').length > 0){	
			$(window).scroll(function() {
				var windscroll = $(window).scrollTop();
				var target = $('.port_navigation .nav_list li');
				if (windscroll >= 0) {
					$('[data-scroll]').each(function(i) {
						if ($(this).position().top <= windscroll + 78) {
							target.removeClass('active');
							target.eq(i).addClass('active');
						}
					});
				}else{
					target.removeClass('active');
					$('.port_navigation .nav_list li:first').addClass('active');
				}
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	/*------------------------------------------------------------------*/
	//click to scroll
	scroll_contact: function() {
		if($('.redirect_contact').length > 0){
			$('.redirect_contact').on('click', function() {
				$('html, body').animate({
					scrollTop: $('#scroll_contact').offset().top
				}, 0);
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	/*------------------------------------------------------------------*/ 
	//Read more
	read_more: function() {
		if($('.ex_btn').length > 0){
			$('.ex_btn').on('click', function() {
				$(".more_content").not($(this).siblings(".more_content")).slideUp();
				$(".ex_btn").not(this).text("Read More");
				$(this).siblings('.more_content').slideToggle();
			  if ($(this).text() == "Read More") {
				$(this).text("Read Less")
			  } else {
				$(this).text("Read More")
			  }
			});
			 $('.ex_rightside').on('click', function(e) {
				e.stopPropagation(); 
			});
		}
	},
	/*------------------------------------------------------------------*/ 
	
	};
	portfolio.init();
	
	
	
	
	
	$(window).on('load', function() {
		$(".status").fadeOut(1800);
		$(".preloader").delay(1000).fadeOut("slow");
	});
		
}(jQuery));	
