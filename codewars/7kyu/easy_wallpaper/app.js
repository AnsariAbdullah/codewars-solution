function wallpaper(l, w, h) {
  if(l ===0 || w === 0 || h===0)  return "zero";
  let wallArea = 2 * h * (l+w);
  let extraRoll = wallArea * 1.15;
  let numberOfRolls = extraRoll / 5.2;
  return numbers[Math.ceil(numberOfRolls)]
}