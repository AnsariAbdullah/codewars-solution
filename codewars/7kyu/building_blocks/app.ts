export class Block {
  private width: number;
  private length: number;
  private height: number;

  constructor(data: [number, number, number]) {
    [this.width, this.length, this.height] = data;
  }

  getWidth(): number {
    return this.width;
  }

  getLength(): number {
    return this.length;
  }

  getHeight(): number {
    return this.height;
  }

  getVolume(): number {
    return this.width * this.length * this.height;
  }

  getSurfaceArea(): number {
    return (
      2 *
      (this.height * this.length +
        this.height * this.width +
        this.length * this.width)
    );
  }
}
