class Car{

    constructor(x,y,width,height){
        
        this.image = loadImage("Car3.png")
    
    
    
    this.body= Bodies.rectangle(x,y,width,height,{restitution:0,density:0.5,friction:1})
    World.add(world,this.body)
    this.width=width;
    this.height=height;
    
    
    }
    
    display()
    
    {
       push ()
        fill ("brown")
        imageMode(CENTER)
        translate (this.body.position.x,this.body.position.y)
        //rotate (this.body.angle)
       
        image (this.image,0,0,90,40)
      pop ()
    }
    
    }