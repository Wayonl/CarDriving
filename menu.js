window.addEventListener('load', main, false);

function main(){
  menu('menu',true,true,true);
}

function menu(scrin,musicon,soundson,musicfirst){
//Канвас
var ctx = canvas_ex.getContext('2d');
var w = canvas_ex.width;
var h = canvas_ex.height;
//Картинки
var back = document.getElementById("back");
var but = document.getElementById("but");
//Габариты кнопок
var lenghtbut = 478;
var hightbut = 136;
//Нажатие кнопок
var playbut = false;
var settingsbut = false;


beginmenu()
//Функция отрисовки начальных объектов
function beginmenu(){
  //Фон
  ctx.drawImage(back, 0, 0,w,h);

  //Кнопки
  ctx.drawImage(but, w/2-lenghtbut/2, h/2-hightbut-10,lenghtbut,hightbut); //Играть
  ctx.drawImage(but, w/2-lenghtbut/2, h/2+10,lenghtbut,hightbut); //Настройки

  //Надписи
  ctx.fillStyle='white';
  ctx.font = 'bold 50px sans-serif';
  ctx.fillText("Играть", w/2-75, h/2-hightbut/2+2);//Играть
  ctx.fillText("Настройки", w/2-125, h/2+hightbut/2+20);//Настройки

  //Если нажатие на кнопку
  canvas_ex.onmousedown = function(e){
    var m = get_mouse_coords(e);
    if (musicfirst==true){
      music.volume = 0.025;
      butsound.volume = 0.5;
      music.play();
      musicfirst = false;
    }
    if (scrin=='menu'){
      //Играть
      if ( (m.x<w/2+lenghtbut/2) && (m.x>w/2-lenghtbut/2) && (m.y<h/2-10) && (m.y>h/2-hightbut-10) ){
        if (soundson == true){
          butsound.play();
        }
        ctx.fillStyle='silver';
        ctx.font = 'bold 50px sans-serif';
        ctx.fillText("Играть", w/2-75, h/2-hightbut/2+2);//Играть
        playbut = true;
      }
      //Настройки
      if ( (m.x<w/2+lenghtbut/2) && (m.x>w/2-lenghtbut/2) && (m.y<h/2+hightbut+10) && (m.y>h/2+10) ){
        if (soundson == true){
          butsound.play();
        }
        ctx.fillStyle='silver';
        ctx.font = 'bold 50px sans-serif';
        ctx.fillText("Настройки", w/2-125, h/2+hightbut/2+20);//Настройки
        settingsbut = true;
      }
    }

  }

  //Если отпускается кнопка
  canvas_ex.onmouseup = function(e){
    var m = get_mouse_coords(e);
    if (scrin=='menu'){
      //Играть
      if ( (m.x<w/2+lenghtbut/2) && (m.x>w/2-lenghtbut/2) && (m.y<h/2-10) && (m.y>h/2-hightbut-10) && (playbut==true) ){
        playbut = false;
        scrin='levels'
        levels(scrin,musicon,soundson)
      }

      if ( ( (m.x>=w/2+lenghtbut/2) || (m.x<=w/2-lenghtbut/2) || (m.y>=h/2-10) || (m.y<=h/2-hightbut-10) ) && (playbut==true) ){
        playbut = false;
        ctx.clearRect(0, 0, w, h);
        beginmenu()
      }

      //Настройки
      if ( (m.x<w/2+lenghtbut/2) && (m.x>w/2-lenghtbut/2) && (m.y<h/2+hightbut+10) && (m.y>h/2+10) && (settingsbut==true)){
        settingsbut = false;
        scrin='settings'
        settings(scrin,musicon,soundson)
      }

      if ( ( (m.x>=w/2+lenghtbut/2) || (m.x<=w/2-lenghtbut/2) || (m.y>=h/2+hightbut+10) || (m.y<=h/2+10) ) && (settingsbut==true) ){
        settingsbut = false;
        ctx.clearRect(0, 0, w, h);
        beginmenu()
      }
    }
  }
}

}
