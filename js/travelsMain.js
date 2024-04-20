/*global PLAYER_TO_GO_FIRST*/
/*global GAMEPROGRESSTEXT_PLAYER1*/
/*global GAMEPROGRESSTEXT_PLAYER2*/



// Country clicked
function countryClicked(country) {
    
    var tripImage
    var imageElementId 
    var imageName

    for (let i = 0; i < 6; i++) {

        tileElementId = "tile-" + i.toString()
        imageElementId = "tripImage-" + i.toString()       
        imageName = "images//" + country + i.toString() + ".jpg"
        

        tripImage = document.getElementById(imageElementId);
        tripImage.setAttribute("src", imageName);
        tile = document.getElementById(tileElementId);   
        tile.style.visibility = "visible";
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

