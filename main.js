
// query Selectors
var boxes = document.querySelectorAll(".box")
var playerTurn = document.getElementById("playerTurn")


// variable
var currentPlayer = "💖"


// event listeners
boxes.forEach(box => {
    box.addEventListener("click", togglePlayer)
});

// functions

function togglePlayer(event) {
var boxArray = Array.from(boxes)
var index = boxArray.indexOf(event.target)
playerTurn.innerHTML = currentPlayer

if (currentPlayer === "💖") {
 currentPlayer = "🦄" 
} else {
    currentPlayer = "💖"
}
 
}




 


