function Obstacle (x, y, w_, h_)
{
    this.position = createVector(x, y);
    this.h = h_;
    this.w = w_;
}

Obstacle.prototype.display= function () {
    stroke(0);
    fill(175);
    strokeWeight(2);
    rectMode(CORNER);
    rect(position.x,position.y,w,h);
}

Obstacle.prototype.contains = function (spot){
    if (spot.x > position.x && spot.x < position.x + w && spot.y > position.y && spot.y < position.y + h) {
        return true;
      } else {
        return false;
      }
}