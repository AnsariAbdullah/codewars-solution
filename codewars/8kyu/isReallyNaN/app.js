const isReallyNaN = (val) => {
  return Number.isNaN(val)
};

// alternate solution
const isReallyNaNAlt = (val) => {
  return typeof val == 'number' && isNaN(val)
};

// alternate solution 2
const isReallyNaNAlt2 = val => val != val
