$(function(){

	$(".navMenu a").mouseenter(function(){
		let $item = $(this).position().left + ($(this).width())/3 + 10;
		$('.dot').css('transform','translateX('+$item+'px)');
	});

});