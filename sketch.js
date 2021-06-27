
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
 edges=createEdgeSprites()

 trex.scale=0.5 
}

function draw(){
  //set background to white
  background("white")

  //using console.log
  console.log("trexrunner")

  //trex jumpswhen space key is pressed
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5

  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites()
  

}
