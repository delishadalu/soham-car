class Ground{

    constructor(x,y,width,height){
        this.image = loadImage("Car1.png");
        this.image = loadImage("car2.jpg")
        this.image = loadImage("Car3.png")
    
    
    
    this.body= Bodies.rectangle(x,y,width,height,{isStatic:true})
    World.add(world,this.body)
    this.width=width;
    this.height=height;
    }
    
    }