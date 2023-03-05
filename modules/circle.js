export class Circle {

    constructor(center, rad, vel, m) {
        this.c_center = center;
        this.circle_rad = rad;
        this.velocity = vel;
        this.mass = m;

    }

    get center() {
        return this.c_center;
    }

    get radius() {
        return this.circle_rad;
    }

    set center(new_pos) {
        this.c_center = new_pos;
    }

    get current_velocity() {
        return this.velocity;
    }

    set current_velocity(new_vel) {
        this.velocity = new_vel;
    }

    set radius(new_radius) {
        this.circle_rad = new_radius;
    }
}