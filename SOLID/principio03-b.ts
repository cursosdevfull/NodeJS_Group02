class Figure {
  width;
  height;

  constructor() {
    this.width = 0;
    this.heigth = 0;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Figure {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.width = length;
    this.height = length;
  }
}

describe('testing calculate area', () => {
  it('calculate area rectangle', () => {
    const rectangle = new Rectangle(5, 4);

    expect(rectangle.getArea()).toBe(20);
  });

  it('calculate area square', () => {
    const square = new Square(5);

    expect(square.getArea()).toBe(25);
  });
});
