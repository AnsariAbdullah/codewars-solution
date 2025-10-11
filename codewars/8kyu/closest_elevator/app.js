function elevator(left, right, call){
  const distLeft = Math.abs(left - call);
  const distRight = Math.abs(right - call);
  return distLeft < distRight ? 'left' : 'right';
}