function Car(x,y,w=300,h=150){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  var that = this;

  this.draw = function(ctx){
    ctx.drawImage(carpic, that.x-(that.w), that.y-that.h/2,that.w,that.h);
}

}
