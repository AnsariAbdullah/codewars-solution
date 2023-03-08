function factorialize(num) {
  let facto = 1;
  for(let i=num; i>0; i--){
    facto *= i  
  }
  return facto
}