class Box{
  constructor(x, y, width, height, c){
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.c = c;
    World.add(world, this.body);
  }

  display(){
    push();
    rectMode(CENTER);
    fill(this.c);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
  }

}
