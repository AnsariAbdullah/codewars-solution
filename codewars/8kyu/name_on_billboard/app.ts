export function billboard(name: string, price: number = 30): number{
  let totalPrice = 0;
  for(let i=0; i<name.length; i++ ){
    totalPrice+=price;
  }
  return totalPrice;
}