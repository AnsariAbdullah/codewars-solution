function esrever(str) {
  const punctuation = str.slice(-1);
  const sentence = str.slice(0, -1);
  return (
    sentence
      .split(" ")
      .reverse()
      .map((word) => word.split("").reverse().join(""))
      .join(" ") + punctuation
  );
}


// alternate solution
function esrever(str) {
    return str.slice(0, -1).split('').reverse().join('') + str.slice(-1);
}