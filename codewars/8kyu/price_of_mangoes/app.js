function mango(quantity, price){
  let normalQ = quantity - Math.floor(quantity/3)
  return normalQ*price;
}
