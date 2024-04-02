/*global PLAYER_TO_GO_FIRST*/
/*global GAMEPROGRESSTEXT_PLAYER1*/
/*global GAMEPROGRESSTEXT_PLAYER2*/



// Country clicked
function countryClicked(country) {

    if (country=="US") {
        var tripImage1 = document.getElementById("tripImage-1");
        tripImage1.setAttribute("src", "images/arrow.png");
    }
    if (country=="Iceland") {
        var tripImage1 = document.getElementById("tripImage-1");
        tripImage1.setAttribute("src", "images/Iceland1.jpg");
    }
    
    
}


// Handle an arrow being clicked 
function handleArrowClicked(country) {

	setPosition();
	updateWhoseTurnIsIt();
	
	hideArrow();   
	    
}



// Functions getting or changing the various UI elements
//======================================================

// Set the position on the board 
function setPosition() {

    var position = document.getElementById("position");
    position.setAttribute("class", "player-1");
}


// Hide the arrow of the given column 
function hideArrow() {

    var arrow = document.getElementById("arrow");
  //  arrow.setAttribute("hidden", "none");
	arrow.style.visibility = "hidden";

}

// Update the game progress text showing whose turn it is 
function updateWhoseTurnIsIt() {

    var gameProgressText = document.getElementById("gameProgressText");
		gameProgressText.innerText = "Someone just clicked an arrow!!!!!";
										   
}

