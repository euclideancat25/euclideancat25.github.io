export class Scene {

    constructor(list_obj) {
        this.list_obj = list_obj;
    }

    render(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let list_of_obj = this.list_obj;
        for (let obj of list_of_obj) {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.arc(obj.center.x,obj.center.y, obj.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
}