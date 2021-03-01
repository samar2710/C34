class Ball{
    constructor(x,y){
        var options={
            density:1.0,
            frictionAir:0.005
        }
        this.body= Matter.Bodies.rectangle(x,y,100,100);
        this.width = 100;
        this.height = 100;
        Matter.World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,100,100);
        pop();
    }
   
}