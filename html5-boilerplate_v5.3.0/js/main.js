$(function(){
	$(window).scroll(function(event){
		var target = $(this).scrollTop();

		if (target >= 250) {
			$('#firstLipsum h1').addClass('slide');
		} if (target >= 896) {
			$('.fixed').addClass('sticky');
		} if (target <896) {
			$('.fixed').removeClass('sticky');
		} if (target >= 410) {
			$('#secondImage img').addClass('shown');
		} if (target >= 1500) {
			$('#info h1').addClass('shown');
		} if (target >= 1550) {
			$('#info p').addClass('shown');
		} if (target >= 2200) {
			$('#projects').addClass('shown');
		}
	});
});

$(function(){
	$('#banner').addClass('shown');
});

$(function(){
	$('#menu').on('click', function(){
		$('nav').addClass('shown');
		$('#mainContent').addClass('moved');
	});
	$('.closeButton').on('click', function(){
		$('nav').removeClass('shown');
		$('#mainContent').removeClass('moved');
	});
});