var fixedRect, movingRect;

var car,wall;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(400,100,50,50);
  car.shapeColor = "blue";
  wall = createSprite(1000,100,20,80);
  wall.shapeColor = "red";

car.velocityX = 4
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car,wall)){
  car.shapeColor = "blue";
  wall.shapeColor = "blue";
//car.velocityX = 0;

 }
 else{
  car.shapeColor = "yellow";
  wall.shapeColor = "red";
 } 
 bounceoff(car,wall)
 drawSprites();
}

function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
  }
  else {
  return false;
  }


}
function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityX = object1.velocityX*(-1);
}




  
}


