function Enemy(x,y,w=100,h=250){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  var that = this;

  this.draw = function(ctx){
    ctx.drawImage(enemypic, that.x-that.w, that.y-that.h/2,that.w,that.h);
}

this.swimTo = function(dx){
  that.x+=dx;
}

}
