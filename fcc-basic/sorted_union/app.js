function uniteUnique(...arr) {
  const combArray = [].concat(...arr)

  const uniqueArr = combArray.filter((item, index) => {
    return combArray.indexOf(item) === index
  })
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);