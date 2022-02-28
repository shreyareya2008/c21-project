var road,car,coin1,coin2,coin3,car1;
var roadImg,carImg,coin1Img,coin2Img,coin3Img,car1Img;
var score = 0;
var coin1G,coin2G,coin3G,car1Group;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  roadImg = loadImage("road.jpg");
  carImg = loadAnimation("car.png");
  coin1Img = loadImage("coin1.png");
  coin2Img = loadImage("coin2.png");
  coin3Img = loadImage("coin3.png");
  car1Img = loadImage("car1.png");
  //endImg =loadAnimation("gameover.png")
}

function setup(){
  
    createCanvas(400,600);
  // Moving background
    
  road=createSprite(200,200);
  road.addImage(roadImg);
   road.velocityY = 9;
  
  
  //creating boy running
  car = createSprite(50,500,20,20);
  car.addAnimation("car.png",carImg);
  car.scale=0.07;
    
  
  coin1G=new Group();
  coin2G=new Group();
  coin3G=new Group();
  car1Group=new Group();
  }

  function draw() {

    if(gameState===PLAY){
    background(0);
    car.x = World.mouseX;
    
    edges= createEdgeSprites();
    car.collide(edges);
    
    //code to reset the background
    if(road.y > 400 ){
      road.y = height/2;
    }
    
      createcoin1();
      createcoin2();
      createcoin3();
      createcar1();
  
      if (coin1G.isTouching(car)) {
        coin1G.destroyEach();
        score=score+50;
      }
      else if (coin2G.isTouching(car)) {
        coin2G.destroyEach();
        score=score+100;
        
      }else if(coin3G.isTouching(car)) {
        coin3G.destroyEach();
        score=score+ 150;
        
      }else{
        if(car1Group.isTouching(car)) {
          gameState=END;

          car.addAnimation("car",carImg);
      car.x=width/2;
        car.y=height/2;
        car.scale=0.1;
        
          
          coin1G.destroyEach();
          coin2G.destroyEach();
          coin3G.destroyEach();
          car1Group.destroyEach();
          
          coin1G.setVelocityYEach(0);
          coin2G.setVelocityYEach(0);
          coin3G.setVelocityYEach(0);
          car1Group.setVelocityYEach(0);
  
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Coins COLLECTED: "+ score,10,30);
    }
  
  }
  
  function createcoin1() {
    if (World.frameCount % 200 == 0) {
    var coin1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin1.addImage(coin1Img);
    coin1.scale=0.04;
    coin1.velocityY = 5;
    coin1.lifetime = 150;
    coin1G.add(coin1);
    }
  }
  
  function createcoin2() {
    if (World.frameCount % 320 == 0) {
    var coin2 = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin2.addImage(coin2Img);
    coin2.scale=0.15;
    coin2.velocityY = 4;
  coin2.lifetime = 150;
    coin2G.add(coin2);
  }
  }
  
  function createcoin3() {
    if (World.frameCount % 410 == 0) {
    var coin3 = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin3.addImage(coin3Img);
    coin3.scale=0.05;
   coin3.velocityY = 4;
    coin3.lifetime = 150;
    coin3G.add(coin3);
    }
  }
  
  function createcar1(){
    if (World.frameCount % 530 == 0) {
    var car1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    car1.addImage(car1Img);
    car1.scale=0.3;
    car1.velocityY = 10;
    car1.lifetime = 180;
    car1Group.add(car1);
    }
  }
  
  
























































































































































