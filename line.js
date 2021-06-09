function Line(x,y,w=100,h=30){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  var that = this;

  this.draw = function(ctx){
    ctx.lineWidth = that.h;
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(that.x,that.y);
    ctx.lineTo(that.x-that.w,that.y);
    ctx.stroke();
}

this.swimTo = function(dx){
  that.x+=dx;
}

}
