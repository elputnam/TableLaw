//The law of table in a quantum field: a deliberate misinterpretation

let pixels = [];
let img;
function preload (){
 img = loadImage('assets/ELDad_Cigar.jpg');
}

function setup() {
  // createCanvas(img.width*.34, img.height*.34, WEBGL);
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20);
  rectMode(CENTER);
  for (var j = 0; j < 2000; j++){
    pixels[j] = new Pixel(random(-width/2, width/2), random(-height/2, height/2), 5)
  }
}

function draw() {
  // background(0);
  // fill(260, random(100), 100);
  // square(random(-width/2, width/2), random(-height/2, height/2), 10);
  if (frameCount%int(random(2))==0){
    //image
    push();
    // translate(-width*1.25, -height*1.25, -600);
    // translate(-width, -height, -600);
    imageMode(CENTER);
    translate(0, 0, -300)
    tint(random(255), random(100));
    scale(2);
    image(img, 0, 0, img.width/4, img.height/4);
    pop();
  }

 
  if (frameCount%int(random(5))==0){
    //pixels/glitter
    push();
    translate(0,0,-400);
    scale(1.75)
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].move();
		  pixels[i].show();
      pixels[i].edges();
    }
   pop();
}

 
  if (frameCount%4==0){
    background(0);
  }
  

//tabletop

  stroke(50);
  if (frameCount%10==0){
  fill(80, random(100), random(100), random(100));
  }
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //rotateZ(frameCount * 0.01);
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

  edges(){
    if (this.y > height/2)
    this.y = -height/2 
}
  move() {
    //this.x = random(-width/2, width/2);
    this.y += 10;
  }
  show() {
    noStroke();
    fill(320, random(100), random(100));
    // fill(random(255));
    // rect(this.x, this.y, random(this.r), random(this.r));
    circle(this.x, this.y, random(this.r));
  }
}