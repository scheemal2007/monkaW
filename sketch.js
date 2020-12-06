
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine
var world

var object
var ground1
var ball1
var ball2
function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world
 ball1=new blocks(200,200,20,20)
 ball2=new blocks(250,250,39,39)
 ground1=new ground(400,380,800,10)
}
function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ball1.display()
  ball2.display()
  ground1.display()
}

