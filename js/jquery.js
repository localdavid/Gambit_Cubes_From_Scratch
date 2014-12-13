$(document).ready(function() {
	$(".button").click(function() {
		//Filter to show only headliner
		// Goes through all divs with class=band. Those that don't have class=headliner are removed.
		$("div .band").not(".headliner").remove();
	});
});

