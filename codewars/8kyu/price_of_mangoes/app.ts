export function mango(quantity: number, price: number): number {
  let normalQ: number = quantity - Math.floor(quantity/3);
  return normalQ * price;
}