export class Ghost {
  color: string;

  constructor() {
    const colors: string[] = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}