function squareDigits(num){
  let numb = num.toString()
    let res = ''
    for(let i=0; i < numb.length; i++){
        res += numb[i] * numb[i]
    }
    return parseInt(res)
}

