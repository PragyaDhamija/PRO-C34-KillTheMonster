class Hero{
    constructor(){
        var options={
            'density' : 1,
            'frictionAir' : 0.5
        }
        this.b = Bodies.circle(200,200,200,options);
        this.image = loadImage("sprites/Superhero1.png")
        World.add(world,this.b);

    }
    display(){
        var pos = this.b.position
        push()
        translate(pos.x,pos.y);
        rotate(this.b.angle);
        imageMode(CENTER);
        image(this.image,0,0,550,200);
        pop()
    }
}