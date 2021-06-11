var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x= World.mouseX
  drawSprites();
}
//spawn the apple
function createApples(){
 if(frameCount%80==0){
   if(apple ==1){
  apple = createSprite(random(50,350),40,10,10)
  apple.velocityY=-3
  apple.addImage(appleImage)
  apple.x = Math.round(random(1,2))
  apple .scale = 0.6
  apple.depth = rabbit.depth
  rabbit.depth = rabbit.depth+1
}
}
}
function createleaves(){
  leaves = createSprite(random(30,150),20,10,10)
  leaves.velocityY=-2
  leaves.addImage(leavesImage)
  orangeLeaves.x = math.round(1,2)
  leaves.scale = 0.5
  leaves.depth = apple.depth
  rabbit.depth = rabbit.depth+1
}