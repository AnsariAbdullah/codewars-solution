export function greet(name: string): string {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

// alternate solution
export function greetAlt(name: string): string {
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}
