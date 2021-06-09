function levels(scrin,musicon,soundson){
  //Канвас
  var ctx = canvas_ex.getContext('2d');
  var w = canvas_ex.width;
  var h = canvas_ex.height;
  //Картинки
  var back = document.getElementById("back");
  var butback = document.getElementById("butback");
  var butbackclick = document.getElementById("butbackclick");
  var butlevel = document.getElementById("butlevel");
  //Нажатие кнопок
  var backtomenubut2 = false;
  var level1but = false;
  var level2but = false;
  var level3but = false;
  //Габариты кнопок
  var squarebut = 150;


  ctx.clearRect(0, 0, w, h);
  beginlevels()
  //Функция отрисовки начальных объектов
  function beginlevels(){
    //Фон
    ctx.drawImage(back, 0, 0,w,h);
    //Кнопки
    if(backtomenubut2 == false){
      ctx.drawImage(butback, 10, 10,squarebut,squarebut);
    }
    if(backtomenubut2 == true){
      ctx.drawImage(butbackclick, 10, 10,squarebut,squarebut);
    }

    if(level1but == false){
      ctx.drawImage(butlevel, w/2-squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
    if(level1but == true){
      ctx.drawImage(butlevelclick, w/2-squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
    ctx.fillStyle='white';
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText("GO", w/2-squarebut/2+40, h/2+20);//1

    /* if(level2but == false){
      ctx.drawImage(butlevel, w/2-squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
    if(level2but == true){
      ctx.drawImage(butlevelclick, w/2-squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
    ctx.fillStyle='white';
    ctx.font = 'bold 70px sans-serif';
    ctx.fillText("2", w/2-20, h/2+20);//2

    if(level3but == false){
      ctx.drawImage(butlevel, w/2+squarebut, h/2-squarebut/2,squarebut,squarebut);
    }
    if(level3but == true){
      ctx.drawImage(butlevelclick, w/2+squarebut, h/2-squarebut/2,squarebut,squarebut);
    }
    ctx.fillStyle='white';
    ctx.font = 'bold 70px sans-serif';
    ctx.fillText("3", w/2-20+3/2*squarebut, h/2+20);//3 */

    //Если нажатие на кнопку
    canvas_ex.onmousedown = function(e){
      var m = get_mouse_coords(e);

      if (scrin=='levels'){
        //Назад
        if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) ){
          if (soundson == true){
            butsound.play();
          }
          backtomenubut2 = true;
          beginlevels()
        }
        //lvl1
        if ( (m.x<w/2+squarebut/2) && (m.x>w/2-squarebut/2) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
          if (soundson == true){
            butsound.play();
          }
          level1but = true;
          beginlevels()
        }
        /* //lvl2
        if ( (m.x<w/2+squarebut/2) && (m.x>w/2-squarebut/2) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
          if (soundson == true){
            butsound.play();
          }
          level2but = true;
          beginlevels()
        }
        //lvl3
        if ( (m.x<w/2+2*squarebut) && (m.x>w/2+squarebut) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
          if (soundson == true){
            butsound.play();
          }
          level3but = true;
          beginlevels()
        } */
      }
    }

    //Если отпускается кнопка
    canvas_ex.onmouseup = function(e){
      var m = get_mouse_coords(e);
      if (scrin=='levels'){
        //Назад
        if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) && (backtomenubut2==true) ){
          backtomenubut2 = false;
          scrin='menu'
          menu(scrin,musicon,soundson,false)
        }

        if ( ( (m.x>=squarebut+10) || (m.x<=10) || (m.y>=squarebut+10) || (m.y<=10) ) && (backtomenubut2==true) ){
          backtomenubut2 = false;
          ctx.clearRect(0, 0, w, h);
          beginlevels()
        }

        //lvl1
        if ( (m.x<w/2+squarebut/2) && (m.x>w/2-squarebut/2) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) && (level1but==true) ){
          level1but = false;
          scrin = 'level1';
          var schet = 0;
          var speed = -5;
          var line = new Line(0,0);
          var enemy = new Enemy(0,0);
          var dx = 0;
          var linex = w - line.w;
          var Nlines1 = 0;
          var Nlines2 = 0;
          var line1 = [];
          var line2 = [];

          for (var i = 0;linex>-line.w; i++){
            line1.push(new Line(w-line.w-dx, h/3));
            dx  += 2* line.w;
            linex  = line1[i].x-2* line.w;
            Nlines1+=1;
          }

          linex = w - line.w;
          var dx = 0;

          for (var i = 0;linex>-line.w; i++){
            line2.push(new Line(w-line.w-dx, 2*h/3));
            dx  += 2* line.w;
            linex  = line2[i].x-2* line.w;
            Nlines2+=1;
          }

          var car = new Car(500,h/2);
          var Nspawned = 0;
          var rand = [];
          var walls = [];
          level1(scrin,musicon,soundson,schet,speed,line1,line2,car,Nspawned,rand,walls,Nlines1,Nlines2);
        }
        if ( ( (m.x>=w/2+squarebut/2) || (m.x<=w/2-squarebut/2) || (m.y>=h/2+squarebut/2) || (m.y<=h/2-squarebut/2) ) && (level1but==true) ){
          level1but = false;
          ctx.clearRect(0, 0, w, h);
          beginlevels()
        }
        /* //lvl2
        if ( (m.x<w/2+squarebut/2) && (m.x>w/2-squarebut/2) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) && (level2but==true) ){
          level2but = false;
          scrin = 'level2';
          ctx.clearRect(0,0,w,h);
        }
        if ( ( (m.x>=w/2+squarebut/2) || (m.x<=w/2-squarebut/2) || (m.y>=h/2+squarebut/2) || (m.y<=h/2-squarebut/2) ) && (level2but==true) ){
          level2but = false;
          ctx.clearRect(0, 0, w, h);
          beginlevels()
        }
        //lvl3
        if ( (m.x<w/2+2*squarebut) && (m.x>w/2+squarebut) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) && (level3but==true) ){
          level3but = false;
          scrin = 'level3';
          ctx.clearRect(0,0,w,h);
        }
        if ( ( (m.x>=w/2+2*squarebut) || (m.x<=w/2+squarebut) || (m.y>=h/2+squarebut/2) || (m.y<=h/2-squarebut/2) ) && (level3but==true) ){
          level3but = false;
          ctx.clearRect(0, 0, w, h);
          beginlevels()
        } */
      }
    }
  }
}
