function validateUsr(username) {
  const usernameRegex = /^[a-z0-9_]{4,16}$/;
  res =  usernameRegex.test(username) 
  return res
}