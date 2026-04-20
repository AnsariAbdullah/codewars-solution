export class Guesser {
  private number: number;
  private lives: number;

constructor(number: number, lives: number) {
  this.number = number;
  this.lives = lives;
}

  guess(n: number): boolean {
    if (this.lives <= 0) {
      throw new Error("Limit exceeded");
    }

    if (this.number === n) {
      return true;
    } else {
      this.lives = this.lives - 1;
      return false;
    }
  }
}