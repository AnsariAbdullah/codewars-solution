function cookingTime(eggs) {
  if(eggs <= 0) return 0;
  return Math.ceil(eggs/8) *5
}