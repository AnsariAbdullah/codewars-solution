export function billboard(name: string, price: number = 30): number {
  const str = name.split("");
  let finalPrice = 0;
  str.forEach((item) => {
    finalPrice += price;
  });
  return finalPrice;
}
