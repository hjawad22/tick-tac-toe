class Game {
 constructor() {
   this.board = new Array(9).fill(null) 
   this.player1 = new Player("first", "💖")
   this.player2 = new Player("second", "🦄") 
   this.currentPlayer = this.player1.token
   this.winningPlayer = this.player1.wins
 }
  
 nextTurn() {
 if (this.currentPlayer === this.player1.token) {
    this.currentPlayer = this.player2.token
  } else {
    this.currentPlayer = this.player1.token
  }
 }

 makeAMove(i) {
 if (this.endGame() || this.gameDraw()) {
    this.resetGame()
    return 
  }

  if (this.board[i]) {
    return
  }

 this.board[i] = this.currentPlayer
 var winningCombo = this.checkForWin()

  if (!winningCombo) {
    this.nextTurn()
  } 
 }

 checkForWin() {
   var winningPositions = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
 ]
     
  for (var i = 0; i < winningPositions.length; i++) {
  var [a, b, c] = winningPositions[i]
   if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
      return winningPositions[i]        
    }  
  }
     return null
 }

 endGame() {
    var winningCombo = this.checkForWin()
    if (winningCombo) {
      return true 
    } else {
      return false
    }

  }

 resetGame() {
   this.board = new Array(9).fill(null) 
   this.currentPlayer = this.player1.token     
  }

  gameDraw() { 
  if(!this.board.includes(null)) {
    return true
   }    
  }
}















