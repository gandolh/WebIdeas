class Vehicle {
  
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(1, -2);
    this.position = createVector(x, y);
    this.r = 12;
    this.maxspeed = 16;
    this.maxforce = 0.5;
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  applyForce(force) {
    this.acceleration.add(force);
  }
  
  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    desired.normalize();
    desired.mult(this.maxspeed);
    // desired.mult(0.05); // I stedet for de to linjene over
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }
  
  display() {
    // Figuren er tegnet med origo midt i et 6x12 rutenett. 
    // Spissen er tegnet opp.
    // For at theta skal være null når hastigheten er mot høyre
    // legger vi til 90 grader på theta
    this.theta = this.velocity.heading() + PI/2;
    fill('#fc5185');
    // push();
    translate(this.position.x, this.position.y);
    rotate(this.theta);
    beginShape();
    vertex(0, -this.r*2); // Spiss oppover
    vertex(-this.r, this.r*2); // Nedre venstre hjørne
    vertex(this.r, this.r*2); // Øvre høyre hjørne
    endShape(CLOSE);
    // pop();
  }
  
}
    