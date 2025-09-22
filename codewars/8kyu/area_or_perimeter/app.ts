export const areaOrPerimeter = function (l: number, w: number): number {
  return l === w ? l * w : 2 * (l + w);
};
