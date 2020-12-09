// navbar scroll
$(document).ready(function (){
	$(window).scroll(function(){
		if(this.scrollY > 30){
			$('.navbar').addClass("sticky");
		}else {
			$('.navbar').removeClass("sticky");
			
		}
	});
	// Nav toggle code 
	$(".menu-btn").click(function(){
		$(".navbar .menu").toggleClass("active"); 
		$(" .menu-btn i").toggleClass("active"); 
	});
	// owl script code
	$(".carousel").owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoPlayHoverPause: true,
		responsive: {
			0: {
				items : 1,
				nav: false
			},
			600: {
				items : 2,
				nav: false
			},
			1000: {
				items : 3,
				nav: false
			}
		}
	});

});