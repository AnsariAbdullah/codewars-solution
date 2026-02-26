export function onlyOne(...allParams: boolean[]): boolean {
  let trueCount = 0;
  allParams.forEach((item) => {
    if (item === true) trueCount++;
  });
  return trueCount === 1;
}
