export function wallpaper(l: number, w: number, h: number): string {
  const numbers:string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
  
  if(l ===0||w === 0||h===0) return "zero";
let wallArea = 2 * h * (l+w);
  let extraRoll = wallArea * 1.15;
  let numberOfRolls = extraRoll / 5.2;
  return numbers[Math.ceil(numberOfRolls)]
}