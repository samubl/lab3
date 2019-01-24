'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(".jumbotron p").toggleClass("active");
		$("#testjs").text("Experience Chan! It's not a lot of questions." + 
		" Too many questions is the Chan disease. " + 
		" The best way is just to observe the noise of the world." + 
		" The answer to your questions? Ask your own heart.");
	});
	$("a.thumbnail").click(projectClick);
}

// Add any additional listeners here
// example: $("#div-id").click(functionToCall);

function projectClick(e) {
	// prevent the page from reloading    
	console.log("Project Click");  
	e.preventDefault();
	// In an event handler, $(this) refers to      
	// the object that triggered the event      
	$(this).css("background-color", "#E317FF");
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	 } else {
		description.fadeOut();
	 }
}