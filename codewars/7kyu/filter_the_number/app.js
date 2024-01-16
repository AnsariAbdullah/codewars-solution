var filterString = function(value) {
  let num = ''
  for(let i = 0; i<value.length; i++){
    if(/\d+/g.test(value[i])){
      num += value[i]
    }
  }
  return Number(num)
}