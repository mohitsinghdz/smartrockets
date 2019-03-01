function Population (m,num){
 this.mutationRate = m;
 this.matingPool;
 this.generations = 0;
 this.population;
 for(var i =0;i<num.length;i++)
 {
    position = createVector((width/2),height+20);
    population[i] =  new Rocket(position, new dna(),population.length);
 }
}

Population.prototype.live = function(os){
    for(i=0;i<this.population.length;i++)
    {
        population[i].checkTarget();
        population[i].run(os);
    }
}

Population.prototype.targetReached= function(){
    for(i=0;i<this.population.length; i++){
        if(population[i].hitTarget) return true;
  
    }

    return false;
}

Population.prototype.fitness = function (){
    for (i=0;i<population.length;i++){
        population[i].fitness();
    }
}

Population.prototype.selection = function () {

    matingPool.clear();
    var maxFitness = getMaxFitness();
    for(i=0;i<population.length;i++){
        var fitnessNormal = map(population[i].getFitness(),0,maxFitness,0,1);

        var n = fitnessNormal*100;
        for(var j=0;j<n;j++){
            matingPool.add(population[i]);
        }
    }

}

Population.prototype.reproduction = function() {

    for(i=0;i<population.length;i++){
        var a = random(matingPool.size());
        var b = random(matingPool.size());
        var parent_A = matingPool.get(a);
        var parent_B = matingPool.get(b);
        var genes_a = parent_A.getDNA();
        var genes_b = parent_B.getDNA();

        var child = genes_a.crossover(genes_b);

        child.mutate(mutationRate);
        var  position = createVector(width/2, height+20);
        population[i] = new Rocket(position,child,population.length); 
        
    }

    generations++;
} 

Population.prototype.getGenerations = function(){
    return generations;
}

Population.prototype.getMaxFitness = function () {

        var record = 0;
        for(var i=0;i<popualation.length;i++){
            if(popualation[i].getFitness() > record)
            {
                record = population[i].getFitness();
            }
        }

        return record;
}