function likes(names) {
  const likesThis = 'likes this'
  let likesCount = `no one ${likesThis}`
  if(names.length === 0){
    return likesCount;
  }else if(names.length === 1){
    return likesCount = `${names[0]} ${likesThis}`
  }else if (names.length === 2){
    return likesCount = `${names[0]} and ${names[1]} like this`
  }else if (names.length === 3){
    return likesCount = `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else{
    return likesCount = `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }  
}