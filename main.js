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


var createBoard = function(){
	var oldBoard = document.getElementById("game-board");
  
	for(var i = 0; i < 4; i++) {
      
      var newCards = document.createElement('div');
      newCards.className = "card";
      oldBoard.appendChild(newCards);
	}
};
createBoard();
