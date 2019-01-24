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
		$('.jumbotron h1').toggleClass("active");
        $(".jumbotron p").toggleClass("active");
        $("#testjs").toggleClass("movement");
        if ($("#testjs").text() == "Click Me!") {
            $("#testjs").text("Click Me Again!");
        } else {
            $("#testjs").text("Click Me!");
        }
	});
	$("a.thumbnail").click(projectClick);
	$("#project1").mouseenter(teaHover);
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

function teaHover(e) {
	// prevent the page from reloading    
	console.log("Tea Hover");  
	//e.preventDefault();
	// In an event handler, $(this) refers to      
	// the object that triggered the event      
	$("#project1").toggleClass("hover");
}