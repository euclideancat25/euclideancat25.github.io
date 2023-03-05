export class Vect  {
    
    constructor(x,y) {
        this.x_coord = x;
        this.y_coord = y;
        this.max_vel = 10;
    }

    get x() {
        return this.x_coord;
    }

    get y() {
        return this.y_coord;
    }

    set x(value) {
        this.x_coord = value;
    }

    set y(value) {
        this.y_coord = value;
    }

    add(vec) {
        let x = this.x_coord;
        let y = this.y_coord;
        return new Vect(x + vec.x, y + vec.y);
    }

    sub(vec) {
        let x = this.x;
        let y = this.y;
        return new Vect(x - vec.x, y - vec.y);
    }

    get abs() {
        let x = this.x_coord;
        let y = this.y_coord;
        let mag = x * x + y * y;
        return Math.sqrt(mag);
    }

    scalar(k) {
        let x = this.x_coord;
        let y = this.y_coord;
        x = x * k;
        y = y * k;
        return new Vect(x, y);
    }

    normalize() {
        let x = this.x_coord;
        let y = this.y_coord;
        let mag = this.abs;
        return new Vect(x / mag, y / mag);
    }

    static distance(point1, point2) {
        let distance = 0;
        if(point1.x != point2.x && point1.y != point2.y) {
        let diffv = point1.sub(point2);
        distance = diffv.abs;
        }
        return distance;
    }
}