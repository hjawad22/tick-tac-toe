class Game {
 constructor() {
    this.board= new Array(9).fill(null) 
    this.player1 = new Player()
    this.player2 = new Player()
    console.log(this.player1.token)
    
}
 
nextTurn() {
this.player1.token = "🦄"
console.log(this.player1.token)
 }

 makeMove() {

 }

 resetBoard() {

 }

 gameDraw() {


 }
  
}