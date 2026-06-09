function convert(decimalDegrees) {
  const totalSeconds = Math.round(decimalDegrees * 3600);

  const degrees = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const result = [degrees, minutes, seconds];

 while (result.length > 1 && result[result.length - 1] === 0) {
    result.pop();
 }

  return result;
  
}