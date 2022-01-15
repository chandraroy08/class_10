
var trex

function preload(){

  treximg = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg= loadImage("ground2.png")



}


function setup(){
  createCanvas(600,200)
  trex= createSprite(50,160,10,60)
  trex.addAnimation("walking",treximg)
  trex.scale=0.5
 
  ground= createSprite(300,180,600,10)
  ground.addImage("grd",groundimg)
  ground.velocityX=-3

  edge= createEdgeSprites()


  
  //create a trex sprite
 
}

function draw(){
  background("white")
  drawSprites()
  console.log(trex)

  if(ground.x<0){
    ground.x=ground.width/2
  }

  if(keyDown("space")){
    trex.velocityY=-10
  }
// add gravity
  trex.velocityY= trex.velocityY+0.5

   trex.collide(ground)
}
