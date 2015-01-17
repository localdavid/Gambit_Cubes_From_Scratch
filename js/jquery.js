/*jslint browser: true*/
/*global $, jQuery, alert*/


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
	$('.date_select_div ul li').click(function() {
	    var i = $(this).index();
	    $('.full_cube').hide();
	    $('#day' + (i+1)).show();
	});
});









// Navigation buttons

$(document).ready(function() {
	$(".headliner_button").click(function() {
		//Filter to show only headliner
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$("div .band").not(".headliner").toggle();
	});
	
	$(".count_basin_button").click(function() {
		//Filter to show only Basin's picks
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$(this).toggleClass('count_basin_button_clicked');
		$("div .band").not("").toggle();
	});
		
	$(".cover_button").click(function() {
		//Filter to show only cover story subjects
		// Goes through all divs with class=band. Those that don't have class=headliner are toggled on and off
		$("div .band").not(".cover").toggle();
	});
});

