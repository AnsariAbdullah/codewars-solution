export function datingRange(age: number): string{
  let min: number;
  let max: number;
  if(age <= 14){
    min = age - 0.10 * age;
    max = age + 0.10 * age; 
  }else{
    min = (age/2) + 7;
    max = (age-7) * 2; 
  }
  
  return `${Math.floor(min)}-${Math.floor(max)}`
}