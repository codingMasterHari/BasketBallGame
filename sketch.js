const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var groundObj, garbageObj, paperObj, bgImg, garbagebinActual;
const bgSound  = new Audio("bgSound.wav");
bgSound.volume = 0.5


function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;
    bgImg = loadImage("basketballImg.png");

    paperObj = new ball(215, -100, 32);
    garbageObj = new hoop(1230, 350);
    groundObj = new Ground(width/2, height-17, width, 12);
    garbagebinActual = new GarbageCan(1230, 668);

}

function draw() {
    // background('lightblue');
    background(bgImg);
    Engine.update(engine);
    
    bgSound.play();
    bgSound.loop = true;


    groundObj.display();
    paperObj.display();
    garbageObj.display();
    garbagebinActual.display();
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 17, y: -30});
    }
}