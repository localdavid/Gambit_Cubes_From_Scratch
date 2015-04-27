function filterProcess(name of button clicked on) {
	if a filter is activated {
		then de-activate it (toggle class), after activate new one
	else {
		activate filter based on name of button
	};
	
	if a button is activated {
		de-activate it, then activate new button
	else {
		activate new button	
	};
}


// Filter buttons

$(document).ready(function() {
	
	
	// New filtering code
	
		// Filter for Basin's Picks
		
			// For Inactive Basin button (one that isn't already clicked)
				// Press Basin button
				$(".count_basin_button").click(function() {
					console.log("Basin button clicked");
					
					// Activate Basin button
					// Basin button now in active state by changing class of .count_basin_button
					$(this).toggleClass('count_basin_button_clicked');
					
					// Set other button to inactive
					$(".performer_pick_button_clicked").removeClass('performer_pick_button');
					console.log("Other buttons set to inactive");
					
					//Show all divs before hiding the right ones
					$(".cube_column").children("div").show();
					console.log("Show all divs before hiding the right ones");				
					
					// Hide divs that aren't Basin Picks
						// via: Selects only divs that are direct descendents of .cube_column and that aren't .band_box_basin_pick (Count Basins picks)
						$(".cube_column").children("div").not(".band_box_basin_pick").fadeToggle(200);
				});
});