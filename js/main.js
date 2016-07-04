$(document).ready(function(){
	var offsetTop = $('.logo').offset().top;

	$(window).scroll(function(){

		if ($(this).scrollTop() > offsetTop - 15) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollup').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
});	

