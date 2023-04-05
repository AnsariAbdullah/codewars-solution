function titleCase(str) {
  return str
  .toLowerCase()
  .split(' ')
  .map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
  .join(' ')
}

titleCase("I'm a little tea pot");