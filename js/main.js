$(function(){

	//configuration

	var width = $('.slider_container').width();
	var animation_speed = 1000;
	var pause = 4000;
	var current_slide = 1;

	//cache DOM
	var $slider = $('.slider_container'); //antes ".slider"
	var $slide_container = $slider.find('.ul_slides'); // antes ".slides"
	var $slides = $slide_container.find('.slide'); //antes ".slide"

	var interval;

	function start_slider(){
		interval = setInterval(function(){
		$slide_container.animate({'margin-left':'-=' + width}, animation_speed,function() {
			current_slide++;
			if(current_slide == $slides.length){
				current_slide = 1;
				$slide_container.css('margin-left',0);
				}

			});
		}, pause);
	}

	function stop_slider(){
		clearInterval(interval);
	}



	

	$slider.on('mouseenter',stop_slider).on('mouseleave',start_slider);

	start_slider();

	//listen for mouseover

	$(window).resize(function() {
		$('.resize').text("width:" + $(window).width());
		width = $('.slider_container').width();
	});



	/* this section is for change the image in the section */
	$(".right").click(function(){
		active = detect_active();
		let next;

		if(active == 1){
			next = 0;
		}
		else{
			next = active + 1;
		}
		
		active_and_desactive(active,next);

	});

	$(".left").click(function(){
		active = detect_active();
		let next;

		if(active == 0){
			next = 1;
		}
		else{
			next = active - 1;
		}
	
		active_and_desactive(active,next);

	});

	function active_and_desactive(active,next){
		/*console.log("active: " + active + "next" + next);*/

		$(".image_anunce").eq(active).removeClass("image_active");
		$(".image_anunce").eq(active).addClass("image_hiden");
		$(".image_anunce").eq(next).removeClass("image_hiden");
		$(".image_anunce").eq(next).addClass("image_active");

		$(".image_title").eq(active).removeClass("title_active");
		$(".image_title").eq(active).addClass("title_hiden");
		$(".image_title").eq(next).removeClass("title_hiden");
		$(".image_title").eq(next).addClass("title_active");

	}


	function detect_active(){
		let $images = $(".image_anunce");
		let active;

		console.log("next right" + $images + "active is: ");
		for(i = 0; i<$images.length;i++){
			if($images.eq(i).hasClass("image_active")){
				active = i;
			}
			
		}
		return active;

	}


});