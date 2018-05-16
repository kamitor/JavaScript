var rondjes = [];

// We need a score. Score always starts at 0
var score = [];
// we need an array with projectiles
var projectiles = [];



function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 40; i++) {
  rondjes[i] = new Rondje();
  }
  new Rondje();
}

function draw() {
  background(0);
  for (var h = 0; h < rondjes.length; h++){
    rondjes[h].move();
    rondjes[h].display();

  }
  //ellipse(25,25,50,50);
}

function Rondje() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function () {
    stroke(255);

    ellipse(this.x, this.y, 24,27);
  }

  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

}
