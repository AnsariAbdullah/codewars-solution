function twoSort(s) {
  const sortedString = s.sort();
  return sortedString[0].split('').join('***');
}