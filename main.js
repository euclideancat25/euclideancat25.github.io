import { Circle } from "/modules/circle.js";
import { Vect } from "/modules/vector.js";
import { Scene } from "/modules/scene.js";
import { PhysicsWorld } from "/modules/physics.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
document.addEventListener("mousemove", mouseMoveHandler, false);


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse_point;
var speed = 2.0;
var length = 20;
//Worm
var circles = [];
var rad = 10;
var point = new Vect(0,0);
var vel = new Vect(0,0);

for(let i = 0; i < length; i++) {
    circles.push(new Circle(point, rad, vel, 1.0));
}

console.log(circles[0]);

//Scene
var main_scene = new Scene(circles);

function mouseMoveHandler(e) {
    mouse_point = new Vect(e.clientX, e.clientY);
}

function constraint(point, anchor, distance) {
    let d1 = point.sub(anchor);
    return ((d1.normalize()).scalar(distance)).add(anchor);
}

function desired_vel(amount) {
    let desired_vel = (mouse_point).sub(circles[0].center);
    console.log(circles[0]);
    return desired_vel.normalize().scalar(amount);
}


function draw() {
    circles[0].current_velocity = desired_vel(speed);
    PhysicsWorld.calculate(circles[0]);
    for(let i = 1; i < circles.length; i++) {
        if(Vect.distance(circles[i].center, circles[i-1].center) > 0){
            circles[i].center = constraint(circles[i].center,circles[i-1].center,rad);
        }
    }
    main_scene.render(ctx);
}

setInterval(draw, 1);

