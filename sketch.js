
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj;
var ground1;
var box2;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
	bgImg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperObj = new Paper(60, 488, 70);

	ground1 = new Ground(650, 490, width, 10);

	box2 = new Box(1000, 350, 150, 135)
	
	}


function draw() {
  rectMode(CENTER);

  background(bgImg);

paperObj.display();

ground1.display();

box2.display();

keyPressed();

}

function keyPressed(){
	if (keyCode === UP_ARROW ){

Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 10, y: -7})

   }
}