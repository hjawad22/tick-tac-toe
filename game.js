class Game {
 constructor() {
    this.board = new Array(9).fill(null) //Data model
    this.player1 = new Player("first", "💖")
    this.player2 = new Player("second", "🦄") 
    this.currentPlayer = this.player1.token
}

  
nextTurn() {
if (this.currentPlayer === this.player1.token) {
    this.currentPlayer = this.player2.token
  } else {
    this.currentPlayer = this.player1.token
  }
}

makeAMove(i) {
if (this.board[i]) {
    return
}
this.board[i] = this.currentPlayer
}
}




