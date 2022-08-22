import { Point } from './Point'

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points: Point[], color: string = 'green', filled: boolean = true) {
        this.validatePoints(points);

        this.points = points;
        this.color = color;
        this.filled = filled;
    }
    
    abstract getType(): string;

    toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points:${this.pointsToString(this.points)}.`
    }

    getPerimeter() {
        let i = 0;
        let sum = 0;
        while (i < this.points.length - 1) {
            sum = sum + this.points[i].distance(this.points[i + 1]);
            i++;
        }

        return sum + this.points[0].distance(this.points[this.points.length - 1]);
    }

    private validatePoints(points: Point[]): boolean{
        if (points.length < 3) {
            throw new Error('Should have at least 4 points!');
        }
        return true;
    }

    private pointsToString(points: Point[]): string {
        return points.reduce((target, current, index, array) => {
            if (index === array.length - 1) {
                return `${target} ${current.toString()}`
            }
            return `${target} ${current.toString()},`

        }, '')
    }
}
