export function _if(bool: boolean, func1: () => void, func2: () => void) {
  if(bool){
    func1()
  }else{
    func2()
  }
}

// alternate solution
export function _if2(bool: boolean, func1: () => void, func2: () => void) {
  bool ? func1() : func2();
}
