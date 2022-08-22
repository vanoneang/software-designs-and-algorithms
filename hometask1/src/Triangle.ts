import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  point1: Point;
  point2: Point;
  point3: Point;

  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    super([point1, point2, point3]);

    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
  }

  toString(): string {
    return `Triangle[v1=${this.point1.toString()},v2=${this.point2.toString()},v3=${this.point3.toString()}]`;
  }

  getType(): string {
    if (this.isEquilateral()) {
      return 'equilateral triangle';
    }
    if (this.isIsosceles()) {
      return 'isosceles triangle';
    }
    return 'scalene triangle';
  }

  private isEquilateral() {
    const distance1 = parseFloat(String(this.point1.distance(this.point2))).toFixed(2);
    const distance2 = parseFloat(String(this.point2.distance(this.point3))).toFixed(2);
    const distance3 = parseFloat(String(this.point3.distance(this.point1))).toFixed(2);
    
    return distance1 === distance2 && distance2 === distance3
  }

  private isIsosceles() {
    const distance1 = this.point2.distance(this.point1);
    const distance2 = this.point3.distance(this.point2);
    const distance3 = this.point3.distance(this.point1);

    return distance1 === distance2 || distance1 === distance3 || distance2 === distance3
  }
}
