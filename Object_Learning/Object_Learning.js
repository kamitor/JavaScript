// The function of this program is to show the start of OBJECT ORIENTATED PROGRAMMING
// by forming a rect of different sizes.
// First we will learn the fact that we can define a square without declaring an object.
// We can also do this in different ways.
var x = 10;
var y = 9;
var breedte = 10;
var lenghte = 10;
// Functional description of the Rechtangle.


var rechthoek = {
 x : 90,
 y : 40,
 breedte : 40,
 lenghte : 60
};

var rechthoek2 = {
 x : 90,
 y : 40,
 breedte : 40,
 lenghte : 60
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(x, y, breedte, lenghte);
  rect(rechthoek.x, rechthoek.y, rechthoek.breedte, rechthoek.lenghte);
  rechthoek.x = rechthoek.x + 1;
}
