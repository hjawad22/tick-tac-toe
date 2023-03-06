// query Selectors
var boxes = document.querySelectorAll(".box")
var playerTurn = document.getElementById("playerTurn")
var firstPlayerWins = document.querySelector(".heart-wins")
var secondPlayerWins = document.querySelector(".unicorn-wins")


// golobal variables
var game = new Game()
console.log(game.board)


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
updateWins()

}

function updateboard() {
    for (let i = 0; i < game.board.length; i++) {
     var boxes = document.querySelector(`.box[data-index='${i}']`)
     boxes.innerText = game.board[i]
     playerTurn.innerText = `It's ${game.currentPlayer} turn`
    
   if (game.endGame()) {
    playerTurn.innerText = `${game.currentPlayer} Won!` 
    } else if (game.board[i]) {
        playerTurn.innerText = `it's a draw!`   
       }
    } 
       
    } 


   function updateWins() {
        var winningCombo = game.checkForWin()
        if (winningCombo && game.currentPlayer === "💖") {
            game.player1.increaseWins()
            firstPlayerWins.innerText = `${game.player1.wins} Wins` 
        } else if (winningCombo && game.currentPlayer === "🦄")
           game.player2.increaseWins()
           secondPlayerWins.innerText = `${game.player2.wins} Wins`
    }





   

    















 


