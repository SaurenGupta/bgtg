class Division {
    constructor(x,y,w,h){
        var option = {

            isStatic: true 

        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.postion;
        rectMode(CENTER)
        fill("white")
        rect(po.x , pos.y , this.w , this.h)
    }
};