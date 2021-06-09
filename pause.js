function pause(scrin,musicon,soundson,schet,speed,line1,line2,car,Nspawned,rand,walls,Nlines1,Nlines2){
  //Канвас
  var ctx = canvas_ex.getContext('2d');
  var w = canvas_ex.width;
  var h = canvas_ex.height;
  //Габариты кнопок
  var squarebut = 150;
  //Нажатие кнопок
  var pausebut = false;
  var backtolevels = false;
  //Картинки
  var back = document.getElementById("back");
  var butback = document.getElementById("butback");
  var butbackclick = document.getElementById("butbackclick");
  var butmusic = document.getElementById("butmusic");
  var butmusicclick = document.getElementById("butmusicclick");
  var butsounds = document.getElementById("butsounds");
  var butsoundsclick = document.getElementById("butsoundsclick");
  var butbacktolevels = document.getElementById("butbacktolevels");
  var butbacktolevelsclick = document.getElementById("butbacktolevelsclick");

  beginpause()
  //Функция отрисовки начальных объектов
  function beginpause(){

    //Кнопки
    if(pausebut == true){
      ctx.drawImage(butpause, 10, 10,squarebut,squarebut);
    }
    if(pausebut == false){
      ctx.drawImage(butpauseclick, 10, 10,squarebut,squarebut);
    }

    if(backtolevels == false){
      ctx.drawImage(butbacktolevels, 20 + squarebut, 10,squarebut,squarebut);
    }
    if(backtolevels == true){
      ctx.drawImage(butbacktolevelsclick, 20 + squarebut, 10,squarebut,squarebut);
    }

    if (musicon==true){
      ctx.drawImage(butmusic, w/2-3/2*squarebut, h/2-squarebut/2,squarebut,squarebut);
    }
    if (musicon==false){
      ctx.drawImage(butmusicclick, w/2-3/2*squarebut, h/2-squarebut/2,squarebut,squarebut);
    }
    if (soundson==true){
      ctx.drawImage(butsounds, w/2+squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
    if (soundson==false){
      ctx.drawImage(butsoundsclick, w/2+squarebut/2, h/2-squarebut/2,squarebut,squarebut);
    }
  }

  //Если отпускается кнопка
  canvas_ex.onmouseup = function(e){
    var m = get_mouse_coords(e);
    if (scrin=='pause'){
      //Назад
      if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) && (pausebut==true) ){
        pausebut = false;
        scrin='level1';
        level1(scrin,musicon,soundson,schet,speed,line1,line2,car,Nspawned,rand,walls,Nlines1,Nlines2);
      }

      if ( (m.x<(2*squarebut+20)) && (m.x>(20+squarebut)) && (m.y<squarebut+10) && (m.y>10) && (backtolevels==true) ){
        backtolevels = false;
        scrin='levels'
        driving.pause();
        levels(scrin,musicon,soundson)
      }
    }
  }

  //Если нажатие на кнопку
  canvas_ex.onmousedown = function(e){
    var m = get_mouse_coords(e);

    if (scrin=='pause'){
      //Назад
      if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) ){
        if (soundson == true){
          butsound.play();
        }
        pausebut = true;
        beginpause()
      }

      if ( (m.x<(2*squarebut+20)) && (m.x>(20+squarebut)) && (m.y<squarebut+10) && (m.y>10) ){
        if (soundson == true){
          butsound.play();
        }
        backtolevels = true;
        beginpause()
      }
      //Музыка
      if ( (m.x<w/2-squarebut/2) && (m.x>w/2-3/2*squarebut) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
        if (soundson == true){
          butsound.play();
        }
        if (musicon==true){
          musicon = false;
          music.pause()
          beginpause()
        }
        else if (musicon==false){
          musicon = true;
          music.play()
          beginpause()
        }
      }
      //Звук
      if ( (m.x<w/2+3/2*squarebut) && (m.x>w/2+squarebut/2) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
        if (soundson==true){
          soundson = false;
          driving.pause();
          beginpause()
        }
        else if (soundson==false){
          soundson = true;
          driving.play();
          beginpause()
        }
        if (soundson == true){
          butsound.play();
        }
      }
    }
  }

}
