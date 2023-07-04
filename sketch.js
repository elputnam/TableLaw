//The law of table in a quantum field: a deliberate misinterpretation. Memories flicker out of sync. The table is rationality. Everything else is entangled.

let pixels = [];
let img1;
let img2;
let num;

function preload (){
 img1 = loadImage('assets/ELDad_Cigar_2.jpg');
 img2 =loadImage('assets/ELDad_Cigar.jpg')
}

function setup() {
  // createCanvas(img.width*.34, img.height*.34, WEBGL);
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(15);
  rectMode(CENTER);
  if (windowWidth > windowHeight){
    num = 1000;
  } else {
    num = 500;
  }
  for (var j = 0; j < num; j++){
    pixels[j] = new Pixel(random(-width/2, width/2), random(-height/2, height/2), 10)
  }
}

function draw() {
  // if (frameCount%2==0){
    //image
    push();
    imageMode(CENTER);
    translate(0, 0, -500)
    
    scale(2);
    //img2.filter(INVERT);
    tint(random(255));
    image(img2, 0, 0, img2.width/4, img2.height/4);
    tint(random(255), random(100));
    image(img1, 0, 0, img1.width/4, img1.height/4);
    pop();
  // }

 
 if (frameCount%int(random(5))==0){
    //pixels/glitter
    push();
    translate(0,0,-400);
    scale(1.75);
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].move();
		  pixels[i].show();
      pixels[i].edges();
    }
   pop();
}

 
  if (frameCount%5==0){
    background(0);
  }
  

//tabletop
table();
 
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
    // if (this.x > width/2){
    //   this.x = -width/2
    // } 
}
  move() {
    // this.x += random(10);
    this.y += random(5);
  }
  show() {
    noStroke();
    fill(300, 100, random(100), random(100));
    // fill(random(255), random(100));
    rect(this.x, this.y, random(this.r), random(this.r)/2);
    // rect(this.x, this.y, random(this.r), random(2));
    // circle(this.x, this.y, random(this.r));
  }
}

function table(){
  stroke(50);
  if (frameCount%10==0){
  fill(random(80, 180), random(100), random(100), random(100));
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

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){

  let fs = fullscreen();
  fullscreen(!fs);
}