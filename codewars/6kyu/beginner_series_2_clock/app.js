function past(h, m, s){
  let hourMl = h*3600000;
  let minMl = m*60000;
  let secMl = s*1000;
  return hourMl+minMl+secMl
}