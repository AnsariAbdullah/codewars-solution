export function calculateAge(birthYear: number, targetYear: number): string {  
  let diff = targetYear - birthYear;
  if(diff === 0) return "You were born this very year!"
  
  if(diff > 0){
    return `You are ${diff} year${diff === 1 ? "" : "s"} old.`
  }
  
  const yearsUntilBorn = Math.abs(diff);
  return `You will be born in ${yearsUntilBorn} year${yearsUntilBorn === 1 ? "" : "s"}.`
}