var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardTwo === cardFour) {
//	alert("You found a match")
//}
//else {
//	alert("Sorry, try again")
//}



var board = document.getElementById("game-board");

for (var i = 0; i < board.length; i +=4) {
	board.createElement("div");
	board.className("card");
}
document.appendChild("board");

//6 ) Append each newly created card to the div that has the 
//class board


var createBoard = function() {
	for (var i = 0; i < createBoard.length; i +=4) {
		createBoard.appendChild("game-board")

	}
	createboard();
 
}