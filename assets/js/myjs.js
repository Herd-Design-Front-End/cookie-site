$(window).on('load', function () {
	$(".loader").delay(300).fadeOut("slow");
});

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
		autoplay:true,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
		  ]				
	});	
	$(".wrp-listtestimoni").slick({
		dots: false,
		arrows:true,
		prevArrow: '<div class="slick-prev"><img src="assets/images/arrowtestimoni-left.svg" alt=""/></div>',
		nextArrow: '<div class="slick-next"><img src="assets/images/arrowtestimoni-right.svg" alt=""/></div>',
		slidesToShow: 1,
		slidesToScroll: 1,		
		autoplay:false,
		responsive: [
			{
				breakpoint: 991,
				arrows:false,
				
			},
		  ]				

	});	
$('.customleft').click(function(){
	$('.wrp-listtestimoni').slick('slickPrev');
})

$('.customright').click(function(){
	$('.wrp-listtestimoni').slick('slickNext');
})
	

	$(".navmenu").click(function(){
		$(this).toggleClass("active");
		$(".mainmenu").toggleClass("active");
	});	
});



