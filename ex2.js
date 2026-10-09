//Author: Huy Quang Tran
//Date: September 23th, 2026
//Purpose: Lab 2 Work - Ex 2: Moving circle

var x=799

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  ellipse (x,400,100,100)
  x=x-10
  if (x<0) {
    x=799
  }
}