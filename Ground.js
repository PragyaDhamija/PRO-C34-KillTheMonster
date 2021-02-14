class Ground{
    constructor(){
        var options={
            'isStatic' : true
        }
        this.g = Bodies.rectangle(600, 600, 3000,20, options);
        World.add(world,this.g);

    }
    display(){
        rectMode(CENTER)
        fill("brown")
        rect(600, 600, 3000,20)
    }
}