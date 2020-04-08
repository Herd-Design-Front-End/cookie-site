$(document).ready(function () {
    new WOW().init();
	$('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false,
		verticalCentered: true,
	});
	$(".product-slider").slick({
		dots: false,
		arrows:true,
		prevArrow: '<div class="slick-prev"><img src="assets/images/arrow-right.svg" alt=""/></div>',
		nextArrow: '<div class="slick-next"><img src="assets/images/arrow-left.svg" alt=""/></div>',
		slidesToShow: 3,
		slidesToScroll: 1,
					
	});	
});

