/*=========================================

Template Name: Etu
Author: rayetun
Version: 1.0
Design and Developed by: Rayhan Uddin

NOTE: This is the custom js file for the template

=========================================*/



(function ($) {


	"use strict";

	/*=================== preloader ===================*/
	$(window).on('load', function () {
		$(".preloading").fadeOut("slow");
	});

	/*=================== sticky menu ===================*/
	$(window).on('scroll', function () {
		if (jQuery(this).scrollTop() > 50) {
			$('header').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
		}
	});

	/*=================== active menu ===================*/
	$('.main-menu > li a').on("click", function () {
		$('.main-menu').find('li.active').removeClass('active');
		$(this).parents("li").addClass('active');
	});

	// ======================= jQuery for page scrolling feature  ======================= // 
	$('a.page-scroll').on("click", function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	/* Smooth scroll Js*/
	$('.home-arrow-down a').on('click', function (event) {
		$('.home-arrow-down a').parent().removeClass('active');
		var $anchor = $($(this).attr('href')).offset().top - 60;
		$(this).parent().addClass('active');
		$('body, html').animate({
			scrollTop: $anchor
		}, 800);
		event.preventDefault();
		return false;
	});

	/*=================== WELCOME SLIDE CAROUSEL JS  ===================*/
	$(".welcome-slide").owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		dots: true,
		autoplay: true,
		smartSpeed: 800,
		autoplayTimeout: 10000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			}
		}
	})


	/* WELCOME SLIDE ANIMATION*/
	$(".welcome-slide").on("translate.owl.carousel", function () {
		$(".hero-area-inner p").removeClass("animated fadeIn").css("opacity", "0");
		$(".hero-area-inner h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".single-slide-item .bordered-btn").removeClass("animated fadeInDown").css("opacity", "0");


	});

	$(".welcome-slide").on("translated.owl.carousel", function () {
		$(".hero-area-inner p").addClass("animated fadeIn").css("opacity", "0");
		$(".hero-area-inner h1").addClass("animated fadeInUp").css("opacity", "0");
		$(".single-slide-item .bordered-btn").addClass("animated fadeInDown").css("opacity", "0");

	})


	// ======================= Featured  ======================= // 

	if ($('#featured-carousel').length > 0) {
		$("#featured-carousel").owlCarousel({

			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 70000,
			slideSpeed: 2000,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: false,
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				480: {
					items: 2,
					nav: true
				},
				600: {
					items: 3,
					nav: true
				},
				1000: {
					items: 5,
					nav: true,
					loop: true,
					margin: 30
				}
			}

		});
	}



	/*======================= Go to top function  =======================*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').on("click", function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	new WOW().init();




})(jQuery);
