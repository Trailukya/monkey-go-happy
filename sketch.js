
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey0.png","monkey1.png","monkey2.png","monkey3.png","monkey4.png","monkey5.png","monkey6.png","monkey7.png","monkey8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  banana = createSprite(600,120,40,10);
  banana.scale = 0.1;
  banana.velocityX = -3;
  
  obstacle = createSprite(600,315,20,20);
  obstacle.scale = 0.15;
  obstacle.velocityX = -3;
  
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  monkey.setCollider("circle",0,0,250);
  monkey.debug = true
  
}



function draw() {
  background(255);
  
  if(ground.x<0){
   ground.x=ground.width/2;
  }
    if(keyDown("Space")){
      monkey.velocityY = -12; 
    } 
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
    
    monkey.collide(invisibleGround);{
      
    }
  
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100,50);
  
  //spawn the Food
    spawnFood();
  
    //spawn obstacles on the ground
    spawnObstacles();
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityY = 0;
    ground.velocityX = 0;
    
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
    
    
    
    
  }
  
  
    
   drawSprites();
}
 function spawnObstacles(){
  if (frameCount % 60 === 0) {
    var obstacles = createSprite(600,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 200;
    
    obstaclesGroup.add(obstacle);
   }
}
function spawnFood(){
  if (frameCount % 60 === 0) {
    var bananas = createSprite(600,120,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 134;
    
    FoodGroup.add(banana);
   }
    
    
    
}




  

