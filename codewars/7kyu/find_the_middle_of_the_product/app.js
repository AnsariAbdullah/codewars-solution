function getMiddleChar(str){
    let stringLength = str.length;
    let mid = stringLength / 2;
    let res = '';
    if(str.length % 2 === 0){
        res = str.slice(mid - 1, mid + 1);
    }else{
        res = str.charAt(Math.floor(mid));
    }
    return Number(res)
}

function findMiddle(str){
  if (typeof str !== 'string') return -1
  
  const cleaned = str.replace(/\D/g, "");
  
  if(cleaned === '') return -1
  
  let product = 1;
  cleaned.split('').forEach(itm => {
      product *= itm
  });
  return getMiddleChar(String(product));
}