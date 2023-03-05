export class PhysicsWorld {

    constructor(list_obj) {
        this.list_obj = list_obj;
    }

    static calculate(obj,time_step) {
        obj.current_velocity = obj.current_velocity.add((obj.app_force).scalar(0.1));
        obj.center= obj.center.add((obj.current_velocity).scalar(0.1));
    }
}