function splitAndMerge(string, separator) {
  let word = string;
  return word.split(" ").map(item => item.split('').join(separator)).join(" ")
}