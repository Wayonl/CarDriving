function level1(scrin,musicon,soundson,schet,speed,line1,line2,car,Nspawned,rand,walls,Nlines1,Nlines2) {
  var pausebut = false;
  var squarebut = 150;

  //КАНВАС
  var ctx = canvas_ex.getContext('2d');
  var w = canvas_ex.width;
  var h = canvas_ex.height;
  var pausa = 0;
  var lose = false;


  var line = new Line(0,0);
  var enemy = new Enemy(0,0);



  var Nenemy=[1,1,1,2,2,2,1,1,1,2,2,2];

  var enemy = [[new Enemy(w+enemy.w,h/2-line.h-enemy.h)],[new Enemy(w+enemy.w,h/2)],[new Enemy(w+enemy.w,h/2+line.h+enemy.h)],[new Enemy(w+enemy.w,h/2-line.h-enemy.h),new Enemy(w+enemy.w,h/2)],[new Enemy(w+enemy.w,h/2-line.h-enemy.h),new Enemy(w+enemy.w,h/2+line.h+enemy.h)],[new Enemy(w+enemy.w,h/2),new Enemy(w+enemy.w,h/2+line.h+enemy.h)],[new Enemy(w+enemy.w,h/2-line.h-enemy.h)],[new Enemy(w+enemy.w,h/2)],[new Enemy(w+enemy.w,h/2+line.h+enemy.h)],[new Enemy(w+enemy.w,h/2-line.h-enemy.h),new Enemy(w+enemy.w,h/2)],[new Enemy(w+enemy.w,h/2-line.h-enemy.h),new Enemy(w+enemy.w,h/2+line.h+enemy.h)],[new Enemy(w+enemy.w,h/2),new Enemy(w+enemy.w,h/2+line.h+enemy.h)]]
  /*var enemy1 = new Enemy(w/2,h/2-line.h-enemy.h);
  var enemy2 = new Enemy(w/2,h/2);
  var enemy3 = new Enemy(w/2,h/2+line.h+enemy.h);*/


  if (Nspawned==0){
  spawn()
  }

  if (soundson==true){
    driving.volume = 0.05;
  driving.play();
  }

  begin()
  control()

////////////////////////////////////////////////////////////////////////////////
    function spawn(){
      var bool = true;
      while(bool){
        bool = false;
      rand[Nspawned]= Math.floor(Math.random()*12);
      for (var i = 0;i<Nspawned;i++){
        if(i!=Nspawned){
          if(rand[Nspawned]==rand[i]){
            bool = true;
          }
        }
      }
    }
      walls[Nspawned] =enemy[rand[Nspawned]];
      Nspawned+=1;
    }
////////////////////////////////////////////////////////////////////////////////
  function draw() {
    ctx.clearRect(0, 0, w, h);
    begin()
  }
////////////////////////////////////////////////////////////////////////////////
  function collision(){
    for(var j = 0;j<Nspawned;j++){
        for (var i=0;i<Nenemy[rand[j]];i++){
          if((car.x-car.w/2<walls[j][i].x+(3*walls[j][i].w/2))&&(car.x+car.w/2>walls[j][i].x+walls[j][i].w/2)&&(car.y-car.h/2<walls[j][i].y+walls[j][i].h/2)&&(car.y+car.h/2>walls[j][i].y-walls[j][i].h/2)){
            console.log('oops');
            lose = true;
          }
      }
    }
  }




////////////////////////////////////////////////////////////////////////////////
  function phys(){

    collision()

    if (schet>20) {
      speed = -6;
    }
    if (schet>30) {
      speed = -7;
    }
    if (schet>40) {
      speed = -8;
    }
    if (schet>60) {
      speed = -9;
    }
    if (schet>70) {
      speed = -10;
    }
    if (schet>90) {
      speed = -11;
    }
    if (schet>100) {
      speed = -12;
    }
    if (schet>110) {
      speed = -13;
    }
    if (schet>130) {
      speed = -14;
    }
    if (schet>150) {
      speed = -15;
    }
    for (var i = 0;i<Nlines1;i++){
      line1[i].swimTo(speed);
    if((line1[i].x+line1[i].w)<line1[i].w)
    line1[i].x=w+line1[i].w;
  }

  for (var i = 0;i<Nlines2;i++){
    line2[i].swimTo(speed);
  if((line2[i].x+line2[i].w)<line2[i].w)
  line2[i].x=w+line2[i].w;
}

for(var j = 0;j<Nspawned;j++){
    for (var i=0;i<Nenemy[rand[j]];i++){
      walls[j][i].swimTo(speed);
      if((walls[j][i].x+walls[j][i].w)<walls[j][i].w){
        walls[j][i].x = w + walls[j][i].w;
        Nspawned-=1;
        schet+=1;
        walls.splice(j, 1);
        rand.splice(j, 1);
      }
  }
}



  }

////////////////////////////////////////////////////////////////////////////////
function control(){
  if ((pausa ==0)&&(lose==false)){
  phys();
  draw();
  setTimeout(control,1000/120);
}
if(lose==true){
  ctx.drawImage(boom, car.x-(car.w*3/2), car.y-car.h/2*3,car.w*3,car.h*3);
  driving.pause();
  if (soundson==true){
    boomsound.volume=0.05;
    boomsound.play();
  }
  scrin='restartmenu';
  restartmenu(scrin,musicon,soundson)
}
}

////////////////////////////////////////////////////////////////////////////////
  function begin(){
    //ФОН
    ctx.fillStyle ='black';
    ctx.beginPath()
    ctx.moveTo(0,0);
    ctx.lineTo(w,0);
    ctx.lineTo(w,h);
    ctx.lineTo(0,h);
    ctx.lineTo(0,0);
    ctx.fill();


    for (var i = 0;i<Nlines1;i++){
      line1[i].draw(ctx);
    }
    for (var i = 0;i<Nlines2;i++){
      line2[i].draw(ctx);
    }
    car.draw(ctx);

for(var j = 0;j<Nspawned;j++){
    for (var i=0;i<Nenemy[rand[j]];i++){
      walls[j][i].draw(ctx);

  }
}

  if((walls[Nspawned-1][0].x<(w-600-Math.random()*700))){
  spawn();
}

ctx.beginPath();
ctx.fillStyle='white';
ctx.font = 'bold 50px sans-serif';
ctx.fillText("Ваш счёт:"+schet, w-500, 50);




    if(pausebut == false){
      ctx.drawImage(butpause, 10, 10,squarebut,squarebut);
    }
    if(pausebut == true){
      ctx.drawImage(butpauseclick, 10, 10,squarebut,squarebut);
    }
  }
////////////////////////////////////////////////////////////////////////////////
canvas_ex.onmousedown = function(e){
  var m = get_mouse_coords(e);
  if (scrin=='level1'){
  if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) ){
    if (soundson == true){
      butsound.play();
      }
        pausebut = true;
        begin();
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////
canvas_ex.onmouseup = function(e){
  var m = get_mouse_coords(e);
  if (scrin=='level1'){
    //Назад
    if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) && (pausebut==true) ){
      pausebut = false;
      scrin='pause';
      pausa = 1;
      pause(scrin,musicon,soundson,schet,speed,line1,line2,car,Nspawned,rand,walls,Nlines1,Nlines2)
    }

    if ( ( (m.x>=squarebut+10) || (m.x<=10) || (m.y>=squarebut+10) || (m.y<=10) ) && (pausebut==true) ){
      pausebut = false;
      ctx.clearRect(0, 0, w, h);
      begin()
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
document.addEventListener('keyup', function(event) {
  if ((event.code == 'ArrowUp')&&(scrin=='level1')){
    if(car.y-h/3>0){
    car.y-=h/3;
  }
  }
});
////////////////////////////////////////////////////////////////////////////////
document.addEventListener('keyup', function(event) {
  if ((event.code == 'ArrowDown')&&(scrin=='level1')){
    if(car.y+h/3<h){
    car.y+=h/3;
  }
  }
});
////////////////////////////////////////////////////////////////////////////////
}
