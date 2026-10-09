//Author: Huy Quang Tran
//Date: September 23th, 2026
//Purpose: Lab 2 Work - Ex 3: Moving rectangle

var y=200

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  rect (200,y,400,200)
  y=y+5
  if (y>800) {
    y=-200
  }
}