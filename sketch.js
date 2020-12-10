
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";


function preload(){

}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	boy1 = new boy(100,100);
	mango1 = new Mango(200,300,10);
	mango2 = new Mango(210,320,10);
	mango3 = new Mango(230,270,10);
	mango4 = new Mango(260,320,10);
	mango5= new Mango(200,310,10);
	mango6 = new Mango(215,290,10);
	stone1 = new Stone(200,300,120,30);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();

  detectollision(stoneObj , mango1);
  detectollision(stoneObj , mango2);
  detectollision(stoneObj , mango3);
  detectollision(stoneObj , mango5);
  detectollision(stoneObj , mango4);
  detectollision(stoneObj , mango6);
  
  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
   boy1.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     boy1.attach(stone.body);
    }
}

function detectollision(Lstone , Lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distnce = dis(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
		
		if(distance<=lmango+lstone.radius) 
		{
			Matter.Body.setStatic(lmango.body,false);
		}
	}
	




