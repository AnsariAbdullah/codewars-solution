export class Ship {
  draft: number;
  crew: number;
  crewWeight: number;

  constructor(draft: number, crew: number) {
    this.draft = draft;
    this.crew = crew;
    this.crewWeight = crew * 1.5;
  }
  
  isWorthIt(): boolean {
    return this.draft - this.crewWeight > 20;
  }
}