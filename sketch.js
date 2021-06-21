const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var score=0;


function preload(){
backgroundImg = loadImage("Rtrack.jpg")
car1Img = loadImage("Car1.png")
car2Img = loadImage("car2.jpg")
car3Img = loadImage("Car3.png")
}



function setup() {
  createCanvas(1920,866);
  engine= Engine.create()
  world=engine.world
  Engine.run(engine)

  car1 = new Car(73,345,50,60)
 car2 = new Car(70,445,50,60)
 car3 = new Car(73,563,50,60)

 ground1= new Ground(width/2,376,width,10)
 ground2= new Ground(width/2,485,width,10)
 ground3= new Ground(width/2,577,width,10)


}

function draw() {
  rectMode(CENTER)
  background(backgroundImg);
  textSize(40)  
text("Score"+score,654,198)
car1.display()
car2.display()
car3.display()

textSize(40)
text(mouseX+":"+mouseY,200,200)

  drawSprites();  
  Matter.Body.applyForce(car2.body,car1.body.position,{x:0.3,y:0})
  Matter.Body.applyForce(car3.body,car1.body.position,{x:0.3,y:0})

}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
//Car1.x=Car1.x-20
Matter.Body.applyForce(car1.body,car1.body.position,{x:30,y:0})
}


}
