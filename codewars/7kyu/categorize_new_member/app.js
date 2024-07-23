function openOrSenior(data){
  return data.map(([age, handicapStatus]) => age>54 && handicapStatus > 7 ? "Senior" : "Open")
}