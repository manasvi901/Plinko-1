const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if (frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
  }
  for(var a = 0; a<particles.length;a++){
    particles[a].display();
  }
  for(var k = 0; k<particles.divisions;k++){
    divisions[k].display();
  }
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }
  ground = newGrund(370,5,800,20);
  drawSprites();
}

function display(){
  ground.display();
}