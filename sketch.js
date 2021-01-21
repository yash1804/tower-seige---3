
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var b1;
var polygon;
var rubber;
var floor2;
var floor;
var c1;
var score = 0;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
 
	//Create the Bodies Here.
 b1 = new Brick2(400,600,25,110);
 b2 = new Brick2(550,600,25,110);
 b3 = new Brick(475,525,180,20);
 b4 = new Brick(575,575,25,110);
 c1 = new Brick2(400,450,25,100);
 c2 = new Brick2(550,450,25,100);
 c3 = new Brick(475,400,180,20);
 c4 = new Brick(725,600,25,110);
 b5 = new Brick2(650,525,180,20);
 c5 = new Brick(575,450,25,100);
 b6 = new Brick(725,450,25,100);
c6 = new Brick2(650,400,180,20);

 polygon = new Polygon(150,550,50)

 rubber = new Rubber(polygon.body, {x:100, y:540});
 wall = new Ground(795,350,10,700)
 
 floor = new Ground(400,690,1000,20);
 
	Engine.run(engine);
  
}



function draw() {
  
  rectMode(CENTER);
  background("cyan");
  
  text("SCORE:"+score,100,100);
  
  
 b1.display();
 polygon.display();
 rubber.display();
 b2.display();
 floor.display();
 b3.display();
 c1.display();
 c2.display();
 c3.display();
 b4.display();
 c4.display();
 b5.display();
 c5.display();
 b6.display();
 c6.display();
 wall.display();

 b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 c1.score();
 c2.score();
 c3.score();
 c4.score();
 c5.score();
 c6.score();

 drawSprites();

}


function mouseDragged () {
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
 
 }
 
 function mouseReleased() {
 rubber.Fly();
 }

 function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x:100, y:540})
    rubber.attach(polygon.body); 
   }
   }
 
  
  
   
   
    
    
   