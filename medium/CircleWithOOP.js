class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

class Circle {
  // put your code

  // constructor(height, width) {
  //   this.name = 'Polygon';
  //   this.height = height;
  //   this.width = width;
  // }
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;

    this.sideC = sideC;

    sideC = this.sideA + this.sideB;
  }

  // 2 * Math.PI * radius;

  getArea() {
    return this.sideA * this.sideB;
  }
  // getArea(){return this.sideA*this.sideB}
  getPerimeter() {
    return 2 * Math.PI * this.sideC;
  }
}

// unquote and use run to test these cases:

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
