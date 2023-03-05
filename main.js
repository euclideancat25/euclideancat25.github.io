import { Circle } from "/modules/circle.js";
import { Vect } from "/modules/vector.js";
import { Scene } from "/modules/scene.js";
import { PhysicsWorld } from "/modules/physics.js";

document.addEventListener("mousemove", mouseMoveHandler, false);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse_point = new Vect(0,0);
const time_step = 0.1;
const max_force = 20;
//Worm
var speed = 10;
var start_force = new Vect(0,0)
var length = 100;
var circles = [];
var rad = 10;
var mass = 1;
var point = new Vect(200,200);
var vel = new Vect(0,0);

for(let i = 0; i < length; i++) {
    circles.push(new Circle(point, rad, vel, mass, start_force));
}

//Scene
var main_scene = new Scene(circles);

function mouseMoveHandler(e) {
    mouse_point = new Vect(e.clientX, e.clientY);
}

function constraint(point, anchor, distance) {
    let d1 = point.sub(anchor);
    return ((d1.normalize()).scalar(distance)).add(anchor);
}

function steer(amount) {
    let des_vel = mouse_point.sub(circles[0].center);
    des_vel = des_vel.normalize();
    des_vel = des_vel.scalar(amount);
    let app_force_steer = (des_vel.sub(circles[0].current_velocity)).scalar(1/mass);
    if(app_force_steer.abs>max_force){
        return (app_force_steer.normalize()).scalar(max_force);
    }
    return app_force_steer;
}


function draw() {
    circles[0].app_force = steer(speed);
    main_scene.render(ctx);
    for(let i = 1; i < circles.length; i++) {
        if(Vect.distance(circles[i].center, circles[i-1].center) > 0){
            circles[i].center = constraint(circles[i].center,circles[i-1].center,rad);
        }
    }
    PhysicsWorld.calculate(circles[0]);
}

setInterval(draw, time_step);

