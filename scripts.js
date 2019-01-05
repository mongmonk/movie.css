$(document).ready(function(){
	if ( $("#player").length ) {
		setTimeout(function() { $( ".movie-loader" ).show() }, 1000);
		$(window).load(function(){
			$("a#playnow").css('visibility', 'visible');
			$( ".movie-loading" ).hide();
		});
	}
	$(".fullscreen").on('click', function() {
		screenfull.request( document.getElementById('player') );
	});
	$("a#playnow,.play").on('click', function() {
		screenfull.exit();
	});
        //loading video
        $(".player-loading").delay(9000).fadeOut();
	if ( $("#login").length ) {
		$("#login-submit").click(function() {
			$(".login-wait,.login-error").hide();							 
			$(".login-wait").fadeIn().delay( 3000 );
			$(".login-wait").fadeOut();
			setTimeout(function() { $(".login-error").fadeIn(); $("#username, #password").val(""); $("#username").focus(); }, 3500);
		});
	}	
});	
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
