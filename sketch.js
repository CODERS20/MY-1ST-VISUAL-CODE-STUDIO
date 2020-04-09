var moving_rectangle
var fixed_rectangle;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,50,50);
  moving_rectangle.shapeColor = "blue";
  moving_rectangle.velocityX = 2;
  fixed_rectangle = createSprite(600, 200, 50,50);
  fixed_rectangle.shapeColor = "yellow";
  fixed_rectangle.velocityX = -2; 
}

function draw() {
  background(255,255,255);  

  if(moving_rectangle.x -  fixed_rectangle.x <= fixed_rectangle.width/2 + moving_rectangle.width/2 &&
  fixed_rectangle.x -  moving_rectangle.x <= fixed_rectangle.width/2 + moving_rectangle.width/2){
    fixed_rectangle.velocityX = fixed_rectangle.velocityX * (-1);
    moving_rectangle.velocityX = moving_rectangle.velocityX * (-1);
  }

  drawSprites();
}