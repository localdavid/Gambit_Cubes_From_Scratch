$(document).ready(function() {
	$(".button").click(function() {
		//Filter to show only headliner
		$("div .band").not(".headliner").css("background-color", "black");
	});
});

