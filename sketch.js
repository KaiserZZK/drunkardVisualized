/*
adjust circle radius and "speed" in movement.js for different visual effects!

*/

let avenue;
let street;
let direction

function setup(){
  createCanvas(windowWidth, windowHeight);
  avenue=width/2;
  street=height/2;
}

function draw(){
  background(0,5);
  step(); // pre-defined function in movement.js
  fill(255);
  noStroke();
  circle(avenue, street, 50);
  
  if(avenue<0){
    avenue+=width;
  } else if (avenue>width){
    avenue-=width;
  }
  if(street<0){
    street+=height;
  } else if (street>height){
    street-=height;
  }
}