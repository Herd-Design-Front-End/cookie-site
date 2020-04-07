$(document).ready(function () {
    new WOW().init();
	$(function() {
		$('.your-class').on('init', function(event, slick) {
			$(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
			$('.current').text(slick.currentSlide + 1);
			$('.total').text(slick.slideCount);
		})
		.slick({
			dots: true,
			arrows:true,
			prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Sebelumnnya</button>',
			nextArrow: '<button class="slick-next" aria-label="Next" type="button">Sesudahnya</button>',			
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$('.current').text(nextSlide + 1);
		});
	});		    
});

