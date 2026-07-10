export const mxdiflg = (a1: string[], a2: string[]): number => {
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
};

// alternate solution
export const mxdiflgAlt = (a1: string[], a2: string[]): number => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const length1 = a1.map((s) => s.length);
  const length2 = a2.map((s) => s.length);


 return Math.max(
    Math.abs(Math.max(...length1) - Math.min(...length2)),
    Math.abs(Math.max(...length2) - Math.min(...length1)),
  )
};
