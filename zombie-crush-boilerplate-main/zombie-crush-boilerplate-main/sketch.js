const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var left
var right
var bridge
var jointPoint
var jointLink
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

left = new Base(50,height/2,width/3,50)
right = new Base(width-68,height/2,width/3,50)
  ground = new Base(width/2,900,width,20)
  bridge = new Bridge (25,{x:width/2-700,y:height/2-30})
  jointPoint = new Base (width/2+600,height/2-10,40,20)

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge,jointPoint);

  for(var i = 0; i <= 8; i++){
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10,140);
    var stone = new Stone(x,y, 80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

ground.show();
left.show();
right.show();
bridge.show();
for(var stone of stones){
  stone.show();
}
}
