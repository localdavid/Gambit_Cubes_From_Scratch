$(document).ready(function(){function n(){$(this).find("ul").css("visibility","visible")}function i(){$(this).find("ul").css("visibility","hidden")}$(".myMenu > li").on("mouseover",n),$(".myMenu > li").on("mouseout",i)}),$(document).ready(function(){$(".headliner_button").click(function(){$("div .band").not(".headliner").toggle()}),$(".count_basin_button").click(function(){$(this).toggleClass("count_basin_button_clicked"),$("div .band").not(".count_basin").toggle()}),$(".cover_button").click(function(){$("div .band").not(".cover").toggle()})});