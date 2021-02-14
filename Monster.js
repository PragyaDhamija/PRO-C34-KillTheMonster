class Monster{
    constructor() {
        var options={
            
        }
        this.m = Bodies.rectangle(1200,300,200,200,options);
        this.image = loadImage("sprites/Monster1.png");
        World.add(world,this.m);
    }
    display() {
        var pos = this.m.position
        push()
        translate(pos.x,pos.y);
        rotate(this.m.angle);
        imageMode(CENTER);
        image(this.image,0,0,200,200);
        pop()
    }
}