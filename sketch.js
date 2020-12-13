const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumbledpaper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	crumbledpaper = new paper(400,500);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  crumbledpaper.display();
  
  drawSprites();
}








