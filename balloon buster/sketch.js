
var bullet,cannon,ground,edges,object,bulletG,ballImg
var numCount=200
var numCount2=500
var count=150
var num=[]
var objectG=[]
var bulletG=[]

function preload(){
    cannonImg=loadImage("cannon-removebg-preview.png")
    bg=loadImage("background.jpg")
    ballImg=loadImage("ball.png")
}

function setup(){
    createCanvas(600,800)
cannon=createSprite(50,690,50,50)
cannon.addImage(cannonImg)
cannon.scale=0.19
ground=createSprite(300,470,100,100)
ground.addImage(bg)
ground.scale=2
cannon.depth=ground.depth
cannon.depth+=1


}


function draw(){
    background("black")
    cannon.x=mouseX
    bullets()
alienObjects()
    drawSprites();
    for(var i=0;i<objectG.length;i++){
    
      if(num[i]!==0){
        textSize(36)
        fill("white")
      text(num[i],objectG[i].x-15,objectG[i].y+10)
      }
      for(var j=0;j<bulletG.length;j++){
      if(objectG[i].isTouching(bulletG[j])){
          num[i]--
          bulletG[j].destroy()

      }
      if(objectG[i].isTouching(cannon)){
        objectG[i].velocityX=0
        objectG[i].velocityY=0
        bulletG[j].velocityY=0
        object.x=300
    }
      if(num[i]===0){
          objectG[i].destroy()
          }
        
        }
    }
 
}
function bullets(){
    if (frameCount%5===0){
        bullet=createSprite(50,690,10,15)
        bullet.shapeColor="black"
        bullet.x=cannon.x
        bullet.velocityY=-10
        bullet.depth=cannon.depth
        bullet.depth-=1
        bulletG.push(bullet)
       
    }
}
function alienObjects(){
    if(frameCount%count===0){
        object=createSprite(50,-50,100,100)
        object.addImage(ballImg)
        object.scale=0.8
        object.x=Math.round(random(50,550))
        object.velocityY=8
      object.velocityX=Math.round(random(-6,6))
      
      num.push(Math.round(random(50,100)))
      
        objectG.push(object)

        Counts()

    }
    
   
   
    for (var i=0;i<objectG.length;i++){
    if(objectG[i].y>0){
        edges=createEdgeSprites()
        objectG[i].bounceOff(edges)
        
    }
}
}
function Counts(){
    var Count=Math.round(random(1,4))
if (Count===1){
  count=750
}else if(Count===2){
    count=950
}else if(Count===3){
    count=1150
}else{
    count=1350
}
}