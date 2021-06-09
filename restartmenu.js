function restartmenu(scrin,musicon,soundson){
  //Канвас
  var ctx = canvas_ex.getContext('2d');
  var w = canvas_ex.width;
  var h = canvas_ex.height;
  //Габариты кнопок
  var squarebut = 150;
  //Нажатие кнопок
  var restart = false;
  var backtolevels = false;
  //Картинки
  var back = document.getElementById("back");
  var butrestart = document.getElementById("butrestart");
  var butrestartclick = document.getElementById("butrestartclick");
  var butbacktolevels = document.getElementById("butbacktolevels");
  var butbacktolevelsclick = document.getElementById("butbacktolevelsclick");

  beginres()
  //Функция отрисовки начальных объектов
  function beginres(){

    //Кнопки
    if(backtolevels == true){
      ctx.drawImage(butbacktolevelsclick, 10, 10,squarebut,squarebut);
    }
    if(backtolevels == false){
      ctx.drawImage(butbacktolevels, 10, 10,squarebut,squarebut);
    }

    if(restart == true){
      ctx.drawImage(butrestartclick, w/2-squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
    if(restart == false){
      ctx.drawImage(butrestart, w/2-squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }

  }

  //Если отпускается кнопка
  canvas_ex.onmouseup = function(e){
    var m = get_mouse_coords(e);
    if (scrin=='restartmenu'){
      //Назад
      if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) && (backtolevels==true) ){
        backtolevels = false;
        scrin='levels';
        levels(scrin,musicon,soundson);
      }


      if ( (m.x<(w/2+squarebut/2)) && (m.x>(w/2-squarebut/2)) && (m.y<(h/2+squarebut/2)) && (m.y>(h/2-squarebut/2)) && (restart==true) ){
        restart = false;
        scrin='level1'
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


    }
  }

  //Если нажатие на кнопку
  canvas_ex.onmousedown = function(e){
    var m = get_mouse_coords(e);

    if (scrin=='restartmenu'){

      if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) ){
        if (soundson == true){
          butsound.play();
        }
        backtolevels = true;
        beginres()
      }

      if ( (m.x<(w/2+squarebut/2)) && (m.x>(w/2-squarebut/2)) && (m.y<(h/2+squarebut/2)) && (m.y>(h/2-squarebut/2)) ){
        if (soundson == true){
          butsound.play();
        }
        restart = true;
        beginres()
      }
    }
  }

}
