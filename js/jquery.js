$(document).ready(function() {
	$(".headliner_button").click(function() {
		//Filter to show only headliner
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$("div .band").not(".headliner").toggle();
	});
	
	$(".alex_button").click(function() {
		//Filter to show only alex's picks
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$("div .band").not(".alex").toggle();
	});
		
	$(".cover_button").click(function() {
		//Filter to show only cover story subjects
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$("div .band").not(".cover").toggle();
	});
});

