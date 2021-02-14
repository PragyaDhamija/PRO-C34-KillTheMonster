class Box{
    constructor(x,y) {
        var options={
            'density' : 0.04,
            'restitution' : 0.8,
            'friction' : 1
        }
        this.bo = Bodies.rectangle(x,y,70,70,options);
        World.add(world,this.bo);

    }
    display() {
        var pos = this.bo.position
        push()
        translate(pos.x,pos.y);
        rotate(this.bo.angle);
        fill("red");
        strokeWeight(6)
        stroke("black");
        rectMode(CENTER);
        rect(0,0,70,70);
        pop()
    }
}