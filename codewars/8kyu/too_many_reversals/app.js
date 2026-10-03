function whowon(s) {
  let newArrs = s.split("hit a reversal to");
  return newArrs[newArrs.length - 2].trim();
}
