class Bob{

    constructor(x,y,r){

     var options={
     isStatic : false ,
     restitution : 0.7,
     friction : 0.5 ,
     density : 1.2
     }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);

    }
    display(){

    var pos = this.body.position;

     push()
     translate(pos.x,pos.y)
     strokeWeight(0);
     fill("blue")
     ellipseMode(RADIUS)
     ellipse(0,0,this.r,this.r);
     pop()
    }

}