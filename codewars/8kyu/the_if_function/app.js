function _if(bool, func1, func2) {
  if(bool){
    func1()
  }else{
    func2()
  }
}

// alternate solution
function _if(bool, func1, func2) {
  bool ? func1() : func2()
}