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
  if (typeof str === 'string') {
      const cleaned = str.replace(/\D/g, "");
      if(cleaned === '') {
          return -1
      }else{
          let product = 1;
          cleaned.split('').forEach(itm => {
              product *= itm
          });
          console.log(product);
          return getMiddleChar(String(product));
      }
  }else{
      return -1
  }
  
  
}