$(function () {
   $(window).scroll(function(){
   		var scrollVal = $(this).scrollTop();
   		console.log(scrollVal);
		// business card view
   		if(scrollVal > 500){
   			$('.about-me .slide-card img').addClass('animated fadeInRight');
	   		$('.about-me .slide-card img').css({'display':'block'});
   		}
   		// work experience view
   		if(scrollVal > 2260){
   			$('.work-section').addClass('animated zoomIn');
	   		$('.work-section').css({'display':'block'});
   		}

   		if(scrollVal > 1600){
   			$('.eduarea').addClass('animated pulse');
   		}

   });

});
