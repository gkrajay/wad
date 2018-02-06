var spr;
var spr1;
var spr2;
var spr3;
var spr4;
function setup() {
  createCanvas(1366, 768);
  spr = createSprite(
    width/2, height/3, 40, 40);
  spr.shapeColor = color(255);
    spr1 = createSprite(
    100, 100, 100, 100);
  spr1.shapeColor = color(255);
 spr2 = createSprite(
    300, 250, 100, 100);
  spr2.shapeColor = color(255);
  spr3 = createSprite(
    900, 350, 100, 100);
  spr3.shapeColor = color(255);
   spr4 = createSprite(
    1000, 100, 100, 100);
  spr4.shapeColor = color(255);
}
function draw() {
  background(0);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(40);
  text("What's 5+(2+7)?",
    width/2, height*0.67);
   textSize(28);
   text("Use Arrow keys to move and SPACE bar to stop",
    width/2, height*0.6);
  drawSprites();

  fill(0); 
  textSize(72);
  text("20", 100,100);
  
  if(spr.overlap(spr1)){
  	clear();
  	background(255,0,0);
  	textAlign(CENTER);
  	textSize(80);
  	fill(0);
  	text("WRONG!", 700,300);
  	
  }
  
  fill(0); 
  textSize(72);
  text("12", 300,250);
  
  if(spr.overlap(spr2)){
  	clear();
  	background(255,0,0);
  	textAlign(CENTER);
  	textSize(80);
  	fill(0);
  	text("WRONG!", 700,300);
  }
  
  fill(0); 
  textSize(72);
  text("14", 900,350);
  
  if(spr.overlap(spr3)){
  	clear();
  	background(0,255,0);
  	textAlign(CENTER);
  	textSize(80);
  	fill(0);
  	text("CORRECT!", 700,300);
  	spr.setSpeed(0,0);
  	noLoop();
  	createA('https://github.com/gkrajay/wad', 'Click here to Proceed', 800,300);
  }
  fill(0); 
  textSize(72);
  text("5", 1000,100);
  
  if(spr.overlap(spr4)){
  	clear();
  	background(255,0,0);
  	textAlign(CENTER);
  	textSize(80);
  	fill(0);
  	text("WRONG!", 700,300);
  }
  
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spr.setSpeed(3, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    spr.setSpeed(3, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    spr.setSpeed(3, 180);
  }
  else if (keyCode == UP_ARROW) {
    spr.setSpeed(3, 270);
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}