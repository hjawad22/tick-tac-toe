// query Selectors
var boxes = document.querySelectorAll(".box")
console.log(boxes)
var playerTurn = document.getElementById("playerTurn")

// golobal variables
var game = new Game()



// // event listeners
boxes.forEach(box => {
    box.addEventListener("click", () => {
    onClick(box.dataset.index)
    })
})

 // functions

function onClick(i) {
game.makeAMove(i)
updateboard()
game.nextTurn()

}

function updateboard() {
    for (let i = 0; i < game.board.length; i++) {
     var boxes = document.querySelector(`.box[data-index='${i}']`)
     boxes.innerText = game.board[i]
  }
}









 


