// Hide filters on page load

$(document).ready(function() {
	$('.filters').hide();
});



// Weekend select drop down menu

$(document).ready(function() {
	// when the mouse is moved over a li in myMenu, the function openSubMenu is called
		$('.myMenu > li').on('mouseover', openSubMenu);
	//  We need to bind another event listener to detect when the mouse rolls out and call a function that gets rid of the dropdown.
		$('.myMenu > li').on('mouseout', closeSubMenu);
	
	// When the mouse rolls over the list item, the function looks for an unordered list within it. If one is found, it sets the style property visibility to visible.
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		}
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		}
});



// Make so when you click on a list item, it toggles a div

$(document).ready(function() {
	$('.date_select_div ul li ul li').click(function() {
	    var i = $(this).index();
	    $('.full_cube').hide();
	    $('#day' + (i+1)).show();
	    
	    // Shows filters when a day is clicked
	    $('.filters').show();
	});
});



// Filter buttons

$(document).ready(function() {
	
	//Filter to show only Count Basin's picks
	$(".count_basin_button").click(function() {
		// Changes class of .count_basin_button
		$(this).toggleClass('count_basin_button_clicked');
		// Selects only divs that are direct descendents of .cube_column and that aren't .band_box_basin_pick (Count Basins picks)	
		$(".cube_column").children("div").not(".band_box_basin_pick").fadeToggle(200);
	});
	
/*
	//Filter to show only cover story subjects	
	$(".cover_button").click(function() {
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$("div .band").not(".cover").toggle();
	});
*/
	
	//Filter to show only Performer picks
	$(".performer_pick_button").click(function() {
		// Changes class of .performer_pick_button
		$(this).toggleClass('performer_pick_button_clicked');
		// Selects only divs that are direct descendents of .cube_column and that aren't .performer_pick_button (Performer picks)	
		$(".cube_column").children("div").not(".performer_pick_button").fadeToggle(200);
	});

});



