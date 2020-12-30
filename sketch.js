//variables
var bg1,bg2,bg3,bg4

var oz,ozRun,ozJump,ozSlide,ozFall
var table1,table2
var food1,food2,food3,food4
var score,health 
var gameover,gameOverImage, restart,restsrtImage
function preload() {
  bg1 = loadImage("images/room1.jpg");
  bg2 = loadImage("images/room2.jpg");
  bg3 = loadImage("images/room3.jpg");
  bg4 = loadImage("images/room4.jpg");
  
  //oz animation
  boy1 = loadAnimation("images/boy1.PNG");
  ozRun = loadAnimation("images/boy2.PNG","images/boy3.PNG",
    "images/boy4.PNG","images/boy5.PNG","images/boy6.PNG",
    "images/boy7.PNG");
  ozJump =loadAnimation("images/boy9.PNG");
  ozSlide = loadAnimation("images/boy11.PNG");
  ozFall = loadAnimation("images/boy12.PNG")
  
  gameover = loadImage("images/gameover.png");
  
  box1 = loadImage("images/box1.png");
  box2 = loadImage("images/box2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  oz = createSprite(windowHeight-200, 200, 50, 50);
  oz.addAnimation("run",ozRun)
  oz.addAnimation("jump",ozJump)
  oz.addAnimation("slide",ozSlide)
  oz.addAnimation("fall",ozFall)
  oz.scale =2

  ground = createSprite(windowWidth/2, windowHeight-30,windowWidth,10)
  //ground.visible = false

  obstaclesGroup = createGroup();
  foodGroup = createGroup();
}

function draw() {
  background(bg1); 

  //jump
  if(keyDown("up") ){
    oz.velocityY =-20
    oz.changeAnimation("jump",ozJump)
  }
  //to change back the animation to running after oz jumps
  if(oz.y>880){
    oz.changeAnimation("run",ozRun)
  }
  //slide
  if(keyDown("down")){
    oz.changeAnimation("slide",ozSlide)
  }

  //camera position for oz
  camera.position.x = oz.x
  camera.position.y = oz.y

  //gravity
  oz.velocityY += 1.0  
  oz.collide(ground)
  //console.log(oz.y)
    
  spawnObstacles()
  
   
//46: starting page- title, rules,button, images for obstacles, food, istouchng, gameState
  /*oz is from another far away planet 'ZATHURA' and he escaped from his planet
  as he didnt want to be the king, he found earth very intersting
  but people from his planet are trying abduct him 
  help oz escape as he is innocent...
  if you fail to help him escape, he will be taken away 
  */
  
  
  //47: life for oz -- 3 heart and score
  //48: testing...sound
  
  drawSprites();
}

//like spawn obstacles in trex same like that make your obstacles
function spawnObstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 260 === 0) {
    var obstacles = createSprite(windowWidth,1000,40,10);

    var r = Math.round(random(1,2))
    switch(r){
      case 1 : obstacles.addImage(box1);
      break;
      case 2: obstacles.addImage(box2);
      break;



      default: break;
    }
    obstacles.scale = 1.0;
    obstacles.velocityX = -6;
    
    //assign lifetime to the variable
    obstacles.lifetime = 800;
    
    //adjust the depth
    oz.depth = obstacles.depth
    oz.depth +=1

    //add each obstacle to the group
    obstaclesGroup.add(obstacles);
  }
  
}

//for spawning food
function spawnFoods() {
  //write code here to spawn the obstacles
  if (frameCount % 400 === 0) {
    var food = createSprite(windowWidth,1000,40,10);

    var r = Math.round(random(1,2))
    switch(r){
      case 1 : food.addImage(food1);
      break;
      case 2: food.addImage(food2);
      break;



      default: break;
    }
    food.scale = 1.0;
    food.velocityX = -6;
    
    //assign lifetime to the variable
    food.lifetime = 800;
    
    //adjust the depth
    oz.depth = food.depth
    oz.depth +=1

    //add each obstacle to the group
    foodGroup.add(food);
  }
  
}



