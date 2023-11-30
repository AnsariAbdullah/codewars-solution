export function _if(bool: boolean, func1: () => void, func2: () => void) {
  if(bool){
    func1()
  }else{
    func2()
  }
}

