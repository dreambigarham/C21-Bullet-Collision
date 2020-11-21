var thickness; 
var  bulletWeight,bulletSpeed;
var wall;

function setup() {  
 
  bullet=createSprite(200,150,30,5)  
  
  createCanvas(1600,400);
  
  bullet.shapeColor="white"
  
  thickness=random(22,83);
    
  bulletSpeed=random(223,321);
  
  bulletWeight=random(30,52);

  bullet.velocityX = bulletSpeed;

  wall=createSprite(1200,200,thickness,height/2);
  
  wall.shapeColor = color(80,80,80)

}
function draw() {
  background(0);  
  drawSprites();
  
  Damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
  if(bullet.collide(wall))
  {
    if(Damage > 10 )
    {
      bullet.shapeColor = color(255,0,0);
    }
    if( (Damage < 10 ) )
    {
      bullet.shapeColor = color(0,255,0);
    }

  }
}