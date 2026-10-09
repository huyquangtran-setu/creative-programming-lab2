//Author: Huy Quang Tran
//Date: September 23th, 2026
//Purpose: Lab 2 Work - Ex 6: If else chain

var a
function setup() {
  createCanvas(800, 800);
  a=9
}

function draw() {
  if (a==1) {
   print ('MONDAY')
  }
  else if (a==2) {
   print ('TUESDAY')
  }
  else if (a==3) {
   print ('WEDNESDAY')
  }
  else if (a==4) {
   print ('THURSDAY')
  }
  else if (a==5) {
   print ('FRIDAY')
  }
  else if (a==6) {
   print ('SATURDAY')
  }
  else if (a==7) {
   print ('SUNDAY')
  }
  else {
   print ('There are 7 days in the week')
  }
  //noLoop ()
}