class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (
      2 *
      (this.height * this.length +
        this.height * this.width +
        this.length * this.width)
    );
  }
}
