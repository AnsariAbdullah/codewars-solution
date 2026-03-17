export function circleArea(radius: number): number {
  if(radius <=0 ) throw new Error('Incorrect value');
return Math.PI * radius * radius;
}