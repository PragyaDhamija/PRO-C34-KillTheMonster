class Rope{
    constructor(mypoint,mybody){
        var options={
            bodyA : mybody,
            pointB : mypoint,
            'stiffness' : 1.2,
            'length' : 1350
        }
        this.r = Constraint.create(options);
        World.add(world,this.r);
        this.p = mypoint;

    }
    display() {
        var posA = this.r.bodyA.position
        var posB = this.p;
        push()
        strokeWeight(0);
        line(posB.x,posB.y,posA.x,posA.y)
        pop()
        
    }
}