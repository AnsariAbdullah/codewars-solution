function onlyOne(...allParams) {
  let trueCount = 0;
  allParams.forEach((item) => {
    if (item === true) trueCount++;
  });
  return trueCount === 1;
}

// alternate solution
function onlyOne(...args) {
  return args.filter(Boolean).length === 1;
}
