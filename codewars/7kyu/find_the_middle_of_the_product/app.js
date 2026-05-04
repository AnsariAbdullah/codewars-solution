function extractDigits(str){
  if(typeof str !== 'string') return null
  
  const cleaned = str.replace(/\D/g, '');

return cleaned ? cleaned : null;
}

function getMiddleNumber(value){
  const str = String(value);
const mid = Math.floor(str.length / 2);
  
  return str.length % 2 === 0 ? Number(str.slice(mid-1, mid+1)) : Number(str[mid])
}

function findMiddle(str){
  const nums = extractDigits(str);
  
if(!nums) return -1
  
  let product = 1;
  nums.split('').forEach(itm => {
      product *= itm
  });
  
  return getMiddleNumber(product);
}