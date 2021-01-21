class Polygon {
    constructor(x, y, r) {
      var options = {
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r=r;
      World.add(world, this.body);
      this.image = loadImage("polygon.png");
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      //ellipse(pos.x, pos.y, this.r, this.r);
      imageMode(CENTER);
          image(this.image, pos.x, pos.y, this.r , this.r);
          pop();
      
    }
  }