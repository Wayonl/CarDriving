function settings(scrin,musicon,soundson){
  //Канвас
  var ctx = canvas_ex.getContext('2d');
  var w = canvas_ex.width;
  var h = canvas_ex.height;
  //Габариты кнопок
  var squarebut = 150;
  //Нажатие кнопок
  var backtomenubut = false;
  //Картинки
  var back = document.getElementById("back");
  var butback = document.getElementById("butback");
  var butbackclick = document.getElementById("butbackclick");
  var butmusic = document.getElementById("butmusic");
  var butmusicclick = document.getElementById("butmusicclick");
  var butsounds = document.getElementById("butsounds");
  var butsoundsclick = document.getElementById("butsoundsclick");

  ctx.clearRect(0, 0, w, h);
  beginsettings()
  //Функция отрисовки начальных объектов
  function beginsettings(){
    //Фон
    ctx.drawImage(back, 0, 0,w,h);

    //Кнопки
    if(backtomenubut == false){
      ctx.drawImage(butback, 10, 10,squarebut,squarebut);
    }
    if(backtomenubut == true){
      ctx.drawImage(butbackclick, 10, 10,squarebut,squarebut);
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

  //Если нажатие на кнопку
  canvas_ex.onmousedown = function(e){
    var m = get_mouse_coords(e);

    if (scrin=='settings'){
      //Назад
      if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) ){
        if (soundson == true){
          butsound.play();
        }
        backtomenubut = true;
        beginsettings()
      }
      //Музыка
      if ( (m.x<w/2-squarebut/2) && (m.x>w/2-3/2*squarebut) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
        if (soundson == true){
          butsound.play();
        }
        if (musicon==true){
          musicon = false;
          music.pause()
          beginsettings()
        }
        else if (musicon==false){
          musicon = true;
          music.play()
          beginsettings()
        }
      }
      //Звук
      if ( (m.x<w/2+3/2*squarebut) && (m.x>w/2+squarebut/2) && (m.y<h/2+squarebut/2) && (m.y>h/2-squarebut/2) ){
        if (soundson==true){
          soundson = false;
          beginsettings()
        }
        else if (soundson==false){
          soundson = true;
          beginsettings()
        }
        if (soundson == true){
          butsound.play();
        }
      }
    }
  }

  //Если отпускается кнопка
  canvas_ex.onmouseup = function(e){
    var m = get_mouse_coords(e);
    if (scrin=='settings'){
      //Назад
      if ( (m.x<squarebut+10) && (m.x>10) && (m.y<squarebut+10) && (m.y>10) && (backtomenubut==true) ){
        backtomenubut = false;
        scrin='menu'
        menu(scrin,musicon,soundson,false)
      }

      if ( ( (m.x>=squarebut+10) || (m.x<=10) || (m.y>=squarebut+10) || (m.y<=10) ) && (backtomenubut==true) ){
        backtomenubut = false;
        ctx.clearRect(0, 0, w, h);
        beginsettings()
      }
    }
  }

}
