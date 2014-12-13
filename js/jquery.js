$(document).ready(function() {
	$(".button").click(function() {
		//Filter to show only headliner
		$("div").filter(".headliner").css("background-color", "black");
	});
});

$( "li" ).filter( ".first" ).css( "background-color", "red" );

$( "div" ).filter( ".last" ).css( "background-color", "green" );
