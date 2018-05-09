// The function of this program is to show the start of OBJECT ORIENTATED PROGRAMMING
// by forming a rect of different sizes.

var x = 10;
var y = 9;
var breedte = 10;
var lenghte = 10;

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