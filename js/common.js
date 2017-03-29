$(function() {	
	!function($){
	$(document).on('click', 'a[href^="#"]', function () {
	$('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
	return false;
	});
	}(jQuery);

	var glide = $('.slider').glide().data('api_glide');
    
            $(window).on('keyup', function (key) {
                if (key.keyCode === 13) {
                    glide.jump(3, console.log('Wooo!'));
                };
            });
    
            $('.slider-arrow').on('click', function() {
                console.log(glide.current());
            });
})