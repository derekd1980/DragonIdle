
class BasicBar {

    constructor(_x, _y, _width, _height,_color)
    {
      this.color = _color;
      this.x = _x;
      this.y = _y;
      this.width = _width;
      this.height = _height;
    }
      
   
    draw()
    {
        ctx.fillStyle = this.color;
        
        ctx.fillRect(this.y, this.y, this.width, this.height);
    }

}