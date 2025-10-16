function spEng(sentence) {
  return sentence.toLowerCase().includes("english");
}

// alternate solution
function spEng(sentence) {
  return /english/i.test(sentence);
}
