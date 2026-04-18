class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
guess(n) {
    if(this.lives <= 0) throw new Error("Limit exceeded");
    if(this.number === n){
       return true
    }else{
      this.lives = this.lives - 1; 
      return false;
    };
  }
}