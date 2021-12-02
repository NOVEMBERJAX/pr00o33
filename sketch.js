const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies



var snowbg,hailstoneimg






function preload(){
snowbg=loadImage("snow1.jpg")

}







function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ball1=new Snowfall(200,200)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowbg);
  ball1.display();
  drawSprites();
}

