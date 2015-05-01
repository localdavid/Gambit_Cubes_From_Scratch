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

	// Count Basin filtering w/ toggle class
		
		// Click on Count Basin button (inactive)
		$(document).ready(function() {
			$(".count_basin_button").click(function() {
				
				// Dealing with Buttons
				
					// Activate button itself
					
						// Button set to active state
						$(this).toggleClass("basin_button_active");
						
						// Console log
						console.log("Count Basin button activated");
						
					// De-activate any other active buttons
					
					    if ($(".performer_pick_button").hasClass("performer_pick_button_active") === true) {
						    $((".performer_pick_button").toggleClass("performer_pick_button_active"));
						}
						
				// Filtering Cubes
			
					// Hide non Basin pick cubes;
					$(".cube_column").children("div").not(".band_box_basin_pick").fadeToggle(200);
			});
		});
		
		// Click on Count Basin Active button
		$(document).ready(function() {
			$(".count_basin_button_active").click(function() {
				$(this).toggleClass("count_basin_button");
				console.log("Count Basin button de-activated");
			});
		});	
		

	// Performer Pick filtering w/ toggle class
		
		// Click on Performer Pick button (inactive)
		$(document).ready(function() {
			$(".performer_pick_button").click(function() {
				
				// Dealing with Buttons
				
					// Activate button itself
					
						// Button set to active state
						$(this).toggleClass("performer_pick_button_active");
						
						// Console log
						console.log("Performer Pick button activated");
						
					// De-activate any other active buttons
					
					    if ($(".count_basin_button").hasClass("basin_button_active") === true) {
						    $((".count_basin_button").removeClass("basin_button_active"));
						} else {
							
						}
						
				// Filtering Cubes
			
					// Hide non Performer Pick cubes;
					$(".cube_column").children("div").not(".band_box_performer_pick").fadeToggle(200);
			});
		});
		
		// Click on Performer Pick button
		$(document).ready(function() {
			$(".count_basin_button_active").click(function() {
				$(this).toggleClass("count_basin_button");
				console.log("Count Basin button de-activated");
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