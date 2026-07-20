function billboard(name, price = 30){
  const str = name.split("");
  let finalPrice = 0;  
  str.forEach((item) => {
      finalPrice += price;
  })
  return finalPrice;
}