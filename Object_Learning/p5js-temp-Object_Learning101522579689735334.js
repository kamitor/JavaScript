// The function of this program is to show the start of OBJECT ORIENTATED PROGRAMMING
// by forming a rect of different sizes.
// C.G Verhoef & Maarten van der Glas @ 2018

var x = 10;
var y = 9;
var breedte = 10;
var lenghte = 10;

// Let's change everything to a Projectile..
var Projectile = {
 x : 90,
 y : 40,
 c : 182,
 breedte : 40,
 lenghte : 60,
 speed : 1,
};

var Projectile2 = {
 x : 90,
 y : 40,
 c : 23,
 breedte : 40,
 lenghte : 60,
 speed : 1,
};

function setup() {

  createCanvas(400, 400);

}

function display(){

rectMode(CENTER);
stroke(0);

// Fill the rect with color and display it

fill(projectile1.c);
rect(Projectile.x, Projectile.y, Projectile.breedte, Projectile.lenghte);

// Fill the rect with color and display it

fill(projectile2.c);
rect(Projectile2.x, Projectile2.y, Projectile2.breedte, Projectile2.lenghte
);

}

function move () {
// Projectile 1 move

Projectile1.x = Projectile1.x + Projectile1.speed;
if ( Projectile1.x < 200 )
{ Projectile1.speed = Projectile1.speed * 1;}
if ( Projectile1.x > 200 )
{ Projectile1.speed = Projectile1.speed * -1;}






// project 2 moves


}

function draw() {
  background(220);
  display();
  move();

}
