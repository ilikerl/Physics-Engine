  const Engine = Matter.Engine;
  const World = Matter.World;
  const Body = Matter.Bodies;
  var engine;
  var world;
function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = Engine.world;
  object = Body.rectangle(200,200,50,50);
  World.add(world,object);
  console.log(object);
}

function draw() {
  background(255,5,255); 
  rectMode(CENTER);
  rect(200,200,50,40) 
  drawSprites();
}