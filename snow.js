class Snowfall{
    constructor(x,y){
     var options = {
         restitution:1.5,
         friction:1.0,
         density:0.8
     }
    this.body=Bodies.circle(x,y,40,options)
this.image=loadImage("snow5.webp");
this.radius=40;
World.add(world,this.body)
}
display(){
    push();
    imageMode(CENTER);
    image(this.image,50,50,100,100)
        pop()
}
}