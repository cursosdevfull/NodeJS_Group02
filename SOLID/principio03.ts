class Rectangle {
  width;
  height;

  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

const rectangle = new Square();
rectangle.setWidth(5);
rectangle.setHeight(4);

console.log(rectangle.getArea());

describe('testing calculate area', () => {
  it('calculate area', () => {
    const rectangle = new Square();
    rectangle.setWidth(5);
    rectangle.setHeight(4);

    expect(rectangle.getArea()).toBe(20);
  });
});
