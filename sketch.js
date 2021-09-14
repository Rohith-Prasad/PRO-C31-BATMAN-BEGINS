const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var thunderCreatedFrame=0;
var engine,world;
var drops=[];
var maxDrops=100;
var rando;
var thunder;

function preload(){
    thunder1=loadImage('thunderbolt/1.png');
    thunder2=loadImage('thunderbolt/2.png');
    thunder3=loadImage('thunderbolt/3.png');
    thunder4=loadImage('thunderbolt/4.png');

    batAnimation=loadAnimation('bat/bat1.png','bat/bat2.png','bat/bat3.png','bat/bat4.png','bat/bat5.png','bat/bat6.png','bat/bat7.png',
    'bat/bat8.png','bat/bat9.png','bat/bat10.png','bat/bat11.png','bat/bat12.png',);
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

    rando=Math.round(random(1,4));
    if (frameCount%80===0){
        thunder=createSprite (random(0,500),random(0,50),10,10);
        switch(rando){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunnder.scale=random(0.2,0.7)
    }
    //displaying raindrops
    for(var i=0;i<maxDrops;i++){
        drops[i].showDrops();
        drops[i].updateY();
    }
    umbrella.display();
    drawSprites();
}   


