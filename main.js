
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function createBoard() {
      
  var gameBoard = document.getElementById("game-board");  
  
  for(var i = 0; i < cards.length; i++) {

      var cardElement = document.createElement("div");
      cardElement.className = "card";
      gameBoard.appendChild(cardElement);
     
      cardElement.setAttribute("data-card", cards[i]); 
    
      cardElement.addEventListener("click", isTwoCards); {

    if (cardElement.getAttribute("data-card") === "queen"){
cardElement.innerHTML = '<img src="http://previews.123rf.com/images/chrisdorney/chrisdorney1109/chrisdorney110900018/10520647-The-Queen-of-Hearts-Playing-Card--Stock-Photo.jpg" alt="Queen of Hearts"/>';
}
    else if (cardElement.getAttribute("data-card")  === "king") {
cardElement.innerHTML = '<img src="http://static.giantbomb.com/uploads/scale_super/0/1899/2248129-kspreview.png" alt="King of Spades"/>';
}    
}
} 
} 
 function isTwoCards() {
  cardsInPlay.push(this.getAttribute("data-card"));
  
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }    
 } 
function isMatch() {

  if (cards[0] === cards[1]) {
    alert("You found a match!");
  }
    else if (cards[2] === cards[3]) {
        alert("You found a match!");
    }
  else {
    alert("Try again"); 
}
document.getElementById("game-board").innerHTML = "";
}  
createBoard();


