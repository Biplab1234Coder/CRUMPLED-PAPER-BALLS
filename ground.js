class ground{

    constructor(x, y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    display(){

        push();
        translate(this.x, this.y);
        pop();
        noFill();

        
    }
}