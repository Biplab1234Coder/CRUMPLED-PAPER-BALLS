
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var Ground , leftWall;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;


	Ground = new ground(width/2,670,width,20);
	leftWall = new ground(1100,600,20,120);

	//Create the Bodies Here.

	var ball_options={

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,300,30);
    World.add(world, ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  Ground.display();

  
  drawSprites();
 
}

function keyPressed(){

	if(ketCode === UP_ARROW){

		Matter.Body.applyForce(ball_options, [100,350], 1.8)
	}
}



