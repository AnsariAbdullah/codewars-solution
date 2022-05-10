function feast(beast, dish) {
  let compBeast = beast.split(' ').join("")
  let compDish = dish.split(' ').join("")
  
  if(compBeast[0]===compDish[0] && compBeast[compBeast.length - 1] === compDish[compDish.length - 1]){
    return true;
  }else{
    return false;
  }
}