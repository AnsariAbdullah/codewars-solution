function isLochNessMonster(s) {
  return (
    s.includes("3.50") || s.includes("three fifty") || s.includes("tree fiddy")
  );
}


// alternate solution
function isLochNessMonster(s) {
  return /tree fiddy|3\.50|three fifty/i.test(s)
}