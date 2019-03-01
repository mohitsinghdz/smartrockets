
function dna (newgenes)
{
    this.genes = [];
    this.maxforce = 0.1; // let  oit be class variable

if(newgenes)
{
    this.genes = newgenes;
}
else
{
    for(var i =0;i<lifetime;i++)
    {
        var angle = random(TWO_PI);
        this.genes[i] = createVector(cos(angle), sin(angle));
        this.genes[i].mult(random(0,this.maxforce))
    }
   this.genes[0].normalize();
 }
    console.log(this.genes);
  
}
dna.prototype.getPhrase = function (){
    //return this.genes;
    return this.genes.join('');
}

dna.prototype.crossover = function (partner) {
    var child= [];
    var crossover = random(this.genes.length)
    for(i=0;i<this.genes.length;i++)
    {
        if(i > crossover) child[i] = this.genes[i];
        else child[i]= partner.genes[i]
    }
    var newdna = new dna(child);    //technically passing on parent;s  genes  //#endregion

return newdna;
}

dna.prototype.mutate= function (m) {
 for(i=0;i<this.genes.length; i++)
 {
     if(random(1)< m)
     {
        var angle = random(TWO_PI);
        genes[i] = createVector(cos(angle), sin(angle));
        genes[i].mult(random(0,maxforce));
        if(i==0) genes[i].normalize();
     }
 }   
}