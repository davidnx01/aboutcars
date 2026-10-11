/* AboutCars — menu */
(function(){
  "use strict";
  var d=document, b=d.documentElement, btn=d.querySelector(".burger");
  if(btn){
    btn.addEventListener("click",function(){var o=b.classList.toggle("menu-open");btn.setAttribute("aria-expanded",o)});
    [].forEach.call(d.querySelectorAll(".nav a"),function(a){a.addEventListener("click",function(){b.classList.remove("menu-open");btn.setAttribute("aria-expanded","false")})});
  }
})();
