class PAPER{
        constructor(x,y){
            var options={
                isStatic:false,
                restitution:0.3,
                friction:0,
                density:1.2
            }
            this.body=Bodies.circle(x,y,30,options);
            World.add(world,this.body);
            this.image=loadImage("paper.png");
            this.r=30;
        }
       display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
       } 
}