class ball {
  constructor(x, y, r, width, height, ) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 0.1
    }
    this.r = r
    this.width = width;
    this.height = height;
    this.body = Bodies.circle(x, y, r, options);
    // this.image = loadImage("cPaperMain.png");
    this.image = loadImage("basketballMain.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    // rotate(angle);
    fill("black");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r+30);
    pop();
  }
};

