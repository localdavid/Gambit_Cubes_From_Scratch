/*jslint browser: true*/


// Hide filters on page load

$(document).ready(function() {
	$('.filters').hide();
});



// Weekend select drop down menu (from: http://www.webchief.co.uk/blog/simple-jquery-dropdown-menu/)



$(document).ready(function() {
	
	// Define the open and close submenu functions
/*
			function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		}
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		}
*/
	
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
	
	// Put new filters here
	
		// Starting w/ No filters active
		
			// Filter for Basin picks -- this works
			
				// Press Basin filter
				$(".count_basin_button").click(function() {
					
					// Basin button now in active state by changing class of .count_basin_button
					$(this).toggleClass('count_basin_button_clicked');
					
					// Hide divs that aren't Basin Picks
						// via: Selects only divs that are direct descendents of .cube_column and that aren't .band_box_basin_pick (Count Basins picks)
						$(".cube_column").children("div").not(".band_box_basin_pick").fadeToggle(200);
				});
	
	
			// Filter for Performers picks -- in progress
			
				// Press Performer filter
				$(".performer_pick_button").click(function() {
					

					// Basin button now in active state by changing class of .count_basin_button
					$(this).toggleClass('performer_pick_button_clicked');

					

					// Hide divs that aren't Performer Picks
						// via: Selects only divs that are direct descendents of .cube_column and that aren't .band_box_basin_pick (Count Basins picks)
						$(".cube_column").children("div").not(".band_box_performer_pick").fadeToggle(200);					
				});
				
				
			
	
	

});


// Sticky navigation

	// 	Store the nav section as a variable, since we're calling it a lot
	var nav = $("section.navigation");
	
	// 	 On scroll, target browser window and pass function
	$(window).scroll(function() {
		// 	this = window; scrollTop gets current vertical position of scroll bar; # is how many pixels are scrolled	
		if ( $(this).scrollTop() > 180 ) {
			// 	add scrolled class		
			nav.addClass("navigation_scrolled");
		}
		else {
			nav.removeClass("navigation_scrolled");
		}
	});