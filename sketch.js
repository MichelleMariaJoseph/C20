var fixedRect,movingRect;

var s1,s2;
var s3,s4;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(100, 200, 50, 50);
  movingRect= createSprite(300, 200, 50, 100);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;

  s1= createSprite(100, 300, 50, 50);
  s2= createSprite(400, 300, 50, 100);
  s1.shapeColor="blue";
  s2.shapeColor="yellow";
  s1.debug=true;
  s2.debug=true;
  s1.velocityX=2;
  s2.velocityX=-2;

  s3= createSprite(350, 100, 50, 50);
  s4= createSprite(350, 300, 50, 100);
  s3.shapeColor="orange";
  s4.shapeColor="pink";
  s3.debug=true;
  s4.debug=true;
  s3.velocityY=2;
  s4.velocityY=-2;

}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
   movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
   fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 ) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if(s1.x-s2.x<=s1.width/2+s2.width/2 &&
    s2.x-s1.x<=s1.width/2+s2.width/2 
    ) {
    s1.velocityX=s1.velocityX * (-1);
    s2.velocityX=s2.velocityX * (-1);
  }
  if(s3.y-s4.y<=s3.height/2+s4.height/2 &&
    s3.y-s4.y<=s3.height/2+s4.height/2 
    ) {
    s3.velocityY=s3.velocityY * (-1);
    s4.velocityY=s4.velocityY * (-1);
  }


  drawSprites();
}