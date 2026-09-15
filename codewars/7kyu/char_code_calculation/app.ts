export function sum(arg: string): number {
 return arg.split('').reduce((accumulator: number, current: string): number => {
  return accumulator + Number(current);
 }, 0);
}

export const calc = (str: string): number => {
 const total1: string = str.split('').map((char: string) => char.charCodeAt(0)).join(''); 
 const total2: string = total1.replaceAll("7", "1");
  
 return sum(total1) - sum(total2);
};
