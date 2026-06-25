function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let maxDiff = 0;

  for (let str1 of a1) {
    for (let str2 of a2) {
      let diff = Math.abs(str1.length - str2.length);
      if (diff > maxDiff) maxDiff = diff;
    }
  }

  return maxDiff;
}
