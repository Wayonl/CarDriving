function get_mouse_coords(e){
  var m = {};
  var rect = canvas_ex.getBoundingClientRect();
  m.x = e.clientX - rect.left;
  m.y = e.clientY - rect.top;
  return m;
}
