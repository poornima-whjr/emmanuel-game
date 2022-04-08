var spaceImg, space;
var spaceshipImg,spaceship;
//var spaceship2Img,spaceship2
//var spaceship3Img,spaceship3
//var spaceship3ADImg, spaceshipAD
//var spaceship5Ing,spaceship5
var laserImg, laser;
var rockImg, rock;
var rockGroup
var laserGroup;
var gameState = "play"
function preload() {

spaceImg = loadImage("space.png");
spaceshipImg = loadImage("spaceship.png")
//spaceship2Ing = loadImage("spaceship2.png")
//spaceship3Ing = loadImage("spaceship3.png")
//spaceship3ADIng = loadImage("spaceship3AD.png")
//spaceship5Ing = loadImage("spaceship5.png")
laserImg = loadImage("laser.png")  
rockImg = loadImage("rock.png")  


}

function setup() {
 
 createCanvas(600, 600);

 space = createSprite(300,300)   
space.addImage("space",spaceImg)

 spaceship = createSprite(250,500,50,50)   
spaceship.addImage(spaceshipImg)
  spaceship.scale = 0.3   
 
  
//spaceship2 = createSprite(250, 500, 50, 50)
//spaceship2.addImage(spaceship2Img) 
//spaceship3 = createSprite(250, 500, 50, 50)
//spaceship3.addImage(spaceship3Ing)
//spaceship3AD = createSprite(250, 500, 50, 50)
//spaceship3AD.addImage(spaceship3ADImg)
//spaceship5 = createSprite(250, 500, 50, 50)  
//spaceship5.addImage(spaceship5Img)

rockGroup = new Group()
laserGroup = new Group()
}

function draw() {
    
    space.velocityY = +3
    if(space.y >500 ){
      space.y = 300
  } 

    if (gameState === "play") {
    
     // if (keyDown("left_arrow")) {
       // spaceship.x = spaceship.x - 6;
     // }

      if (keyWentDown("space")) {
      createLaser()
        //spaceship.x = spaceship.x + 6;
      }
      spaceship.y = World.mouseY
      spaceship.x = World.mouseX

      
      /*if (laserGroup.isTouching(rockGroup)) {
        console.log()
        rockGroup.destroyEach();
        laserGroup.destroyEach();
      }*/

      laserGroup.overlap(rockGroup,handleCollision)
       
      
    spawnRock()
    drawSprites()
    
  }
}

function handleCollision(lsr,rck){
  //console.log("im here")
  lsr.destroy()
 
 if(rck.scale === 0.1){
 // console.log("i'm in 0.1")
  rck.destroy()
}

 if(rck.scale === 0.15){
  //console.log("i'm in 0.15")
  rck.scale = 0.1
  rck.tint = "rgba(255,255,255,0.65)"
}

 if(rck.scale === 0.2){
   //console.log("i'm in 0.2")
   rck.scale = 0.15
   rck.tint = "rgba(255,255,255,0.85)"
 }
 
  

}

function createLaser() {
  
var laser = createSprite(spaceship.x,spaceship.y , 30, 30)
  laser.addImage(laserImg)
  //laser.y = 2;
  //laser.x = spaceship.x;
  laser.velocityY = -4;
  laser.lifetime = 200;
  laser.scale = 0.3;
  laserGroup.add(laser)

  spaceship.depth = laser.depth+1
}


function spawnRock() {
if (World.frameCount % 100 === 0) {
var rock = createSprite(random(50,590),0,50,50)
rock.addImage(rockImg);
rock.velocityY = 5;
rockGroup.add(rock);  
rock.scale = 0.2
rock.alpha =0.5

} 
 
}




  



