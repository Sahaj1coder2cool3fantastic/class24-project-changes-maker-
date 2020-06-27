class Dustbin {
    constructor(x,y) {
    this.x = x,
    this.y = y,
    this.height = 200,
    this.width = 70,
    this.thickness = 20,
    this.angle = 0
    }

    this.bottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
    this.right = Bodies.rectangle(this.x + this.width/2,this.y - this.height/2,this.thickness,this.height{isStatic:true});
    this.left = Bodies.rectangle(this.x - this.width/2,this.y - this.height/2,this.thickness,this.height{isStatic:true});

World.add(world,this.bottom);
World.add(world,this.left);
World.add(world,this.right);
}
