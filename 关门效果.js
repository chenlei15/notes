var container = document.getElementsByClassName("container");
var imgs = container[0].children;
var width = imgs[0].offsetWidth;
var offset = 170;

function init() {
  for (var i = 1; i < imgs.length; i++) {
    imgs[i].style.left =  width + offset * (i-1) + 'px';
  }
}

init();

function change(i) {
  init();
  for (var j = 1; j <= i; j++) {
    imgs[j].style.left = parseInt(imgs[j].style.left) - (width -  offset) + 'px';
  }
}

for (var i = 0; i < imgs.length; i++) {
  (function(i) {
    imgs[i].onmouseover = function(){
      change(i);
    };
  })(i);
}

