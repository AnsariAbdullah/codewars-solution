function part(x){
  const arr=['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
  let num = x.filter(v=>arr.includes(v)).length
  if(arr.some(v=>x.includes(v))){
    return `Mine\'s a Pint${'!'.repeat(num)}`
  }else{
    return 'Lynn, I\'ve pierced my foot on a spike!!'
  }
}