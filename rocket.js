function Rocket (l,dna,totalRockets){
 this.genecounter = 0;
 this.hitObsTacle =false;
 this.hitTarget= false;
 this.fitness;
 this.acceleration = createVector(0,0);
 this.velocity = createVector(0, 0);
 this.position = l.get();
 this.r =4;
 this.dna = dna;
 this.finishTime = 0;
 this.recordDist = 10000;

}

Rocket.prototype.fitness= function () {
 if(this.recordDist <1 ) this.recordDist = 1;   
    this.fitness = (1/this.finishTime *this.recordDist);
    this.fitness = pow(this.fitness,4);

    if(this.hitObsTacle) this.fitness *= 0.1;         //decrease health marginally if an obstacle is hit
    if(this.hitTarget) this.fitness*=2;               //increse fitness if target is achieved
} 

Rocket.prototype.run = function(ob){
    if(!this.hitObsTacle && !this.hitTarget)
    {
        this.applyForce(dna.genes[this.genecounter])  //genes is it self a vector
        genecounter = (genecounter + 1)% dna.genes.length
        update();
        //if obstacle 'is hit create new obstacle
        Obstacles(os);
    }
    if(!hitObsTacle)
    display();
}

Rocket.prototype.applyForce = function(f)
{
    this.acceleration.add(f);  //add new vector to accerlation
}

Rocket.prototype.update =  function () {

    this.velocity.add(this.acceleration);
    this.position.add(velocity);
    this.acceleration.mult(0);

}
Rocket.prototype.display = function () {
    //var theta = this.velocity.heading2D() + PI/2;
    fill(200,200);
    stroke(0);
    strokeWeight(1);
    pushMatrix();
  //  translate(this.position.x, this.position.y);
    rotate(theta);

    rectMode(CENTER);
    fill(0);
    rect(-r/2,r*2,r/2,r);
    rect(r/2,r*2,r/2,r);
    
    fill(175);
    beginShape(TRIANGLES);
    vertex(0, -r*2);
    vertex(-r, r*2);
    vertex(r, r*2);
    endShape();

    popMatrix();

}

Rocket.prototype.getFitness = function(){
    return this.fitness;
}
Rocket.prototype.getDNA = function(){
    return this.dna;
}
Rocket.prototype.stopped = function ()
{
    return hitObsTacle;
}
