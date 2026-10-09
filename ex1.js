//Author: Huy Quang Tran
//Date: September 23th, 2026
//Purpose: Lab 2 Work - Ex 1: House and car

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  house ()
  car ()
  
}


function house () {
  fill (255,255,255)
  rect (100,300,200,400)

  fill (81,150,207)
  triangle (100,300,300,300,200,150)
  quad (250,225,250,170,300,170,300,300)
  
  rect (125,375,50,50)
  rect (225,375,50,50)
  line (150,375,150,425)
  line (125,400,175,400)
  line (250,375,250,425)
  line (225,400,275,400)
  
  rect (175,500,50,200)
  line (175,600,225,600)
  line (200,500,200,600)
  line (175,550,225,550)
}

function car () {
  fill (170,64,173)
  ellipse (587.5,600,70,50) 
  fill (209,109,59)
  rect (400,600,250,100)
  fill (255,155,0)
  triangle (650,600,650,700,725,650)
  fill (255,255,0)
  ellipse (462.5,700,50,50)
  ellipse (587.5,700,50,50)
  triangle (400,600,400,550,450,600)
}