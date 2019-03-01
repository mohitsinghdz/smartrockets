var lifetime;
var lifecycle;
var recordtime;
var target ; //= new Obstacle();
var obstacles = [];
function setup(){
    createCanvas(1600, 1200);
    lifetime = 300; ///300 cycles per generations
    lifecycle = 0;
    recordtime = lifetime;
    target = new Obstacle(width/2-12,24,24,24);
    var mutationRate = 0.01; /// higher mutation is riskier 
    population = new Population(mutationRate,50);

}

function draw(){
    
    console.log(population);
}