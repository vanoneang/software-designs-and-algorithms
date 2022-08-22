export class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance()
  distance(other: Point)
  distance(x: number, y: number)
  distance(xOrPoint?: number | Point, y?: number): number {
    if (xOrPoint instanceof Point) {
      return this.calculateDistance(xOrPoint.x, xOrPoint.y);
    }
    if (xOrPoint && y) {
      return this.calculateDistance(xOrPoint, y);
    }
    return this.calculateDistance(0, 0);
  }

  private calculateDistance(x: number, y: number): number {
    return Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2))
  }
}
