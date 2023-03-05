export class PhysicsWorld {

    constructor(list_obj) {
        this.list_obj = list_obj;
    }

    static calculate(obj) {
        obj.center = obj.center.add(obj.current_velocity);
        console.log(obj.center);
    }
}