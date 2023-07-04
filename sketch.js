//The law of table in a quantum field: a deliberate misinterpretation

let pixels = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20);
  for (var j = 0; j < 500; j++){
    pixels[j] = new Pixel(random(-width/2, width/2), random(-height/2, height/2), 10)
  }
}

function draw() {
  // background(0);
  // fill(260, random(100), 100);
  // square(random(-width/2, width/2), random(-height/2, height/2), 10);
  //pixels
  push();
  translate(0,0,-500);
  scale(1.5)
  if (frameCount%2==0){
    
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].move();
		pixels[i].show();
  }
}
  if (frameCount%3==0){
    background(0);
  }
pop();

//tabletop
  stroke(50);
  if (frameCount%10==0){
  fill(80, random(100), random(100), random(100));
  }
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  box(300, 500, 20);
  //leg 1
  push();
  noStroke();
  translate(-125, 210, -200);
  rotateX(80);
  rotateY(90);
  fill(random(50));
  cone(10, 400);
  pop();
  //leg 2
  push();
  translate(125, 210, -200);
  rotateX(80);
  rotateY(90);
  noStroke();
  fill(random(50));
  cone(10, 400);
  pop();
  //leg 3
  push();
  translate(125, -250, -200);
  rotateX(80);
  rotateY(90);
  noStroke();
  fill(random(50));
  cone(10, 400);
  pop();
  //leg 3
  push();
  translate(-125, -250, -200);
  rotateX(80);
  rotateY(90);
  noStroke();
  fill(random(50));
  cone(10, 400);
  pop();

 

}

class Pixel{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
  }
  show() {
    noStroke();
    fill(random(255));
    rect(this.x, this.y, random(this.r), random(this.r));
  }
}