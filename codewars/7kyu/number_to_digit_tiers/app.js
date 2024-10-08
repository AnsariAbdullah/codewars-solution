function createArrayOfTiers(num) {
  let result = []
  const numStr = num.toString()
  for (let i = 1; i <= numStr.length; i++) {
      result.push(numStr.slice(0, i))
  }
  return result;
}