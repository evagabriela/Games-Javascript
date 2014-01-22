window.onload = (function (){
  function Ball(x,y){
    this.init()
  }


Ball.prototype.init = function(x,y) {
  this.x = x;
  this.y = y;
};

Ball.prototype.draw = function(context){
  grid.beginPath();
  grid.arc(this.x, this.y);
  grid.fill();
};

})();