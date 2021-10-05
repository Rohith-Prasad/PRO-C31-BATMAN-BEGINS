const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var drops=[];
var maxDrops=100;

function preload(){
    
}

function setup(){
    engine=Engine.create();
    world=engine.world;

   createCanvas(500,700);
    umbrella=new Umbrella(200,500);
   //creating drops
   if(frameCount%150===0){
       for(var i=0;i<maxDrops;i++){
           drops.push(new createdrops(random(0,400),random(0,400)));
       }
   }
}

function draw(){
    Engine.update(engine);
    background(0);

    //displaying raindrops
    for(var i=0;i<maxDrops;i++){
        drops[i].showDrops();
        drops[i].updateY();
    }
    umbrella.display();
    drawSprites();
}   
