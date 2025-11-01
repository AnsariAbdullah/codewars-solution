type Point = {
	x: number,
	y: number
}

export function distanceBetweenPoints(a: Point, b: Point): number {
  return Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2)
}