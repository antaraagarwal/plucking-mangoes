
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var sling, sling2

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1030,250,30);
	mango3=new mango(950,210,30);
	mango4=new mango(1200,180,30);
	mango5=new mango(1010,130,30);
	mango6=new mango(1900,240,30);
	mango7=new mango(1100,220,30);
	mango8=new mango(1200,250,30);
	mango9=new mango(1030,210,30);
	mango10=new mango(1150,140,30);
	mango11=new mango(1150,180,30);
	mango12=new mango(1400,130,30);
	mango13=new mango(1700,250,30);
	mango14=new mango(1060,150,30);
	mango15=new mango(900,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj= new stone(200, 350, 25,25)
	sling2 = new slingShot(stone.body,{x:4, y: 5});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

  stoneObj.display();
  

  groundObject.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
	
	}
	
	function mouseReleased() {
	sling2.fly()
	}