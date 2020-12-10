class Mango{
    constructor(x, y, radius) {
        var options = {
          isStatic:true,
          'friction':1.0,
        
        }
        this.body = Bodies.elipse(x, y, radius, options);
        this.radius = radius;
     
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        elipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}
