const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,500,10);
    
    //level one
    box1_1 = new Box(330,235,30,40);
    box1_2 = new Box(360,235,30,40);
    box1_3 = new Box(390,235,30,40);
    box1_4 = new Box(420,235,30,40);
    box1_5 = new Box(450,235,30,40);
    
    //level two
    box2_1 = new Box(360,195,30,40);
    box2_2 = new Box(390,195,30,40);
    box2_3 = new Box(420,195,30,40);

    //top
    box3 = new Box(390,155,30,40)

}

function draw(){
    background(0);
    ground.display();
    box1_1.display();
    box1_2.display();
    box1_3.display();
    box1_4.display();
    box1_5.display();
    box2_1.display();
    box2_2.display();
    box2_3.display();
    box3.display();
}