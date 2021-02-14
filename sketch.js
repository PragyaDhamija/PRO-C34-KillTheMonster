const Engine = Matter.Engine;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hero;
var ground;
var rope;
var b1,b2,b3,b4,b4a,b5,b6,b7,b8,b9,b1,b11,b12,b13,b14,b15,b16,b17,b18;

var engine, world;
var monster,monsterO,superhero;
var backgroundImg;

function preload() {
monster = loadImage("sprites/Monster1.png");
superhero = loadImage("sprites/Superhero1.png");
backgroundImg = loadImage("sprites/BackgroundImage.png")
}
function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  hero = new Hero();
  b1 = new Box(700,100);
  b2 = new Box(700,100);
  b3 = new Box(700,100);
  b4 = new Box(700,100);
  b4a = new Box(700,100);
  b5 = new Box(850,100);
  b6 = new Box(850,100);
  b7 = new Box(850,100);
  b8 = new Box(850,100);
  b9 = new Box(850,100);
  b10 = new Box(850,100);
  b11 = new Box(850,100);
  b12 = new Box(850,100);
  b13 = new Box(1000,100);
  b14 = new Box(1000,100);
  b15 = new Box(1000,100);
  b16 = new Box(1000,100);
  b17 = new Box(1000,100);
  b18 = new Box(1000,100);
  rope = new Rope({x: 700, y: -850},hero.b);
  monsterO = new Monster();
 
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  

    ground.display();
    hero.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b4a.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    rope.display();
    monsterO.display();

  
}

function mouseDragged(){
  Body.setPosition(hero.b,{x: mouseX, y: mouseY});
}