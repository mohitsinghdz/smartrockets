var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 500;
var ry = 550;
var rw = 600;
var rh = 10;
var generation = 0;
function setup() {
  createCanvas(1366, 700);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html(count);
    lifeP.html(generation);
  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);

  rect(rx-600, ry-300, rw, rh);
  
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
